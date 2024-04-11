const mongoose = require("mongoose")



const db = ()=>{  
mongoose.connect(process.env.MongoURI)
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log(err.message)
})
} 

module.exports = { db };