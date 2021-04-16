const Sequelize = require('sequelize');

const connection = new Sequelize('guia_press', 'root', '2029', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;