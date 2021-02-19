import http from 'http';
import { StringDecoder } from 'string_decoder';
import { URL } from 'url';
// import Helper from '../libs/Helper';
// import routes from '../routes/Router';

class ConfigServerResponse {
  constructor(
    req: http.IncomingMessage,
    res: http.ServerResponse,
    protocol: string,
  ) {

    // Parse the url
    const parsedUrl: URL = new URL(
      protocol + '://' + req.headers.host + req.url,
    );
    const trimmedPath: string = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    const method: string = req.method == 'string' ? req.method.toLocaleLowerCase() : 'get';
    const headers: http.IncomingHttpHeaders = req.headers;

    // Get the payload,if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data: Buffer): void => {
      buffer += decoder.write(data);
    });

    // Construct the data object to send to the handler
    const data = {
      trimmedPath: trimmedPath,
      queryStringObject: parsedUrl.searchParams.toString(),
      method: method,
      headers: headers,
      payload: buffer,
    };

    console.log(parsedUrl);

    req.on('end', (): void => {
      buffer += decoder.end();
      const payloadString = JSON.stringify(data);

      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(payloadString);
    });
  }
}

export default ConfigServerResponse;
