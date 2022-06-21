/**
 * @author Leandro Carvalho Julio
 * @date 21/06/2022
 */
import dotenv from 'dotenv';
import express, {Express, Request, Response} from 'express';

/**
 * Classe inicial do sistema
 */
class App {

  /**
   * Carrega e configura o servidor da aplicação
   */
  constructor() {
    // Variáveis globais colocadas em .env
    dotenv.config();
    // Instância de express
    const server:Express = express();

    // Configuração do frontend
    server.set("views", './src/views');
    server.set('view engine', 'ejs');
    server.use(express.static('./src/public'));
    server.disable('x-powered-by');

    // Carregando Middlewares
    this.middlewares(server);

    // Carregando Rotas
    this.routes(server);

    // Rodando aplicação
    this.run(server, 3000);
  }

  /**
   * Método  para carregar middlewares
   * @param server
   */
  middlewares(server:Express):void {}

  /**
   * Método para carregar rotas
   * @param server
   */
  routes(server:Express):void {
    server.get('/', (_: Request, res: Response):void => {
      res.render('pages/index', {title: "Index"});
    });
  }

  /**
   * Método para iniciar aplicação
   * @param server
   * @param port
   */
  run(server:Express, port: number):void {
    server.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  }
}

export default new App;
