const express = require('express');
const app     = express();
const data      = require('./data.json');

app.use(express.static('public'));

app.get('/', function (request , response){
  response.sendFile('./tshirt.html', {root: __dirname})
});

app.get('/shirt/:id' , function(request, response){
let id = parseInt(request.params.id);
  response.send(data[id]);
});


// needs this file so it can run on server 3000
app.listen(3000, function (){
  console.log('The server is running.');
});
