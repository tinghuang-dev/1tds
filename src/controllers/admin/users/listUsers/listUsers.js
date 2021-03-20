import { Op } from 'sequelize';
import Users from '../../../../db/models/users';

const paginate = (query) => {
  const page = parseFloat(query.page);
  const pageSize = parseFloat(query.pageSize);

  const offset = page * pageSize;

  return {
    offset,
    limit: pageSize,
  };
};

const where = (query) => {
  const result = /(.*)\[OP\.(.*)\](.*)/.exec(query.where);

  if (!result) {
    return {};
  }

  const [, key, operator, value] = result;

  const enhancedValue = {
    like: `%${value}%`,
  }[operator] || value;

  return {
    [key]: {
      [Op[operator]]: enhancedValue,
    },
  };
};

const listUsers = async (req, res) => {
  const result = await Users.findAndCountAll({
    attributes: ['id', 'mobile', 'email', 'address', 'status', 'createdAt', 'updatedAt'],
    ...paginate(req.query),
    where: {
      ...where(req.query),
    },
  });

  res.status(200).json(result);
};

export default listUsers;
