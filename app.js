let express=require('express');
let books=require('./routers/books');
let authors=require('./routers/authors');
let bodyParser=require('body-parser');
let mongoose=require('mongoose');
let app=express();

let url="mongodb://localhost:27017/week7lec2";
mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true },function(err){

});


app.use(bodyParser.json());



app.get('/books',books.getBooks);
app.post('/books',books.addNewBook);
//bookid as param, authorID as post body
app.post('/books/addAuthor/:bookId',books.addAuthor);

// app.get('/deleteAllBooks',books.deleteAll);

// Authors
app.get('/authors',authors.getAuthors);
app.post('/authors',authors.addNewAuthor);





app.listen(8080);