import { ZodError } from 'zod';

const handleZodError = (error: ZodError) => {
  return {
    statusCode: 400,
    message: 'Validation error',
    errorMessages: error?.errors.map(error => ({
      path: error?.path[error.path.length - 1],
      message: error?.message,
    })),
  };
};

export default handleZodError;
