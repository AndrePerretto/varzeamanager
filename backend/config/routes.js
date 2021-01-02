const express = require('express')
const multer = require('multer')
module.exports = function(server) {
    
    const router = express.Router()
    server.use('/api', router)

    
    const usuarios = require('../api/usuarioservice')
}
