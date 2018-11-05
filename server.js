//Install express server
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/new-blog'));

app.get('/*', function (req, res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname +'/dist/new-blog/index.html'));
});
const server = http.createServer(app);
// Start the app by listening on the default Heroku port
server.listen(port , ()=>{
    console.log('runniing ??')
});