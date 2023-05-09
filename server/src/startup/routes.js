const express = require('express');
const cors = require('cors');
const tasks = require('../routes/tasks')

const app = express()


module.exports = function (app) {

    app.use(cors())
    app.use(express.json())


    app.use('/tasks', tasks)

    

//PING

    app.get('/ping', (req, res) => {
        res.send('¡PONG!')
    })

}