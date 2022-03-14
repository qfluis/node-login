// para poder tener la ayuda de código en la respuesta
const { response } = require('express');
const { db } = require('../models/User');
const User = require('../models/User');

// para poder tener la ayuda de código en la respuesta
const loginUser = (req, res = response) =>{    
    
    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
}

const newUser = async (req, res = response) =>{   
    const { email, name, password } = req.body;
    try {
        // verificar el email
        const user = await User.findOne({ email });

        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new User( req.body );

        // Hashear password

        // Generar JWT

        // Crear usuario en BD
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        })

    } catch (error) {
        return res.status(500).json({  // Error interno
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }    
}

const renewToken = (req, res = response) =>{    
    return res.json({
        ok: true,
        msg: ' /renew'
    });
}

module.exports = {
    loginUser,
    newUser,
    renewToken
};