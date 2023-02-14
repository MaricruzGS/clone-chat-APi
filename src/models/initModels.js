const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Users = require('./users.models')

const initModels = () => {
    
    Participants.hasMany(Users)
    Users.belongsTo(Participants)
    Participants.hasMany(Conversations)
    Conversations.belongsTo(Participants)
    Messages.hasMany(Participants)
    Participants.belongsTo(Messages)
}

module.exports = initModels