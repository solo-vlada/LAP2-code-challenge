
DESCRIPTION  

* This app allows users to create a post with a title,
their name, timestamp, and a body.
* When user clicks on 'Publish' the post is being stored in a database
* The app allows user to access the post through a show path
* The user is able to edit and delte the post


Installation & Usage

Installation 
* Run npm init -y 
* Run install express
* Run npm install nodemon 
* Run npm i cors 
* Run npm i pg 

Usage
* To start the server, in the serever folder run nodemon index.js


Changelog 

In the client folder 
 * Created front-end with html, css, js. 
 * Created requests to the server

 In the server folder
 * Implemented file structure for the api(MVC) & database
 * Created & started a server 
 
 
In the index.js 
* Import server
* Create a port variable 
* Start listening to the server

In the server.js
* Import express & cors
* Use express & cors
* Send a get request to start a server
* Export server

In the db folder
* Created posts database

In the dbConfig folder
* Imported postgress into init.js
* Seeded the database in seedDev.js


