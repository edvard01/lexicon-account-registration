const btn = document.getElementById("submit-button");
const label = document.querySelectorAll("label");
const statusElement = document.getElementById("status-message");

const nameInput = document.getElementById("name");
const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const pwInput = document.getElementById("pw");
const pwRepeatInput = document.getElementById("repeatpw");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);

  let validated = validateInputs();
  if (validated) {
    statusElement.innerHTML = "Your account has been signed up!";
  }
});

label.forEach((element) => {
  element.addEventListener("click", (e) => {
    let labelId = e.target.getAttribute("id");
    let index = labelId.indexOf("-");
    let id = labelId.slice(0, index);
    console.log(id);

    document.getElementById(id).focus();
  });
});

function validateInputs() {
  let emtpyCheck = checkEmpty();
  let pwCheck = validatePw();
  let pwCompare = comparePasswords();
  let validationPassed = false;

  if (!emtpyCheck) {
    statusElement.innerHTML = "Please fill out all fields.";
  } else if (!pwCheck) {
    pwInput.style.borderColor = "red";
    statusElement.innerHTML = "Password needs to contain at least 8 characters";
  } else if (!pwCompare) {
    pwInput.style.borderColor = "red";
    pwRepeatInput.style.borderColor = "red";
    statusElement.innerHTML = "Passwords need to match";
  } else {
    validationPassed = true;
  }
  return validationPassed;
}

function checkEmpty() {
  let bool = true;
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value === "") {
      input.style.borderColor = "red";
      bool = false;
    } else {
      input.style.borderColor = "gray";
    }
  });
  return bool;
}

function validatePw() {
  const pw = document.getElementById("pw").value;
  if (pw.length >= 8) {
    return true;
  }

  return false;
}

pwInput.addEventListener("keyup", (e) => {
  const pwLabel = document.getElementById("pw-label");
  if (e.target.value.length < 8) {
    pwLabel.innerHTML = "Password - Needs to be at least 8 characters long";
    pwLabel.style.color = "red";
  } else {
    pwLabel.style.color = "black";
    pwLabel.innerHTML = "Password";
  }
  comparePasswords();
});

pwRepeatInput.addEventListener("keyup", (e) => {
  comparePasswords();
});

function comparePasswords() {
  const pwRepeatLabel = document.getElementById("repeatpw-label");
  if (pwRepeatInput.value !== "") {
    if (pwRepeatInput.value !== pwInput.value) {
      pwRepeatLabel.style.color = "red";
      pwRepeatLabel.innerHTML = "Repeat Password - Passwords do not match!";
      btn.disabled = true;
    } else {
      pwRepeatLabel.style.color = "black";
      pwRepeatLabel.innerHTML = "Repeat Password";
      btn.disabled = false;
      return true;
    }
  }

  return false;
}
