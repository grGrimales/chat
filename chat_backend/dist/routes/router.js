"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const router = (0, express_1.Router)();
router.post('/user/login', (req, res) => {
    const { password, username } = req.body;
    const users = [
        {
            id: 1,
            username: 'carlos',
            password: '123456'
        },
        {
            id: 2,
            username: 'grediana',
            password: '123456'
        },
        {
            id: 3,
            username: 'lucia',
            password: '123456'
        },
        {
            id: 4,
            username: 'saymon',
            password: '123456'
        }
    ];
    const userFromDatabase = users.filter(user => user.password === password && user.username === username);
    if (!userFromDatabase || userFromDatabase.length == 0) {
        return res.json({
            ok: false,
            msg: "username o password errados",
        });
    }
    const user = {
        id: userFromDatabase[0].id,
        username: userFromDatabase[0].username
    };
    if (user) {
        return res.json({
            ok: true,
            msg: "User login succes!",
            user
        });
    }
});
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const payload = { cuerpo, de };
    const server = server_1.default.instance;
    //server.io.emit('mensaje-nuevo', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    };
    const server = server_1.default.instance;
    //server.io.in(id).emit('mensaje-privado', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map