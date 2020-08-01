const express = require('express');
const api = express.Router();

api.use(require('./aquario/aquario.router'));
module.exports = api;