const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");
const posts = document.querySelector("#posts");

form.addEventListener('submit',  (e) => {
    e.preventDefault(); 
    console.log('button clicked');

    formValidation();
})

let  formValidation = () => {
    if(input.value === ""){
        msg.textContent ='Post cannot be blank';
        console.log('failure');
    } else {
        console.log('success');
        msg.textContent = "";
        acceptData();
    }
};


let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPosts();
};

let createPosts = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>    
    `;
    input.value = "";
};


let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
