// para poder tener la ayuda de código en la respuesta
const { response } = require('express');
// const { validationResult } = require('express-validator');

// para poder tener la ayuda de código en la respuesta
const loginUser = (req, res = response) =>{    
    
    const { email, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });
}

const newUser = (req, res = response) =>{    

    const { email, name, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Crea usuario /new'
    });
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