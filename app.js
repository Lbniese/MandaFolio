// define path
const path = require('path');
// import dotenv for config
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '.env') });
// import express
const express = require('express');
// instantiate express
const app = express();
// define which port to listen on
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');
const projectsRouter = require('./routes/projects.js');
const contactRouter = require('./routes/contact.js');

app.use(projectsRouter.router);
app.use(contactRouter.router);

const header = fs.readFileSync(`${__dirname}/public/header.html`, 'utf-8');
const footer = fs.readFileSync(`${__dirname}/public/footer.html`, 'utf-8');
const frontpage = fs.readFileSync(`${__dirname}/public/frontpage.html`, 'utf-8');
const projects = fs.readFileSync(`${__dirname}/public/projects.html`, 'utf-8');
const contact = fs.readFileSync(`${__dirname}/public/contact.html`, 'utf-8');

app.get('/', (req, res) => {
  res.send(header + frontpage + footer);
});

app.get('/projects', (req, res) => {
  res.send(header + projects + footer);
});

app.get('/contact', (req, res) => {
  res.send(header + contact + footer);
});
app.get('/frontpage', (req, res) => {
  res.redirect('/');
});

// listen to a port and start web server
const server = app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on ${port}!`);
  }
});
