const mongoose = require('mongoose')
const uri = process.env.DB_URI
const options = {
    useNewUrlParser : true,
    // useFindAndModify : false,
    useUnifiedTopology : true,
}

// module.exports.async function() => {
const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, options)
        console.log('Connetcion success')
    } catch(err) {
        console.log('err : ' + err);
    }
}

module.exports = connectToMongo