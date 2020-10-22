var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('to no /');

}) 

app.get('/aplicativo', (req, res) => {
  res.send('Aplicativo Exemplo!');
});

app.get('/html', (req, res) => {  
  res.status(404).sendFile(__dirname + '/index.html'); //Sets the HTTP status for the response.
}); 

app.post('/imagens', (req, res) => {
  res.send('magem 1 –Imagem 2 –Imagem 3');
});

app.delete('/clientes/10', (req, res) => {
  res.send('Cliente 10 removido com sucesso');
});

 app.listen(3000, function () {
      console.log('Aplicacao Web rodando na porta 3000!'); 
      });
