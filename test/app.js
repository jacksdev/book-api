const { expect } = require('chai')

const app = require('../app/app')

describe('Test: app init', () => {
	it('app init success', () => {
		expect(typeof app).to.equal('function')
	})
})