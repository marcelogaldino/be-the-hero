const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {
        const id = generateUniqueId()
        console.log(id)
        expect(id).toHaveLength(8)
    })
})