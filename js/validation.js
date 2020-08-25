const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const addressValue = address.value.trim();
  const messageValue = message.value.trim();

  if(nameValue === ''){
    setErrorFor(name, "Name cannot be empty");
  } else {
    setSuccessFor(name);
  }

  if(numberValue === ''){
    setErrorFor(number, "Mobile number cannot be empty");
  } else if(numberValue.length < 10){
    setErrorFor(number,"Please enter 10 digit number");
  } else {
    setSuccessFor(number);
  }

  if(emailValue === ''){
    setErrorFor(email, "Email cannot be empty");
  } else if(!isEmail(emailValue)){
    setErrorFor(email,"Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if(addressValue === ''){
    setErrorFor(address, "Address cannot be empty");
  } else {
    setSuccessFor(address);
  }

  if(messageValue === ''){
    setErrorFor(message, "Message cannot be empty");
  } else {
    setSuccessFor(message);
  }

}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}