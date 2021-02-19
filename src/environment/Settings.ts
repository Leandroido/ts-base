import Development from './Development';
import Production from './Production';

class Settings {
  constructor() {
    process.env.NODE_ENV == 'PRODUCTION'
      ? new Production()
      : new Development();
  }
}

export default new Settings();
