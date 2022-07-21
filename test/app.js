const { expect } = require('chai')
const app = require('../app/app')

describe('Test: app init', () => {
	it('App init success', () => {
		expect(typeof app).to.equal('function')
	})
})