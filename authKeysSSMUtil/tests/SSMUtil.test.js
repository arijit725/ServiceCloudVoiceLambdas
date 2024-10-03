const handler = require('../index');
#check
jest.mock('aws-sdk');
jest.mock('selfsigned');
jest.mock('aws-param-store');

describe('SSMUtil Tests', () => {
    it('Sample SSMUtil tests', () => {
        expect(handler.hasOwnProperty('handler')).toEqual(true);
    });
});
