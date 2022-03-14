const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser, newUser, renewToken } = require('../controllers/auth');

const router = Router();

// Login usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),        
], loginUser);

// Nuevo usuario
router.post('/new', newUser );

// Validar & revalidar token
router.get('/renew', renewToken);

module.exports = router;