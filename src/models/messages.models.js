const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Participants = require('./participants.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    participant_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Participants,
            key: id
        }
    }
})

module.exports = Messages