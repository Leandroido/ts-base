import http from 'http';
import ConfigServerResponse from './ConfigServerResponse';

class CreateHttpServer {
  constructor() {
    this.listener(
      http.createServer((req, res): void => {
        new ConfigServerResponse(req, res, 'http');
      }),
    );
  }

  private listener(httpServer: http.Server): void {
    httpServer.listen(3000);
  }
}

export default CreateHttpServer;
