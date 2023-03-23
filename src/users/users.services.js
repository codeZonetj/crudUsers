
const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
    .then(data => {
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({message:'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json({message:err.message})
    })
}

const postUser = (req, res) => {
    const {firstName, lastName, email, password, birthday} = req.body
    userControllers.createUser({firstName, lastName, email, password, birthday})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message:err.message, fields: {
                firstName: 'String',
                lastName: 'String',
                email: 'example@example.com',
                password: 'String',
                birthday: 'YYYY/MM/DD'
            }})
        })

}

const patchUser = (req, res) => {
    const id = req.params.id
    const {firstName, lastName, email, password,birthday} = req.body
    userControllers.updateUser(id, {firstName, lastName, email, password, birthday})
        .then((data) => {
            if(data){
                res.status(200).json({message:'User updated succesfully with id'})
            } else {
                res.status(400).json({message:err.message})
            }
        })
        .catch(err =>{
            res.status(400).json({message:err.message})
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    userControllers.deleteUser(id)
        .then(data => {
            if(data){
                res.status(204).json({message:'Delete Succesfully'})
            } else {
                res.status(400).json({message:err.message})
            }
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
}
module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}


