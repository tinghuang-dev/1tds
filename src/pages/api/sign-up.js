const Users = require('../../db/models/users');

export default async (req, res) => {
  const users = {
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
    status: req.body.status,
  };

  await Users.create(users);
  res.statusCode = 201;
  res.end();
};
