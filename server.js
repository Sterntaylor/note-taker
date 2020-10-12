const express = require('express');

//route files
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

//create main server(app)
const app = express();

//setting port
const PORT = process.env.PORT || 3001;

//Parse functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
    //Used in zookeeper

//Listener goes at bottom
app.listen(PORT, ()=> {
    console.log('API server is ready! Port is on 3001')
})