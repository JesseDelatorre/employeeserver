
const employees=require('./employees.cjs');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(employees);
  res.send(`Hello Employees!`);
});

app.get('/employees', (req, res) => {
  res.send(employees);
});

app.get('/employees/:id', (req, res) => {
  const {id} = resizeBy.params;

  const foundEmployee = employees.find((individualEmployee) => {
    return individualEmployee.id === Number(id);
  })
  res.send(foundEmployee);
});

app.use('*', (req, res) => {
  res.send('404 Page Not Found');
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});