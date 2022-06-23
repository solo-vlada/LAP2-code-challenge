const db = require('../dbConfig/init');

class Post {
    constructor (data){
        this.id = data.id,
        this.title = data.title,
        this.name = data.name,
        this.post = data.post
    }
    static get all() {
        return new Promise(async(resolve, reject)=> {
            try{ 
                const postData = await db.quesry(`SELECT * FROM dogs;`)
                const posts = postData.rows.map(d => new Post(d));
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts.")
            }
        })  
    }

}

module.exports = Post;
