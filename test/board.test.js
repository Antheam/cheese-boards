const { INTEGER } = require('sequelize')
const db = require('../db/db')
const {Board, User, Cheese} = require('../models')

describe("Board tests", () => {
    beforeAll(async () => {
        await db.sync({
            force: true
        })
    })
    test("checks if board has type, description and rating", async () => {
        const testBoard = await Board.build({type: "Wine", description: "To enjoy in the evenings with wine.", rating: 4 })
        expect(testBoard.type).toEqual("Wine")
        expect(testBoard.description).toEqual("To enjoy in the evenings with wine.")
        expect(testBoard.rating).toEqual(4)
    })

    test("checks typeof title, description and rating", async () => {
        const testBoard = await Board.build({type: "Wine", description: "To enjoy in the evenings with wine.", rating: 4 })
        expect(typeof(testBoard.type)).toEqual("string")
        expect(typeof(testBoard.description)).toEqual("string")
        expect(typeof(testBoard.rating)).toEqual("number")

    })

    test("checks to see if you user exists for board model", async () => {
        await Board.bulkCreate([
            {type: "wine", description:"To be enjoyed in the evenings with a glass of wine",  rating: 3},
            {type: "picnic", description: "A selection of cheeses that you use in a sandwich",  rating: 5},
            {type: "PR event", description: "Popular cheeses", rating:4}
        ])
        const board = Board.findByPk(1, {include: User})
        test.istruthy 
    
    }   )

    test("Test to check  if we can add cheese to board", async () =>{
        await Cheese.bulkCreate([
            {title: "Emmental", description: "yellow block with nutty flavour"}
            // {title: "Brie", description: "soft french cheese "},
            // {title: "Parmesan", description: "usually added to pasta as a topping"}
        ])
        const board = Board.findByPk(1, {include: Cheese})
        test.istruthy
    })
})
