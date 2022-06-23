//get a post by title & date
async function getPost(title, date) {
    try {
        const response = await fetch(`http://localhost:3000/${title}/${date}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

// add a new post 
async function submitNewPost (e) {
    e.preventDefault();

    const postData = {
        post: e.target.post.value,
        pseudonym: e.target.pseudonym.value,
        title: e.target.title.value,
    }

    try{
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(postData)

        }

        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json;
        return data;
    } catch (err) {
        console.log(err);
    }
}


//delete post 
// async function deletePost (title, date) {
//     try {
//         const options = {method: 'DELETE'}
//         await fetch(`http://localhost:3000/${title}/${date}`, options);
//         window.location.hash = `#posts`;
//     } catch (err) {
//         console.warn(err);
//     }
// }

module.exports = {
    getPost, submitNewPost
}
