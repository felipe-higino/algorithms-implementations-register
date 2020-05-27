const Sequelize = require('sequelize')
const sequelize = new Sequelize.Sequelize('myfirstdb', 'root', "meusql", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(_=>console.log('connected!'))
    .catch(_=>console.log('error'))

//models
//game = {title, publisher, genre} 
// Sequelize auto-generates id, createdAt and updatedAt
const listofgames = sequelize.define('gamestable',{
    title: {
        type: Sequelize.STRING
    },
    publisher:{
        type: Sequelize.STRING
    },
    genre:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.TEXT
    }
})
listofgames.sync({force:true})


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


