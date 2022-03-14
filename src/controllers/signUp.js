const { sign } = require('jsonwebtoken');
const { signupValidation } = require("../utils");
const { hashPassword } = require("../utils");
const signUpQuirey = require("../database/queries");

const signUp = (req, res) => {
  signupValidation
    .validateAsync(req.body)
    .then((data) => 
      hashPassword(data.password, (error, password) => {
          if(error){
              console.log(error);
          } else {
            const { username, email} = data;
            signUpQuirey({ username, email, password })
            .then(()=> {
                sign({ email }, process.env.SECRET, { expiresIn: '30d' }, (err, token) => {
                    if (err) {
                      console.log(err);
                    } else {
                      res.cookie('access_token', token, {
                        maxAge: 2592000000,
                        httpOnly: true,
                      }).json({ message: 'done' });
                    }
                  }
        )})
              .catch(console.log);
          }
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

module.exports = signUp;

