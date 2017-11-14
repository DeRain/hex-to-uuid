const expect = require('chai').expect;
const index = require('../index');

describe('uuid-to-hex package', function () {
    it('Should provide the correct HEX string without leading zero by default', function () {
        const expectedUuidString = 'e13b23e9-1dcb-41c8-ab0b-e65b84161d20';
        const hexString = 'e13b23e91dcb41c8ab0be65b84161d20';

        const result = index(hexString);
        expect(result).to.equal(expectedUuidString);
    });

    it('Should provide the correct HIX sting with leading zero if corresponding bool parameter is TRUE', function () {
        const expectedUuidString = 'd3fd3540-6718-4687-956b-c8618a26e335';
        const hexString = '0xd3fd354067184687956bc8618a26e335';

        const result = index(hexString);
        expect(result).to.equal(expectedUuidString);
    });

    it('Throw exception if hexString is not correct HEX number', function () {
        expect(
            index
        ).to.throw();
    });
});