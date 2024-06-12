import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';
let formData = getSavedData() || { email: '', message: '' };

refs.input.value = formData.email;
refs.message.value = formData.message;

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

function handleInput() {
  formData = {
    email: refs.input.value,
    message: refs.message.value,
  };
  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(formData));
}

function handleSubmit(e) {
  e.preventDefault();

  if (refs.input.value.trim() === '' || refs.message.value.trim() === '') {
    alert('Не усі поля заповнено!');
    return;
  }

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  formData = { email: '', message: '' };
}

function getSavedData() {
  try {
    const lsData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));
    return lsData;
  } catch (error) {
    console.error('Error parsing saved form data', error);
    return null;
  }
}
