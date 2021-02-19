import https from 'https';
import fs from 'fs';
import path from 'path';
import ConfigServerResponse from './ConfigServerResponse';

class CreateHttpsServer {
  constructor() {
    this.listener(
      https.createServer(
        {
          cert: fs.readFileSync(
            path.join(String(process.env.ROOT_DIR), 'ssl/local.crt'),
          ),
          key: fs.readFileSync(
            path.join(String(process.env.ROOT_DIR), 'ssl/local.key'),
          ),
        },
        (req, res): void => {
          new ConfigServerResponse(req, res, 'http');
        },
      ),
    );
  }

  private listener(httpsServer: https.Server): void {
    httpsServer.listen(3001);
  }
}

export default CreateHttpsServer;
