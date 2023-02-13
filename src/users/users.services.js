const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
    .then(data => {
        success({
            res,
            data,
            status: 200,
            message: 'All products collected succesfully'
        })
    })
    .catch(err => {
        error({
            res,
            data: err,
            status: 400,
            message: 'An error occurred while displaying to the user',
        })
    })
}

const getUserById = (req, res) => {
    const id =  Number(req.params.id)
    userControllers.findUserById(id)
    .then(data => {
        if(data){
            success({
                res,
                data,
                status: 200,
                message: 'Product with id' + data.id
            })
        } else {
            error({
                res,
                status: 404,
                message: 'User not found'
            })
        }
    })
    .catch(err => {
        error({
            res,
            data: err,
            status: 400,
            message: 'An error occurred while displaying to the user',
        })
    })
}

const postNewUser = (req, res) => {
    const userObj = req.body
    userControllers.createNewUser(userObj)
    .then(data => {
        success({
            res,
            data,
            status: 200,
            message: 'All products collected succesfully'
        })
    })
    .catch(err => {
        error({
            res,
            data: err,
            status: 400,
            message: 'An error occurred while displaying to the user',
        })
    })
}

const deleteUsers = (req, res) => {
    const id = req.params.id 
    duserControllers.eleteUser(id)
    .then(data => {
        if(data){
            success({
                res,
                data,
                status: 200,
                message: 'User with id' + data.id
            })
        } else {
            error({
                res,
                status: 404,
                message: 'User not found'
            })
        }
    })
    .catch(err => {
        error({
            res,
            data: err,
            status: 400,
            message: 'An error occurred while displaying to the user',
        })
    })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const userObj = req.body
    userControllers.updateUser(id, userObj)
    .then(data => {
        if(data){
            success({
                res,
                data,
                status: 200,
                message: 'User with id' + data.id
            })
        } else {
            error({
                res,
                status: 404,
                message: 'User not found'
            })
        }
    })
    .catch(err => {
        error({
            res,
            data: err,
            status: 400,
            message: 'An error occurred while displaying to the user',
        })
    })
}

const putUser = (req, res) => {
    const id = req.params.id
    const userObj = req.body

    if (!userObj.last_name || !userObj.email || !userObj.profile_image || !userObj.is_active || !userObj.phone)
    return res.status(400).json({
        message: 'Missing data'
    })

}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUsers,
    patchUser,
    putUser,
}