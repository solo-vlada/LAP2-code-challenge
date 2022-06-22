let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();

});



function formValidation () {
    if(textInput.value === "") {
        console.log('failure');
        msg.textContent = "Task cannot be blank";
    } else {
        console.log('success');
        msg.textContent = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
        add.setAttribute("data-bs-dismiss", "");
        })();
   }
}

let data = [];

function acceptData () {
    data.push({
            text: textInput.value,
            date: dateInput.value,
            description: textarea.value,
        });
    
        localStorage.setItem("data", JSON.stringify(data));

        console.log(data);
}
