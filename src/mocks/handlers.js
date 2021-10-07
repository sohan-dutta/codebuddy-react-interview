/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { isEmpty } from 'lodash';

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
];

export default handlers;
