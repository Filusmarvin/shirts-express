const express = require('express');
const app = express();
let data = require('./data.json');


app.get('/user/:id' , function(request, response){
let id = request.params.id;
  response.send(data[id].id);

});

app.listen(3000, function (){
  console.log('The server is running.');
});

function hello (){
  console.log('I am the best')
}
