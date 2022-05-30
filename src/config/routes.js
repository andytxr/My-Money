const express = require('express');
const auth = require('./auth');

module.exports = function(server){

    //Protected Routes

    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');

    //Unprotected Routes

    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/valideteToken', AuthService.validateToken);

}