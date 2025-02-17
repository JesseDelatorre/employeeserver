
const employees = require('./employees.cjs');

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('dist'));
// app.get('/', (req, res) => {
//   // console.log(employees);
//   res.send(`Hello Employees!`);
// });

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

app.post('/api/v1/employees', (req, res, next) => {

})


app.use('*', (req, res) => {
  res.send('404 Page Not Found');
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`);
});