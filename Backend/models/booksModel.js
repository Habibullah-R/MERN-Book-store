const mongoose = require('mongoose');

const booksModel = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please provide a book name']
    },
    author:{
        type:String,
        required:[true,'Please provide a author name']
    },
    publishYear:{
        type:Number,
        required:[true,'Please provide a publish year']
    }
},
{
    timestamps:true
}
)
const Book = mongoose.model('book',booksModel)

module.exports = Book