const express = require('express')

const responseHandlers = require('./utils/handleResponses')

const app = express()

const db = require('./utils/database')

const initModels = require('./models/initModels')

const userRouter = require('./users/users.router')

app.use(express.json())

db.authenticate()
   .then(() => {
    console.log('Database credentials are correct')
   })
   .catch((err))

db.sync()
   .then(() => {
    console.log('The virus database has been updated')
   })
   .catch(err => {
    console.log(err)
   })

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})

//? Esta debe ser la ultima ruta en mi app
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.use('/api/v1', userRouter)

app.listen(9000,() => {
    console.log('Server started at port 9000')
})
