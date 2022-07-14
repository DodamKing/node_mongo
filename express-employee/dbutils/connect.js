const mongoose = require('mongoose')
// const uri = 'mongodb+srv://admin:admin@cluster0.83nv4.mongodb.net/?retryWrites=true&w=majority'
const uri = process.env.DB_URI
const options = {
    useNewUrlParser : true,
    // useFindAndModify : false,
    useUnifiedTopology : true,
}

const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, options)
        console.log('Connetcion success')
    } catch(err) {
        console.log('err : ' + err);
    }
}

module.exports = connectToMongo