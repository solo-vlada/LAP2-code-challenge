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
async function postNewPost (e) {
    e.preventDefault();
    try{
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/posts', options);
        const {id, err} = await response.json;
        if(err) { 
            throw Error(err)
        } else {
            window.location.hash = `${title}/${date}`
        }
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
