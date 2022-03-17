const submit = document.querySelector('#submit');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
      email: email.value,
      password: password.value,
    };
    fetch('/signin',{
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      .then((result) => result.json())
      .then((data) => {
        if (data && data.message === "success sign IN") {
          window.location.href = "/home";
        }
      })
});