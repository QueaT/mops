const router = require('express-promise-router')();
const express = require('express');

const userControler = require('../RouteControllers/controler');
const {
    validateBody,
    schemas
} = require('../helpers/helpers');
const middleWare = require('../Auth/authorization');



router.route('/')
.get(userControler.redirect)

router.route('/register')
 .get(userControler.register)
 .post(validateBody(schemas.authSchema),userControler.registerPost)


 router.route('/game/:token')
 .get(middleWare.authParams,userControler.game)
 module.exports = router;


 router.route('/login')
 .get(userControler.login)
 .post(validateBody(schemas.authSchema),userControler.loginPost)