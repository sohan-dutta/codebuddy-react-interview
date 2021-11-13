/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { isEmpty } from 'lodash';
import faker from 'faker';
import { v4 as uuid } from 'uuid';

const API_URL = 'https://codebuddy.review';

const isPrime = (n, i = 2) => {
  if (n === 0 || n === 1) return false;
  if (n === i) return true;

  if (n % i === 0) return false;

  return isPrime(n, i + 1);
};

const handlers = [
  rest.post(`${API_URL}/submit`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'Success',
        data: isEmpty(req.body) ? {} : JSON.parse(req?.body ?? {}),
      }),
    ),
  ),

  rest.get(`${API_URL}/posts`, (req, res, ctx) => {
    const posts = Array.from({ length: 10 }, () => ({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      writeup: faker.lorem.words(16),
      image: faker.image.food(640, 400),
      avatar: faker.image.avatar(),
    }));

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          posts,
        },
      }),
    );
  }),

  rest.get(`${API_URL}/seats`, (req, res, ctx) => {
    let seatNumber = 1;
    const seats = Array.from({ length: +req.url.searchParams.get('count') ?? 0 }, (_, i) => ({
      id: uuid(),
      seats: Array.from({ length: i + 1 }, (__, j) => ({
        id: uuid(),
        row: i,
        seat: j,
        isReserved: isPrime(seatNumber),
        seatNumber: seatNumber++,
      })),
    })).reverse();

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          seats,
        },
      }),
    );
  }),
];

export default handlers;
