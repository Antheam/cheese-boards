const db = require('../db/db')
const {User} = require('../models')

describe("User tests", () => {
    beforeAll(async () => {
        await db.sync({
            force: true
        })
    })
    test("checks if user has name and email", async () => {
        const testUser = await User.build({name: "J", email: "j@gmail.com" })
        expect(testUser.name).toEqual("J")
        expect(testUser.email).toEqual("j@gmail.com")
    })
})
