const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
    },
    first_name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    last_name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    email: {
       type: DataTypes.STRING,
       allowNull: false
    },
    password: {
       type: DataTypes.STRING,
       allowNull: false
    },
    profile_image: {
      type: DataTypes.CHAR,
       allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

module.exports = Users