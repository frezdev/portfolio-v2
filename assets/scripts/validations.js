function isEmptyString (text) {
  const reg = /\S+/;
  return !reg.test(text);
}

function isValidEmail (email) {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
}

/* VALIDACION DE DATOS DEL FORMULARIO */
const nameInput = $.querySelector('#name');
const emailInput = $.querySelector('#email');
const subjectInput = $.querySelector('#subject');
const messageInput = $.querySelector('#message');
const formContact = $.querySelector('#form');
const btnSubmit = $.querySelector('#btnSubmit');

function validationInput (text) {

  if (isEmptyString(text)) return 'El campo no puede estar vacío';

  if (text.length < 3) return 'El campo debe contener al menos 3 caracteres';

  if (text.length > 50) return 'El nombre no puede contener más de 50 caracteres';
  return null;
}

function validationInputEmail (text) {
  if (isEmptyString(text)) return 'El campo no puede estar vacío';

  if (isValidEmail(text)) return 'El email no es válido';

  return null;
}

function validationInputMessage (text) {
  if (isEmptyString(text)) return 'El campo no puede estar vacío';
  if (text.length > 300) return 'El nombre no puede contener más de 300 caracteres';
  return null;
}

function validateInputName () {
  const error = validationInput(nameInput.value);
  if (error) {
    nameInput.classList.add('input-error');
    nameInput.nextElementSibling.textContent = error;
    return false;
  } else {
    nameInput.classList.remove('input-error');
    nameInput.nextElementSibling.textContent = '';
    return true
  }
}

function validateInputEmail () {
  const error = validationInputEmail(emailInput.value);
  if (error) {
    emailInput.classList.add('input-error');
    emailInput.nextElementSibling.textContent = error;
    return false;
  } else {
    emailInput.classList.remove('input-error');
    emailInput.nextElementSibling.textContent = '';
    return true
  }
}

function validateInputSubject () {
  const error = validationInput(subjectInput.value);
  if (error) {
    subjectInput.classList.add('input-error');
    subjectInput.nextElementSibling.textContent = error;
    return false;
  } else {
    subjectInput.classList.remove('input-error');
    subjectInput.nextElementSibling.textContent = '';
    return true
  }
}

function validateInputMessage () {
  const error = validationInputMessage(messageInput.value);
  if (error) {
    messageInput.classList.add('input-error');
    messageInput.nextElementSibling.textContent = error;
    return false;
  } else {
    messageInput.classList.remove('input-error');
    messageInput.nextElementSibling.textContent = '';
    return true
  }
}


nameInput.onchange = () => {
  validateInputName();
}
emailInput.onchange = () => {
  validateInputEmail();
}
subjectInput.onchange = () => {
  validateInputSubject();
}
messageInput.onchange = () => {
  if (
    validateInputName() &&
    validateInputEmail() &&
    validateInputSubject() &&
    validateInputMessage()
  ) {
    btnSubmit.disabled = false;
  }
}

formContact.onsubmit = (e) => {
  e.preventDefault();
  validateInputName();
  validateInputEmail();
  validateInputSubject();
  validateInputMessage();

  btnSubmit.disabled = true;


}