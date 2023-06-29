import sequelize from "../sequelize_db";
import  Sequelize  from "sequelize";


const User = sequelize.define('users',  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    username: {
        type: Sequelize.STRING(1234),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(1234),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    balance: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue:0
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
}  
);
 

export default User;