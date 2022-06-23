const form = document.querySelector("#form");
const title = document.querySelector("#title");
const pseudonym = document.querySelector("#pseudonym");
const msg = document.querySelector("#msg");
const post = document.querySelector('#input');
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
    data = {
        post: post.value,
        pseudonym: pseudonym.value,
        title: title.value,
    } 
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    createPosts();

};

let createPosts = () => {
    posts.innerHTML += `
    <div>
        <h1>${data.title}</h1>
        <p>${data.pseudonym}</p>
        <p>${data.post}</p>
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
