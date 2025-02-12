//node code
/* 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);   
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
}) 

server.listen(8000, () => {
    console.log('now listening on 8k')
})
*/

const express = require('express');
const app = express();
const path = require('path');

app.get("/", (req, res) => {
    res.send(
        `<h1>Welcome!</h1>
    <p>This is the homepage.</p>
    <a href="/about">about</a>`
    )
});

app.get("/about", (req, res) => {
    res.send(
        `<h1>About</h1>
    <p>I hail from the land down under.</p>
    <a href="/contact-me">contact</a>`
    )
});

app.get("/contact-me", (req, res) => {
    res.send(
        `<h1>Contact Me</h1>
    <p>Let's talk about sandwiches</p>
    <a href="/404">into the unknown</a>`
    )
});

app.get("*", (req, res) => {
    res.send(
        `<h1>404 Error</h1>
    <p>Page not found.</p>
    <a href="/">back to home</a>`
    )
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My second Express app - listening on port ${PORT}!`);
});