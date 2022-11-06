const {User, Cheese, Board} = require('../models')
const db = require('./db')


async function seed (){
    await db.sync({
        force: true
    })

    await User.bulkCreate([
        {name: "Rosie", email: "rosie@gmail.com"},
        {name: "Louis", email: "louis@gmail.com" },
        {name: "April", email: "april@gmail.com"}, 
        {name: 'Adam', email: "adam@gmail.com"}
        ])
    
    await Cheese.bulkCreate([
        {title: "Emmental", description: "yellow block with nutty flavour"},
        {title: "Brie", description: "soft french cheese "},
        {title: "Parmesan", description: "usually added to pasta as a topping"}
    ])
    
    await Board.bulkCreate([
        {type: "wine", description:"To be enjoyed in the evenings with a glass of wine", UserId: 2, rating: 3},
        {type: "picnic", description: "A selection of cheeses that you use in a sandwich", UserId: 3, rating: 5},
        {type: "PR event", description: "Popular cheeses", UserId: 1, rating:4}
    ])
    
}




seed()




