
var pg = require('pg');

exports.select =  function (sql, config, callback){
    /*
    const config = {
        host: '34.212.28.6',
        //host: 'localhost',
        user: 'postgres',
        database: 'octoplex_homologacao',
        password: 'Joao3:16',
        port: 5432
        //port: 5434
    };
    */

    if(!config){
        var array = [];
        callback(array);
    }else{
        const pool = new pg.Pool(config);
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Falha ao conectar ao banco de dados" + err);
            }
            client.query(sql, function (err, result) {
                 done();
                 if (err) {
                     console.log(err);
                     callback(err);
                 }
                 callback(result.rows);
            })
        })
    }
    
}

exports.execute =  function (sql, config, callback){

    if(!config){
        var array = [];
        callback(array);
    }else{
        const pool = new pg.Pool(config);
        pool.connect(function (err, client, done) {
            if (err) {
                console.log("Falha ao conectar ao banco de dados" + err);
            }
            client.query(sql, function (err, result) {
                done();
                if (err) {
                    console.log(err);
                    callback(err);
                }else{
                    callback(result);
                }
            })
        })
    }
}






exports.executeObj =  function (table, parametros,config, callback){
    
    var sql = "";
    var columns = "";
    var values = "";
    var nome = "";
    var i = 0;
    var up = false;
    var id = guid();
    var retorno = {};

    if(!config){
        var array = [];
        callback(array);
    }else{

    if(parametros.id){
        id = parametros.id;
        up = true;
        sql = "UPDATE " + table + " SET ";
        for (index in parametros) {
            if(index != "id"){
                nome = "";

                switch (index.substring(0,2)) {
                    case "nm":
                        nome = "'" + parametros[index] + "'";
                        break; 
                    case "dt":
                        if(!parametros[index]){
                            nome = "NULL";
                        }else{
                            var dataArray = parametros[index].split("/");
                            var data = dataArray[1] + "/" + dataArray[0] + "/" + dataArray[2]

                            nome = "'" + data + "'";
                        }
                        break;   
                    case "im":
                        nome = "'" + parametros[index] + "'";
                        break;                                   
                    case "vl":  
                        if(typeof(parametros[index]) != "number" && parametros[index].substr(parametros[index].length - 3,1) == ","){
                            parametros[index] = parametros[index].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                        }
                        
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";
                    break;
                    case "nr":  
                                                 
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";
                    break;  
                    case "db":  
                                                 
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";
                    break;                  
                    default:
                        nome = "" + parametros[index] + "";
                        break;
                }
                
                if(i == 0){
                    sql += " " + index + "=" + nome;
                }else{
                    sql += ", " + index + "=" + nome;
                }
                i += 1; 
            }
        }

        sql += " WHERE id='" + parametros.id + "'";         
    }else{
        parametros.id = guid()
        for (index in parametros) {
            if(index != "id"){
                console.log(index.substring(0,2))
                switch (index.substring(0,2)) {
                    case "nm":
                        nome = "'" + parametros[index] + "'";
                        break; 
                    case "dt":
                        if(!parametros[index]){
                            nome = "NULL";
                        }else{
                            var dataArray = parametros[index].split("/");
                            var data = dataArray[1] + "/" + dataArray[0] + "/" + dataArray[2]

                            nome = "'" + data + "'";
                        }
                        break;        
                    case "im":
                        nome = "'" + parametros[index] + "'";
                        break;                                          
                    case "vl": 
                        if(typeof(parametros[index]) != "number" && parametros[index].substr(parametros[index].length - 3,1) == ","){
                            parametros[index] = parametros[index].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                        }
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";   
                    case "db": 
                        if(typeof(parametros[index]) != "number" && parametros[index].substr(parametros[index].length - 3,1) == ","){
                            parametros[index] = parametros[index].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                        }
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";    
                        break;
                        
                    case "nr":                                                   
                        if(!parametros[index]){
                            parametros[index] = "0";
                        }
                        nome = "" + parametros[index] + "";
                        break;       
                    default:
                        nome = "'" + parametros[index] + "'";
                        break;
                }


                if(i == 0){
                    columns += index;
                    values += nome;
                }else{
                    columns += ", " + index;
                    values += ", " + nome;
                }
                
                i += 1;
            }
        }

        sql = "INSERT INTO " + table + " (id," + columns + ") VALUES('"+ id + "'," + values + ")";
    }
    
    const pool = new pg.Pool(config);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Falha ao conectar ao banco de dados" + err);
            retorno.message = "Falha ao conectar ao banco de dados" + err;
            retorno.lastID = "";
            retorno.success = false;
            callback(retorno);
        }
        client.query(sql, function (err, result) {
            try {
                done();
                if (err) {
                    console.log(err);
                    retorno.message = err.detail;
                    retorno.lastID = "";
                    retorno.success = false;
                    callback(retorno);
                }else{
                    retorno.message = "Gravado com sucesso.";
                    retorno.lastID = id;
                    retorno.success = true; 
                    callback(retorno);
                }
               
            } catch (error) {
                console.log(error)
            }
             
        })
    })

}
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }


  exports.executeObjArray =  function (table,count, parametros,config, callback){
    
    var sql = "";
    var columns = "";
    var values = "";
    var nome = "";
    var i = 0;
    var up = false;
    var id = guid();
    var retorno = {};

    if(!config){
        var array = [];
        callback(array);
    }else{

        for (let indexArray = 0; indexArray < count; indexArray++) {
            values = "";
            columns = "";
            i=0;
            if(parametros.id[indexArray]){
                id = parametros.id[indexArray];
                up = true;
                sql += "UPDATE " + table + " SET ";
                for (index in parametros) {
                    if(index != "id"){
                        nome = "";
        
                        switch (index.substring(0,2)) {
                            case "nm":
                                nome = "'" + parametros[index][indexArray] + "'";
                                break; 
                            case "dt":
                                if(!parametros[index][indexArray]){
                                    nome = "NULL";
                                }else{
                                    var dataArray = parametros[index][indexArray].split("/");
                                    var data = dataArray[1] + "/" + dataArray[0] + "/" + dataArray[2]
        
                                    nome = "'" + data + "'";
                                }
                                break;   
                            case "im":
                                nome = "'" + parametros[index][indexArray] + "'";
                                break;                                   
                            case "vl":  
                                if(typeof(parametros[index][indexArray]) != "number" && parametros[index][indexArray].substr(parametros[index][indexArray].length - 3,1) == ","){
                                    parametros[index][indexArray] = parametros[index][indexArray].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                                }
                                
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";
                            break;
                            case "nr":  
                                                         
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";
                            break;  
                            case "db":  
                                                         
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";
                            break;                  
                            default:
                                nome = "" + parametros[index][indexArray] + "";
                                break;
                        }
                        
                        if(i == 0){
                            sql += " " + index + "=" + nome;
                        }else{
                            sql += ", " + index + "=" + nome;
                        }
                        i += 1; 
                    }
                }
        
                sql += " WHERE id='" + parametros.id[indexArray] + "';";         
            }else{
                id = guid();
                parametros.id[indexArray] = guid()
                for (index in parametros) {
                    if(index != "id"){
                        console.log(index.substring(0,2))
                        switch (index.substring(0,2)) {
                            case "nm":
                                nome = "'" + parametros[index][indexArray] + "'";
                                break; 
                            case "dt":
                                if(!parametros[index][indexArray]){
                                    nome = "NULL";
                                }else{
                                    var dataArray = parametros[index][indexArray].split("/");
                                    var data = dataArray[1] + "/" + dataArray[0] + "/" + dataArray[2]
        
                                    nome = "'" + data + "'";
                                }
                                break;        
                            case "im":
                                nome = "'" + parametros[index][indexArray] + "'";
                                break;                                          
                            case "vl": 
                                if(typeof(parametros[index][indexArray]) != "number" && parametros[index][indexArray].substr(parametros[index][indexArray].length - 3,1) == ","){
                                    parametros[index][indexArray] = parametros[index][indexArray].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                                }
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";   
                            case "db": 
                                if(typeof(parametros[index][indexArray]) != "number" && parametros[index][indexArray].substr(parametros[index][indexArray].length - 3,1) == ","){
                                    parametros[index][indexArray] = parametros[index][indexArray].replace(".","").replace(".","").replace(".","").replace(".","").replace(".","").replace(",",".")
                                }
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";    
                                break;
                                
                            case "nr":                                                   
                                if(!parametros[index][indexArray]){
                                    parametros[index][indexArray] = "0";
                                }
                                nome = "" + parametros[index][indexArray] + "";
                                break;       
                            default:
                                nome = "'" + parametros[index][indexArray] + "'";
                                break;
                        }
        
        
                        if(i == 0){
                            columns += index;
                            values += nome;
                        }else{
                            columns += ", " + index;
                            values += ", " + nome;
                        }
                        
                        i += 1;
                    }
                }
        
                sql += "INSERT INTO " + table + " (id," + columns + ") VALUES('"+ id + "'," + values + ");";
            }
            
        }
    
    
    const pool = new pg.Pool(config);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Falha ao conectar ao banco de dados" + err);
            retorno.message = "Falha ao conectar ao banco de dados" + err;
            retorno.lastID = "";
            retorno.success = false;
            callback(retorno);
        }
        client.query(sql, function (err, result) {
            try {
                done();
                if (err) {
                    console.log(err);
                    retorno.message = err.detail;
                    retorno.lastID = "";
                    retorno.success = false;
                    callback(retorno);
                }else{
                    retorno.message = "Gravado com sucesso.";
                    retorno.lastID = id;
                    retorno.success = true; 
                    callback(retorno);
                }
               
            } catch (error) {
                console.log(error)
            }
             
        })
    })

}
}
