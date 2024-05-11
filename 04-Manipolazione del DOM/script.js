function setFormNewAttribute() {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const age = document.querySelector("#age").value;
  const person = { name: firstName, surname: lastName, age: age };
  const jsonPerson = JSON.stringify(person);
  const formCollection = document.getElementsByTagName("form");
  const myForm = formCollection[0];
  myForm.setAttribute("data-person", "jsonPerson");
}
setFormNewAttribute();
