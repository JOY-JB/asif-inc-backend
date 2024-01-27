import mongoose from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessages } from '../interfaces/error';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = Object.values(error.errors).map(
    el => ({
      path: el?.path,
      message: el?.message,
    }),
  );

  const statusCode = 400;
  const message = 'Validation Error';

  return {
    statusCode,
    message,
    errorMessages: errors,
  };
};

export default handleValidationError;
