import { sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export default function createAuthToken(tokenData) {
  const token = sign(tokenData, JWT_SECRET, { expiresIn: '15m' });

  return token;
}
