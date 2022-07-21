const { expect } = require('chai')
const { Client } = require('pg')

const client = require('../app/db')

describe('Testing client', () => {
	it('Expoerted client is instance of pg client', () => {
		expect(client instanceof Client).to.true
	})
})