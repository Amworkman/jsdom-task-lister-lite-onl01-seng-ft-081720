document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input")[1].addEventListener("click", function (event) {
    const lineItem = document.createElement('li');
    const list = document.querySelector("ul#tasks");

    const button = document.createElement("button");
    button.innerHTML = "X";
    button.onclick = () => {
      button.parentNode.remove();
    }
    
    let newTask = document.getElementById("new-task-description").value;
    lineItem.textContent = `${newTask}  `;
    lineItem.appendChild(button);
    list.appendChild(lineItem);    
    event.preventDefault();
});
});
