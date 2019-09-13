let Author=require('../models/Author');
module.exports = {
    getAuthors: function (req, res) {

        Author.find().exec(function(err,data){
              res.json(data);  
        });

    },
    addNewAuthor: function (req, res) {
        let newAuthor=Author(req.body);
        newAuthor.save(function(err){
            if(err)
                res.json(err);
                else 
                res.json({msg:'Author Saved!!! :)'});
        })

    },
    deleteAll:function(req,res){
        Author.deleteMany({}).exec(function(err){
            
        })
    }
}