/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { isEmpty } from 'lodash';
import faker from 'faker';

const API_URL = 'https://codebuddy.review';

const handlers = [
  rest.post(`${API_URL}/signup`, (req, res, ctx) =>
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
];

export default handlers;
