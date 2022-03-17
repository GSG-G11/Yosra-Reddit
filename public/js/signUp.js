const submit = document.querySelector("#submit");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  if (
    data.username.trim() !== "" &&
    data.email.trim() !== "" &&
    data.password.length >= 3
  ) {
    fetch("/signUp", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data && data.message === "success sign up") {
          window.location.href = "/home";
        }
      })
      .catch(console.log);
  }
});
