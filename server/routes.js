import applicationsRouter from './api/controllers/applications/router';

export default function routes(app) {
  app.use('/api/v1/applications', applicationsRouter);
}
