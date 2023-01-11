const Joi = require('joi');

const accountDataSchema = Joi.object({
  name: Joi.string().required(),
  cardNumber: Joi.string().max(19).required(),
  limit: Joi.number().greater(0).required(),
});

const accountSchemaValidator = async (data) => {
  console.log(data);
  try {
    const value = await accountDataSchema.validateAsync(data);
    return value;
  }
  catch (err) {
    throw { status: 422, err: err};    
  }
};

module.exports = { accountSchemaValidator };