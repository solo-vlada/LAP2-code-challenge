const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


// const postRoutes = require('./posts');
// server.use('/posts', postRoutes);

//Rout route
server.get('/', (req,res) => res.send('We are live!'))

module.exports = server;
