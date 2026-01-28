import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './utils/logger.util.js';

// Feature routes
import v1Routes from './routes/v1/index.js';

// Error middleware
import { errorHandler, notFound } from './middlewares/error.middleware.js';

const app = express();

// Security headers
app.use(helmet());

// Enable CORS
app.use(
  cors({
    origin: '*',
    credentials: true
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logging → Winston
app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim())
    }
  })
);

app.get('/', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is healthy'
  });
});

app.use('/api/v1', v1Routes);

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

export default app;