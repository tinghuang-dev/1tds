import Boom from '@hapi/boom';

const withMethod = (method) => async (req, res) => {
  const next = method[req.method];

  if (!next) {
    const error = Boom.methodNotAllowed();
    const { statusCode, payload } = error.output;

    res.status(statusCode).json(payload);
  }

  await next(req, res);
};

export default withMethod;
