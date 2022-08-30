import { Application } from 'express';
import * as request from 'supertest';

export const fakeApp = async (): Promise<{
  app: Application;
  agent: request.SuperTest<request.Test>;
}> => {
  // We need to import this module here in order to have our jest mocks taken into account
  const { createApp } = await import('../src/app');
  const app: Application = createApp();
  const agent: request.SuperTest<request.Test> = request.agent(app);
  return { app, agent };
};
