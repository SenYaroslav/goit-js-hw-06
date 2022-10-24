const formRef = document.querySelector(".login-form");
const resultObj = {};

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Увага! Всі поля повинні бути заповнені");
  }
  resultObj.email = email.value;
  resultObj.password = password.value;

  console.log(resultObj);

  event.currentTarget.reset();
}
