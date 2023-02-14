const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
       type: DataTypes.UUID,
       primaryKey: true,
    },
    profileImage: {
       type: DataTypes.STRING,
       allowNull:true
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    created_by: {
       type:DataTypes.INTEGER,
       allowNull: false
    },
    isGroup: {
       type: DataTypes.BOOLEAN,
       allowNull: false
    }
})

module.exports = Conversations