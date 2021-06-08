const mongoose = require('mongoose');
//const mongoDB = `mongodb+srv://user:user123@cluster0.hjl3v.mongodb.net/user?retryWrites=true&w=majority`;

var mongoDB = 'mongodb://127.0.0.1/nearby';
const connectionParams ={
    useNewUrlParser: true,
    useUnifiedTopology : true
}

mongoose.connect(mongoDB,connectionParams)
    .then( () => {
        console.log("Database connection successful")
    })
    .catch( (err) => {
        console.error('Error connecting database'+err)
    })