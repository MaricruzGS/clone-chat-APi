
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findAllUsers = async () => {
    const data = await Users.findAll({
        attributes:['id'],
        include: {
            model: Participants,
            attributes: ['id']
        }
    })
    return data
}

const findUserById = async (id) => {
    const data = await Participants.findOne({
        where: {
            id:id
        }
    })
    return data
}

const createNewUser = async (userObj) => {
    const newUser = {
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        email: userObj.email,
        profile_image: userObj.profile_image,
        is_active: userObj.is_active,
        phone: userObj.phone
    }
    const data =  await Users.create(newMessages)
    return data
}

const updateUser = async (id, userObj) => {
    const data = await Users.update(userObj, {
        where: {
            id:id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy ({
        where: {
            id:id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser,
    updateUser,
    deleteUser,
}