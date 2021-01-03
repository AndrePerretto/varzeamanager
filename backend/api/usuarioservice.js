const server = require('../config/server');
const express = require('express');
const router = express.Router();
server.use('/api/usuarios', router);
const general = require('../api/core/general.js');
var config = {};
var cors = require('cors');

router.route('/*').get(cors(),function(req, res, next){
    config = {
        host: '18.228.166.97',
        user: 'postgres',
        database: 'varzea_manager',
        password: 'Joao3:16',
        port: 5432
    };
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

router.route('/*').post(cors(),function(req, res, next){
    config = {
        host: '18.228.166.97',
        user: 'postgres',
        database: 'varzea_manager',
        password: 'Joao3:16',
        port: 5432
    };
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

router.route('/listarusuarios').get(function(req, res) {
 
    var sql = "SELECT * FROM usuarios";
    general.select(sql, config, function(ret){
        res.send(ret);
    })   
 
})

router.route('/gravar').post(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
    var atable = req.baseUrl.split("/");
    var table = "";
    if(atable.length > 0){
        table = atable[atable.length - 1]
    }
    var parametros = req.body;
    general.executeObj(table,parametros,config,  function(ret){
        res.send(ret);
    })      
})

router.route('/delete/:id').get(function(req, res) {
    var id = req.param('id');
    var atable = req.baseUrl.split("/");
    var table = "";
    if(atable.length > 0){
        table = atable[atable.length - 1]
    }

    var sql = "DELETE FROM " + table + " WHERE id='" + id + "'";
    general.execute(sql,config,  function(ret){
        res.send(ret);
    })    
})

router.route('/listsearch').get(function(req, res) {
    var sql = "SELECT * ";
    sql += " FROM usuarios ORDER BY nm_nome";
    general.select(sql, config, function(ret){
        res.send(ret);
    })    
})

router.route('/search/:id').get(function(req, res) {
    var id = req.param('id');
    var sql = "SELECT * ";
    sql += " FROM usuarios WHERE id='" + id + "'";
    general.select(sql, config, function(ret){
        res.send(ret);
    })    
})


router.route('/login/:login/:senha').get(cors(),function(req, res) {  

    var login = req.param('login');
    var senha = req.param('senha');
    
    var sql = "SELECT * FROM usuarios WHERE nm_email='" + login + "' AND nm_senha='" + senha + "'";
    general.select(sql, config, function(ret){
        res.send(ret);
    })    
})

