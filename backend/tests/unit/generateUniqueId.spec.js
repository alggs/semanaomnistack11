const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerenete Unique Id', () => {
    it('should generate unit id with sucess', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});