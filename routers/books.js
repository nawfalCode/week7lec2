let Book = require('../models/Book');
let Author = require('../models/Author');
module.exports = {
    getBooks: function (req, res) {
        Book.find().populate({path:'authors',select:'name'}).exec(function (err, data) {
            data[0].lectureName='FIT2095'
            res.json(data);
        })
    },
    addNewBook: function (req, res) {
        let newBook = new Book(req.body);
        newBook.save(function (err) {
            if (err)
                res.json(err);
            else
                res.json({
                    msg: 'Book Saved !!'
                });

        })
    },
    addAuthor: function (req, res) {
        let bookId = req.params.bookId;
        let authorId = req.body.id;
        Author.findOne({
            _id: authorId
        }).exec(function (err, author) {
            if (err)
                res.json(err);
            else {
                Book.findOne({_id: bookId}).exec(function (err, book) {
                    if(err) 
                    res.json(err);
                    else{
                        book.authors.push(authorId);
                        book.save(function(err){
                            if(err)
                            res.json(err);
                            else 
                            res.json("Author Added !!! :))");
                        })
                    }
                });

            }
        })

    }

}


// let obj={name:"Tim",age:23};

// obj.namne