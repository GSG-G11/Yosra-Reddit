const Joi = require('joi');

const signInValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),

});
module.exports = signInValidation;