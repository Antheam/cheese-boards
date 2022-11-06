const db = require('../db/db')
const {Cheese} = require('../models')

describe("Cheese tests", () => {
    beforeAll(async () => {
        await db.sync({
            force: true
        })
    })
    test("checks if cheese has title and description", async () => {
        const testCheese = await Cheese.build({title: "Emmental", description: "nutty flavour cheese with holes" })
        expect(testCheese.title).toEqual("Emmental")
        expect(testCheese.description).toEqual("nutty flavour cheese with holes")
    })
})

