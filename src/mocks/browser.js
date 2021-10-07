/* eslint-disable import/no-extraneous-dependencies */
import { setupWorker } from 'msw';
import handlers from './handlers';

const worker = setupWorker(...handlers);

export default worker;
