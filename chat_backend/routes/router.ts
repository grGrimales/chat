
import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();


router.post('/user/login', (req: Request, res: Response) => {
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
    ]

    const userFromDatabase = users.filter(user => user.password === password && user.username === username)


    if (!userFromDatabase || userFromDatabase.length == 0) {
        return res.json({
            ok: false,
            msg: "username o password errados",


        });
    }

    const user = {
        id: userFromDatabase[0].id,
        username: userFromDatabase[0].username
    }

    if (user) {

        return res.json({
            ok: true,
            msg: "User login succes!",
            user

        })

    }


})



router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    const payload = { cuerpo, de };

    const server = Server.instance;
    //server.io.emit('mensaje-nuevo', payload);


    res.json({
        ok: true,
        cuerpo,
        de
    });

});


router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    const payload = {
        de,
        cuerpo
    }


    const server = Server.instance;

    //server.io.in(id).emit('mensaje-privado', payload);


    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});



export default router;


