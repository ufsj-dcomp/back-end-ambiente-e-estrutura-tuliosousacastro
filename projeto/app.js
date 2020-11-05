var express = require('express');
var app = express();

var mysql = require('mysql');   
var connection = mysql.createConnection({
    host: "localhost",
    user: 'tecweb',
    password: "tecweb",
    database: "dbtecweb"
});


app.use(express.json());

app.post('/consulta', (req, res) => {
 var consultas = req.body;
 console.log("POST CONSULTA ");

 connection.query("INSERT INTO consulta SET ?",[consultas],(err, result) => {
     if(err){
         console.log(err);
         resp.status(500).end();
     } else{
         resp.status(200);
         resp.json(result);
     }
 });

}); 

app.get('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    console.log(" Get: Consultaid "+consultaid);

    connection.query("SELECT * FROM consulta WHERE id = ?", [consultaid],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
});

app.put('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    var consulta = req.body;
    console.log(" Put: Consultaid "+consultaid);
    connection.query("UPDATE consulta SET ? WHERE id = ?", [consulta,consultaid],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });


   })

   app.get('/consulta/:consultaidusuario/',(req, res) => {
    var consultaidusuario = req.params.consultaidusuario;
    console.log(" GET: Consultaidusuario "+consultaidusuario);

    connection.query("SELECT * FROM consulta WHERE id = ?", [consultaidusuario],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
   })

app.delete('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    console.log(" Delete: Consultaid "+consultaid);
    connection.query("DELETE FROM consulta WHERE id = ?", [consultaid],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });



}) 


app.post('/user', (req, res) => {
    var user = req.body;
    console.log(JSON.stringify(user));
    connection.query("INSERT INTO consulta SET ?",[user],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else{
            resp.status(200);
            resp.json(result);
        }
    });
   
   }) 



app.get('/user/:username',(req, res) => {
    var username = req.params.username;
    console.log(" Get: Username "+username);
    connection.query("SELECT * FROM consulta WHERE id = ?", [username],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
})
   
app.put('/user/:username',(req, res) => {
    var username = req.params.username;
    var user = req.body;
    console.log(" Put: Username "+username);

    connection.query("UPDATE consulta SET ? WHERE id = ?", [user,username],(err, result) => {
        if(err){
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });

   })

app.delete('/consulta/:username',(req, res) => {
    var username = req.params.username;
    console.log(" Delete: Username "+username);
    connection.query("DELETE FROM consulta WHERE id = ?", [username],(err, result) => {
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