const withMethod = (method) => async (req, res) => {
  const controller = method[req.method];

  if (!controller) {
    res.status(405).end();

    return;
  }

  await controller(req, res);
};

export default withMethod;
