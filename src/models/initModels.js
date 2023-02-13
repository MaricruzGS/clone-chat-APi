const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Users = require('./users.models')

const initModels = () => {
    Participants.hasMany(Users)
    Participants.hasMany(Conversations)
    Users.belongsTo(Participants)
    Conversations.belongsTo(Participants)
    Messages.hasMany(Participants)
    Participants.belongsTo(Messages)
}

module.exports = initModels