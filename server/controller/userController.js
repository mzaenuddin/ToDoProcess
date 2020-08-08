const {user} = require('../models')

class UserController{
    static getAllUsers(req, res){
        user.findAll()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err)            
        });
    }
}

module.exports = UserController