import path from 'path';

class Development {
  constructor() {
    process.env.NODE_ENV = 'DEVELOPMENT';
    process.env.HTTP_PORT = '3000';
    process.env.HTTPS_PORT = '3001';
    process.env.HOST = 'localhost';

    process.env.HASHING_SECRET = 'TopSecret';
    process.env.ROOT_DIR = path.join(__dirname, '../../');

    process.env.DATABASE_HOSTNAME = 'localhost:27017';
    process.env.DATABASE_USERNAME = 'user';
    process.env.DATABASE_PASSWORD = 'pswd';
    process.env.DATABASE_DATABASE = 'database';
  }
}

export default Development;
