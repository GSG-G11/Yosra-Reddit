const userError = (status, message) => {
const serverError = new Error(message);
serverError.status = status;
return serverError;
};
module.exports = userError;