const addProduct = () => {
  const toDo = document.createElement("div");
  const containerCheckToDo = document.createElement("span");
  const checkToDo = document.createElement("input");
  checkToDo.setAttribute("type", "checkbox");
  containerCheckToDo.appendChild(checkToDo);
  const containerNameToDo = document.createElement("span");
  const NameToDo = document.createElement("p");
  const value = document.querySelector("input").value;
  NameToDo.innerText = `${value}`;
  containerNameToDo.appendChild(NameToDo);
  toDo.appendChild(containerCheckToDo);
  toDo.appendChild(containerNameToDo);
  const myUL = document.querySelector("ul");
  myUL.appendChild(toDo);
};
