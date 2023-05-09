const express = require('express')
const router = express.Router()
const {TaskModel} = require('../models/task')

router.get("/get", async (req, res) => {

    console.log("hola")

    const result = await TaskModel.find({})
 
    res.send(result).status(200)

})

router.post("/new-task", async (req, res) => {

    console.log("tarea añadida")

    const task = new TaskModel(req.body)
    const newTask = await task.save()

    res.send(newTask).status(200)
})



router.delete(`/delete/:id_task`, async (req, res) => {

    console.log("tarea eliminada")
    console.log(req.params.id_task);

    const task = await TaskModel.findOneAndDelete({id_task: `${req.params.id_task}`})
    
    res.send(task).status(200)

})


router.put(`/update/:id_task`, async (req, res) => {
    console.log(req.params)
    console.log("tarea actualizada")

    const updatedTask = await TaskModel.findOneAndUpdate({id_task: `${req.params.id_task}`}, {done: `${!req.params.done}`})
    
    res.send(updatedTask).status(200)
})

module.exports = router;