const mongoose = require('mongoose')
const uri = process.env.DB_URI
const option = {
    useNewUrlParser : true,
}

const connect = async () => {
    try {
        await mongoose.connect(uri, option)
        console.log('connection success');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect