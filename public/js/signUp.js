const submit = document.querySelector('#submit');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// ............
const fetchData = (url, httpMethod, data) => fetch(url, {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
// ...........

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        username: username.value,
      email: email.value,
      password: password.value,
    };

    if (data.username.trim() !== '' && data.email.trim() !== '' && data.password.length >= 3) {

        fetchData('/signUp','POST', data)
          .then((data) => {
            if (data && data.message === 'done') {
              window.location.href = '/';
            } else if (data.message === 'The email you\'re using is already taken') {
              swal('Error', data.message, 'error');
            }
          }).catch(console.log);
      } else {
        swal('Error', 'Password Should Be at least 3 Character long and Your name Should contain letters', 'error');
      }
    });