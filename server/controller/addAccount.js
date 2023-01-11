const { accountSchemaValidator } = require("../schema/accountSchemaValidator");
const { isValidLuhn } = require('../helpers/creditNumberValidator');
const Model = require('../model/model');

const addAccount = async (request, response) => {
    console.log('1', request.body);
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

            response.send({
                status: 201,
                message: `Account created successfully`,
                dataToSave: dataToSave
            });
        } else {
            response.send({
                status: 400,
                message: `Credit card number - ${cardNumber} is not valid.`,
            });
        }        
    } catch (error) {
        if (error.status === 422) {
            response.send({
                status: 422,
                error: `Request is not correct. Name, card number and limit are required Or Card number should not be greater than 19 or limit should not be 0`
            });
        }
        response.send({
            status: 400,
            error: error
        });
        
    } 
};

module.exports = { addAccount };