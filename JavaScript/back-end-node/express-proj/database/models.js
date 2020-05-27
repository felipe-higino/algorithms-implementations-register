const Sequelize = require('sequelize')
const sequelize = require('./dbconection')
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
    // description:{
    //     type: Sequelize.TEXT
    // },
    genre:{
        type: Sequelize.STRING
    }
})

// //creates the table with this model
// listofgames.sync({force:true})

//Crud create API
const CRUD_create = (
    title    = "Action/Adventure",
    publisher= "Ubisoft",
    genre    = "Action/Adventure") =>
{
    listofgames.create({
        title: title,
        publisher: publisher,
        genre: genre
    })
}
//cRud read

//crUd update API
const CRUD_update = ()=>
{
    // listofgames.update()
}

//cruD delete

module.exports = {CRUD_create, CRUD_update}
