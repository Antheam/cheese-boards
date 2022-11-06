const User = require('./user.model')
const Cheese = require('./cheese.model')
const Board = require('./board.model')


//one to many relationship
User.hasMany(Board)
Board.belongsTo(User)

//many to many relationship
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})






module.exports = {User, Cheese, Board}