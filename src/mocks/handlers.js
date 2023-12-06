import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const API_URL = "https://codebuddy.review";

const isPrime = (n, i = 2) => {
  if (n === 0 || n === 1) return false;
  if (n === i) return true;

  if (n % i === 0) return false;

  return isPrime(n, i + 1);
};

function getQueryParams(url) {
  const params = new URLSearchParams(new URL(url).search);
  let queryParams = {};
  for (let param of params) {
    queryParams[param[0]] = param[1];
  }
  return queryParams;
}

const handlers = [
  http.post(`${API_URL}/submit`, async ({ request }) => {
    const body = await request.json();
    console.log(body);

    return HttpResponse.json(
      {
        message: "Success",
        data: body,
      },
      { status: 200 },
    );
  }),

  http.get(`${API_URL}/posts`, () => {
    const posts = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      writeup: faker.lorem.words(16),
      image: faker.image.urlLoremFlickr({ category: "food" }),
      avatar: faker.image.avatar(),
    }));

    return HttpResponse.json({ data: posts }, { status: 200 });
  }),

  http.get(`${API_URL}/seats`, ({ request }) => {
    let seatNumber = 1;

    const count = +getQueryParams(request.url)?.count || 0;

    const seats = Array.from({ length: count }, (_, i) => ({
      id: uuid(),
      seats: Array.from({ length: i + 1 }, (__, j) => ({
        id: uuid(),
        row: i,
        seat: j,
        isReserved: isPrime(seatNumber),
        seatNumber: seatNumber++,
      })),
    })).reverse();

    return HttpResponse.json({ data: seats }, { status: 200 });
  }),
];

export default handlers;
