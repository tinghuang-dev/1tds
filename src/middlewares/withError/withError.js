import Boom from '@hapi/boom';

const withError = (next) => async (req, res) => {
  try {
    await next(req, res);
  } catch (error) {
    if (Boom.isBoom(error)) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);

      return;
    }

    throw error;
  }
};

export default withError;
