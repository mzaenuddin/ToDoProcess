const { todo } = require('.../models')

class todoController{
    //get todo

    static getToDo(req, res){
        const id = req.param.id
        todo.findByPk()
    }

    //addTodo

    //put toDo By Id

    //Delete todo By Id 
}

module.exports = todoController