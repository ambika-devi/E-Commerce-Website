const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce-project1', 'root', 'ambika284devi',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;