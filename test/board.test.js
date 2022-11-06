const db = require('../db/db')
const {Board} = require('../models')

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
})
