require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const logger = require('./middlewares/logger')
const connectToMongo = require('./dbutils/connect')

const empRouter = require('./routes/employeeRouter')
const artRouter = require('./routes/articleRouter')

connectToMongo()

const app = express()
const port = 8080

app.use(morgan('common'))
app.use(express.json())
app.use(logger)

app.use('/api/v1/employees', empRouter)
app.use('/api/v1/articles', artRouter)

app.use((req, res, next) => {
    // res.send('no no')
    res.sendStatus(404).send('do not find url')
    res.sendStatus(500).send({ error : 'someting blew up' })
})

app.listen(port, () => {
    console.log(`sever ready on port ${port}`);
})