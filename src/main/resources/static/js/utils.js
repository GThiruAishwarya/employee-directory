// static/js/utils.js
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
