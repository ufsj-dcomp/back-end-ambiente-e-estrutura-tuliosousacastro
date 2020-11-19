var express = require('express');
var app = express();
var cors = require('cors');


var mysql = require('mysql');   
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    port: 3306,
    database: "dbtecweb"
});


app.use(express.json());
app.use(cors());
app.post('/consulta', (req, resp) => {
 var consultas = req.body;
 

 connection.query("INSERT INTO consulta SET ?",[consultas],(err, result) => {
     
     if(err){
         console.log(err);
         resp.status(500).end();
     } else{
         resp.status(200);
         resp.json(result.insertId);
         console.log("POST CONSULTA " + result.insertId);
     } 
 });

}); 


app.get('/consulta',(req, resp) => {
    var consultaid = req.params.consultaid;
    console.log(" Get: Consultaid "+consultaid);

    connection.query("SELECT * FROM consulta",(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
});

app.get('/consulta/:consultaid',(req, resp) => {
    var consultaid = req.params.consultaid;
    console.log(" Get: Consultaid "+consultaid);

    connection.query("SELECT * FROM consulta WHERE consultaid = ?", [consultaid],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
});

app.put('/consulta/:consultaid',(req, resp) => {
    var consultaid = req.params.consultaid;
    var consulta = req.body;
    console.log(" Put: Consultaid "+consultaid);
    connection.query("UPDATE consulta SET ? WHERE consultaid = ?", [consulta,consultaid],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });


   })



   

   app.get('/consulta/consultausername/:consultausername/',(req, resp) => {
    var consultausername = req.params.consultausername;
    console.log(" GET: Consultaidusuario "+consultausername);

    connection.query("SELECT * FROM consulta WHERE consultausername = ?", [consultausername],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
   })

    app.delete('/consulta/:consultaid',(req, resp) => {
        var consultaid = req.params.consultaid;
        console.log(" Delete: Consultaid "+consultaid);
        connection.query("DELETE FROM consulta WHERE consultaid = ?", [consultaid],(err, result) => {
            if(err){
                console.log(err);
                resp.status(500).end();
            } else {
                resp.status(200);
                resp.json(result);
            }
        });



    }) 


    app.post('/user', (req, resp) => {
    var user = req.body;
    console.log(JSON.stringify(user));
    connection.query("INSERT INTO user SET ?",[user],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else{
            resp.status(200);
            resp.json(result);
        }
    });
   
   }) 

   app.get('/user',(req, resp) => {
    console.log(" Get: User ");
    connection.query("SELECT * FROM user",(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
})

app.get('/user/:username',(req, resp) => {
    var username = req.params.username;
    console.log(" Get: Username "+username);
    connection.query("SELECT * FROM user WHERE username = ?", [username],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
})
   
app.put('/user/:username',(req, resp) => {
    var username = req.params.username;
    var user = req.body;
    console.log(" Put: Username "+username);

    connection.query("UPDATE user SET ? WHERE username = ?", [user,username],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });

   })

app.delete('/consulta/:username',(req, resp) => {
    var username = req.params.username;
    console.log(" Delete: Username "+username);
    connection.query("DELETE FROM user WHERE username = ?", [username],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
}) 




 app.listen(3000, function () {
      console.log('Aplicacao Web rodando na porta 3000!'); 
      });