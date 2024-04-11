const express = require('express')
const Book = require('../models/booksModel.js')

const router = express.Router()

router.post('/',async (req , res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message:"Missing data"})
        }
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        })
        return res.status(201).send(newBook)
    }
    catch (error) {
        res.status(500).send({ message : error.message})
    }
})


router.get('/',async (req,res)=>{
    try{
        const books =await Book.find()
        return res.status(201).json({
            count:books.length,
            data:books
        })
    }
    catch (error) {
        res.status(500).send({ message : error.message})
    }
})


router.get('/:id',async (req,res)=>{
    try{
        const { id } = req.params
        let book = await Book.findById(id)
        if(!book){
            return res.status(500).send({message:"No book found"})
        }
        return res.status(201).send(book)
    }
    catch (error) {
        res.status(500).send({ message : error.message})
    }
})


router.put('/:id',async (req , res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({message:"Send all fiels"})
        }

        const { id } = req.params

        const book = await Book.findByIdAndUpdate(id,req.body)

        if(!book){
            return res.status(500).send({message:"No book found"})
        }
        return res.status(201).send({message:"Updated successfully"})
    }
    catch (error) {
        res.status(500).send({ message : error.message})
    }
})


router.delete('/:id',async (req , res)=>{
    try{

        const { id } = req.params

        const book = await Book.findByIdAndDelete(id)

        if(!book){
            return res.status(500).send({message:"No book found"})
        }
        return res.status(201).send({message:"book deleted"})
    }
    catch (error) {
        res.status(500).send({ message : error.message})
    }
})



module.exports =  router