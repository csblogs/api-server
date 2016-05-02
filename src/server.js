import express from 'express';
import bodyParser from 'body-parser';


import configureHelmet from './security/configure-helmet';
import { configureAuthentication } from './security/authentication/service-authentication';

import database from './database';
import log from './log';
import requestLogger from './log/request-logger';

import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import authenticationRoutes from './routes/authentication';
import notFoundRoute from './routes/not-found';

database.sync()
  .then(() => {
    const app = express();

    configureHelmet(app);
    configureAuthentication();

    app.use(bodyParser.json());
    app.use(requestLogger);

    app.use('/v2.0/users', userRoutes);
    app.use('/v2.0/posts', postRoutes);
    app.use('/v2.0/authentication', authenticationRoutes);
    app.use(notFoundRoute);

    const port = process.env.PORT;

    app.listen(port, () => {
      log.info({ port }, 'CSBlogs API now running');
    });
  });
