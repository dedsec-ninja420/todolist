const li = document.querySelectorAll("li");
const textInput = document.getElementById("todo");
const button = document.getElementById("submit");
const ul = document.querySelector("ul");

const delOnClick = (element) => {
    element.addEventListener("click", element.remove);
}

const add = () => {
    if (textInput.value != '') {
        let newLi = document.createElement("li");
        newLi.innerText = textInput.value;
        ul.appendChild(newLi);
        delOnClick(newLi);
        textInput.value = '';       
    } else {
        alert("Please input some text.");
    }
}

const addByEnter = (e) => {
    if (e.key === 'Enter') {
        add();
        textInput.value = '';
    }
}

for (let i = 0; i < li.length; i++) {
    delOnClick(li[i]);
}

button.addEventListener("click", add);
textInput.addEventListener("keypress", addByEnter);
