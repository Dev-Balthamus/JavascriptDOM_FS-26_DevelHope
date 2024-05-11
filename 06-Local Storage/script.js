/*Lo scope di questo task è di salvare tutti i dati di un form nel local storage.
  - Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome
  - Fai in modo che questi dati si salvino nel local storage
  - Controlla che al reload il nome nel titolo non scompaia*/

const button = document.querySelector(".btn");

function setUserName(varName) {
  const titleName = document.querySelector(".title-name");
  titleName.innerText = varName;
  localStorage.setItem("user-name", varName);
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
  localStorage.setItem("user-data", userData);
  setUserName(userName);
}

button.addEventListener("click", saveUserSetName);

const savedUserName = localStorage.getItem("user-name");
if (savedUserName) {
  setUserName(savedUserName);
}
