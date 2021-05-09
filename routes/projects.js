const router = require('express').Router();

const projects = [{
  title: 'Assignment-Dashboard',
  description: 'Website containing a CRUD Dashboard to display and manage Assignments',
  startDate: new Date('2020-12-01'),
  endDate: new Date('2021-01-27'),
  gitLink: 'https://github.com/Lbniese/Assignment-Dashboard',
},
{
  title: 'KS-TOTALSERVICE',
  description: 'Company site for the company KS-TOTALSERVICE',
  startDate: new Date('2020-12-07'),
  endDate: new Date('2021-01-11'),
  gitLink: 'https://github.com/Lbniese/KS-TOTALSERVICE',
},
{
  title: 'PWGen-NodeJSPowered',
  description: 'Website to generate randomized passwords',
  startDate: new Date('2021-04-06'),
  endDate: new Date('2021-05-05'),
  gitLink: 'https://github.com/Lbniese/PWGen-NodeJSPowered',
},

{
  title: 'Assignment-Dashboard',
  description: 'Website containing a CRUD Dashboard to display and manage Assignments',
  startDate: new Date('2020-12-01'),
  endDate: new Date('2021-01-27'),
  gitLink: 'https://github.com/Lbniese/Assignment-Dashboard',
},
{
  title: 'Todo API',
  description: 'CRUD API for Assignments and Todos - Includes Frontend Webpage',
  startDate: new Date('2020-10-23'),
  endDate: new Date('2020-10-23'),
  gitLink: 'https://github.com/Lbniese/TodoApi',
},
];

router.get('/api/projects', (req, res) => {
  res.send({ projects });
});

module.exports = {
  router,
};
