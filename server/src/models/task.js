const mongoose = require("mongoose");
const uuid = require("uuid")

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    },
    id_task: {
        type: String,
        default: uuid.v4
    }
})

const TaskModel = mongoose.model("Task", taskSchema);
exports.TaskModel = TaskModel;