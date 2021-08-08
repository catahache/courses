const { uniqueId } = require("underscore");
const uuid = require('uuid').v4
const faker = require('faker')

function invertarObjeto () {
    let obj = {
        id: uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        country: faker.address.country(),
        accountName: faker.address.country(),
    }
}