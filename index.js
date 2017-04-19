let picklesExpress = require('express');
let app = picklesExpress();


app.get('/lunchtime', function (request, response) {
response.send('But I am hungry!');
})

app.get('/realPage', function (request, response){
  response.sendFile('./example.html', {root: __dirname})
});

app.get('/users/:userId/books/:bookId', function (request,response){
  response.send(request.params) params give you what was given

})

let movies = [
   { title: ' Batman begins', rating: 'Awesome'},
   { title: ' The note book', rating: "Didn't see it"}
   { title: 'Dead pool' , rating: 'Shirtworthy'}
]

//request.params gives you an object of movies and the '.movie' is child
//this takes the information you wanted and puts it on the screen.

app.get('/movies/:movieId', function (request, response) {
  let movieId = request.params.movieId;
  let index   = ParseInt(movieId);
  let movie   = movies[index];
  response.send(movie);
})

app.listen(3000, function () {
console.log('The express is now listening at port 3000. To see it in action, open your browser and enter e in the address bar.')
});
