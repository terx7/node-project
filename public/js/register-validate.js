const submit = document.getElementById("register-button");
const regex = '/^[a-zA-Z]*$/g';

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordAgain = document.getElementById("password-again").value;

  if (!username || username === '' || username.length < 6) {
    const nameError = document.getElementById("username-error");
    nameError.innerHTML = `
        <p>Username not valid!</p>
    `
  }

  if(password.length < 6 || !password) {
    const passwordError = document.getElementById("password-error");
    passwordError.innerHTML = `
        <p>Password not valid!</p>
    `
  }

  if(password !== passwordAgain) {
    const passwordAgainError = document.getElementById("password-again-error");
    passwordAgainError.innerHTML = `
        <p>Password must be the same!</p>
    `
  }
}
