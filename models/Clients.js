const { Schema, model } = require('mongoose');

const AdressSchema = new Schema ({
    streetNumber : Number,
    street: String,
    zipcode: Number,
    city: String,
    country: String,
});

const ClientSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    adress: AdressSchema,
});

const ClientModel = model('clients', ClientSchema);

module.exports = ClientModel;