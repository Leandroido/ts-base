import CreateHttpServer from './CreateHttpServer';
import CreateHttpsServer from './CreateHttpsServer';

class Starter {
  constructor() {
    new CreateHttpServer();

    new CreateHttpsServer();
  }
}

export default Starter;
