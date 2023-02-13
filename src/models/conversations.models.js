const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
    },
    profile_image: {
       type: DataTypes.CHAR,
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
    is_group: {
       type: DataTypes.BOOLEAN,
       allowNull: false
    }
})

module.exports = Conversations