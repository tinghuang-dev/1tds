import { compose } from 'ramda';
import withAuth from '../../../middlewares/withAuth';
import withError from '../../../middlewares/withError';

const getUser = async (req, res) => {
  const { user } = req;

  const responseUser = {
    id: user.id,
    email: user.email,
    mobile: user.mobile,
    address: user.address,
  };

  res.status(200).json(responseUser);
};

export default compose(
  withError,
  withAuth,
)(getUser);
