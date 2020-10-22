var express = require('express');
var app = express();

app.use(express.json());

app.post('/consulta', (req, res) => {
 var consultas = req.body;
 console.log(JSON.stringify(consultas));

}) 

app.get('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    console.log(" Get: Consultaid "+consultaid);
})

app.put('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    console.log(" Put: Consultaid "+consultaid);
   })

   app.put('/consulta/:consultaidusuario/',(req, res) => {
    var consultaidusuario = req.params.consultaidusuario;
    console.log(" Put: Consultaidusuario "+consultaidusuario);
   })

app.delete('/consulta/:consultaid',(req, res) => {
    var consultaid = req.params.consultaid;
    console.log(" Delete: Consultaid "+consultaid);
}) 


app.post('/user', (req, res) => {
    var user = req.body;
    console.log(JSON.stringify(user));
   
   }) 


   app.get('/user/:login',(req, res) => {
    var login = req.params.login;
    console.log(" Get: Login "+ login);
})

app.get('/user/:logout',(req, res) => {
    var logout = req.params.logout;
    console.log(" Get: Logout "+logout);
})

app.get('/user/:username',(req, res) => {
    var username = req.params.username;
    console.log(" Get: Username "+username);
})
   
app.put('/user/:username',(req, res) => {
    var username = req.params.username;
    console.log(" Put: Username "+username);
   })

app.delete('/consulta/:username',(req, res) => {
    var username = req.params.username;
    console.log(" Delete: Username "+username);
}) 




 app.listen(3000, function () {
      console.log('Aplicacao Web rodando na porta 3000!'); 
      });