import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

process.on('uncaughtException', () => {
  console.log('uncaught exception detected...');
  process.exit(1);
});

const main = async () => {
  let server: Server;

  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () =>
      console.log(`App listening on port ${config.port}!`),
    );

    console.log('database connected successfully');
  } catch (error) {
    console.log('database connected failed', error);
  }

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('server closed');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };

  const unExpectedErrorHandler = (error: Error) => {
    console.log(error);
    exitHandler();
  };

  process.on('unhandledRejection', unExpectedErrorHandler);
  process.on('uncaughtException', unExpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received!');
    if (server) {
      server.close();
    }
  });
};

main();
