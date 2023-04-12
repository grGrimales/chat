"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const http_1 = __importDefault(require("http"));
//import * as socket from '../sockets/socket';
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        //   this.io = socketIO(this.httpServer);
        //  this.escucharSockets();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    /*
        private escucharSockets() {
    
            console.log('Escuchando conexiones - sockets');
    
            this.io.on('connection', cliente => {
    
                // Conectar cliente
                // socket.conectarCliente(cliente);
    
                // Configurar usuario
                //   socket.configurarUsuario(cliente, this.io);
    
                // Mensajes
                //  socket.mensaje(cliente, this.io);
    
                // Desconectar
                // socket.desconectar(cliente);
    
    
            });
    
        }
    */
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map