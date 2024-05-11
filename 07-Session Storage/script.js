/*Lo scope di questo task è di salvare tutti i dati di un form nel local storage.
  - Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome
  - Fai in modo che questi dati si salvino nel session storage*/

const button = document.querySelector(".btn");

function setUserName(varName) {
  const titleName = document.querySelector(".title-name");
  titleName.innerText = varName;
  sessionStorage.setItem("user-name", varName);
}

function saveUserSetName() {
  const userMail = document.querySelector(".email").value;
  const userName = document.querySelector(".firstname").value;
  const userSurname = document.querySelector(".lastname").value;
  const userData = JSON.stringify({
    email: userMail,
    name: userName,
    surname: userSurname,
  });
  sessionStorage.setItem("user-data", userData);
  setUserName(userName);
}

button.addEventListener("click", saveUserSetName);

const savedUserName = sessionStorage.getItem("user-name");
if (savedUserName) {
  setUserName(savedUserName);
}
