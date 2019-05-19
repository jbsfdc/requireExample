//const rewire = require('rewire');

const someFunction = require('./index').__get__('someFunction');

describe('someFunction', () => {
	it('should work', () => {
		expect(someFunction()).toEqual('anything');
	});
});
