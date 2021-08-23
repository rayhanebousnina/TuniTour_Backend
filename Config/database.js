const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://rayhane:rayhane1995@cluster0.kpjba.mongodb.net/TuniTour_db?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('database connected')})
    .catch(()=>{console.log('error when connecting to database')})

} 
module.exports = db_connection