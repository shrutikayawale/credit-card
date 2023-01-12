const { accountSchemaValidator } = require("../schema/accountSchemaValidator");
const { isValidLuhn } = require('../helpers/creditNumberValidator');
const Model = require('../model/model');
const { fetchAccountsAndUpdateCache } = require("../helpers/queries");

const addAccount = async (request, response) => {
    console.log(`Add account api - request is - ${request.body}`);
    try {
        await accountSchemaValidator(request.body);
        const { cardNumber, name, limit } = request.body;

        const isValidNumber = await isValidLuhn(cardNumber);
        if (isValidNumber) {
            //if credit number is valid - add the data to database
            const modelData = new Model({
                name: name,
                cardNumber: cardNumber,
                limit: limit
            });

            const dataToSave = await modelData.save();

            await fetchAccountsAndUpdateCache(); //update cache

            response.status(201).send({
                status: 201,
                message: `Account created successfully`,
                data: dataToSave
            });           

        } else {
            response.status(400).send({
                status: 400,
                message: `Credit card number - ${cardNumber} is not valid.`,
            });
        }        
    } catch (error) {
        if (error.status === 422) {
            response.status(422).send({
                status: 422,
                message: `Request is not correct. Name, card number and limit are required Or Card number should not be greater than 19 or limit should not be 0`
            });
        } else if (error.code === 11000) {
            response.status(409).send({
                status: 409,
                message: `Card number already exists.`
            });
        } else {
            response.status(400).send({
                status: 400,
                message: error
            });
        }       
        
    } 
};

module.exports = { addAccount };