const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('myfirstdb', 'root', "meusql", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(_=>console.log('connected!'))
    .catch(_=>console.log('error'))

module.exports = sequelize
// //password protection
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// //password input
// rl.question('Password? ', (value) => {

//     //sequelize
//     const sequelize = new Sequelize('myfirstdb', 'root', value, {
//         host: 'localhost',
//         dialect: 'mysql'
//     } )
//     sequelize.authenticate().then(_=>console.log('connected!')).catch(_=>console.log('error'))
//     rl.close()
// });


