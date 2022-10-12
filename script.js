
const inputBox = document.getElementsByClassName("textbox")[0];
const placeholder = document.getElementsByClassName("placeholder")[0];
const inputButton = document.getElementsByClassName("addbutton")[0];
const info = document.getElementsByClassName("info")[0];
const list = document.getElementsByClassName("todolist")[0];

const add = () => {
    if (inputBox.value != '') {
        let newTodo = document.createElement("p");
        newTodo.innerText = inputBox.value;
        list.appendChild(newTodo);
        newTodo.addEventListener("contextmenu", newTodo.remove);
        newTodo.addEventListener("click",
        function() {
            newTodo.style.color = "grey";
            newTodo.style.textDecoration = "line-through";
        }
        );
        inputBox.value = '';
        checkListLength();       
    } else {
        alert("Please input some text.");
    }
}

const addByEnter = (event) => {
    if (event.key === 'Enter') {
        add();
        inputBox.value = '';
    }
}

const checkListLength = () => {
    if (list.childElementCount == 0) {
        placeholder.style.display = "flex";
        list.style.display = "none";
        info.style.display = "none";

    } else {
        placeholder.style.display = "none";
        list.style.display = "flex";
        info.style.display = "block";
    }
    setTimeout(checkListLength, 1);
}

for (let i = 0; i < list.childElementCount; i++) {
    list.children[i].addEventListener("contextmenu", list.children[i].remove);
    list.children[i].addEventListener("click",
    function() {
        list.children[i].style.color = "grey";
        list.children[i].style.textDecoration = "line-through";
    }
    );
}

inputButton.addEventListener("click", add);
inputBox.addEventListener("keypress", addByEnter);
checkListLength();