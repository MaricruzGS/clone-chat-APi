const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Participants = require('./participants.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'sent'
    },
    participant_id:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Participants,
            key: id
        }
    }
})

module.exports = Messages