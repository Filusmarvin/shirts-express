const express = require('express');
const app = express();
let data = require('./data.json');


app.get('/shirt/:id' , function(request, response){
let id = request.params.id;
  response.send(data[id]);
});
app.use(express.static('public'));

app.get('/t-shirt-shop', function (request , response){
  response.sendFile('/tshirt.html', {root: __dirname})
});


// needs this file so it can run on server 3000
app.listen(3000, function (){
  console.log('The server is running.');
});
