let inquirer = require('inquirer')
let cTable = require('console.table')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'pravinsisowath',
  password: 'rootroot',
  database: 'employeedb'
})

connection.connect(function(err){
  if (err) console.log (err)
  start()
})

function start() {
  inquirer.prompt({
    type: 'list',
    name: 'options',
    message: 'Select an option:',
    choices: [
      'View employees',
      'View roles',
      'View departments',
      'Add employee',
      'Add department',
      'Add role',
      'Update employee',
      'Remove employee',
    ]
  })

.then(function (answer) {
  switch (answer.action) {
      case "View employees":
          employees()
          break
      case "View roles":
          roles()
          break
      case "View departments":
          departments()
          break
      case "Add employee":
          addEmployee()
          break
      case "Add department":
          addDepartment()
          break
      case "Add role":
          addRole()
          break
  }
})
}

function employees() {
  let query = 'SELECT * FROM employees'
  connection.query(query, function(err, answer) {
    if (err) throw err
    console.table(answer)
  })
  start()
}

function roles() {
  connection.query('SELECT * FROM role', function(err, answer) {
    if (err) throw err
    console.table(answer)
  })
  start()
}

function departments() {
  connection.query('SELECT * FROM department', function(err, answer) {
    if (err) throw err
    console.table(answer)
  })
  start()
}

function addEmployee() {
  connection.query("SELECT * FROM employee", function (err, res) {
  if (err) throw err
  
  inquirer
      .prompt([
          {
              name: "firstName",
              type: "input", 
              message: "First name:",
          },
          {
              name: "lastName",
              type: "input", 
              message: "Last name:"
          }
      ])
      .then(function(answer){
        connection.query('INSERT INTO employee SET ?',
        {
          firstName: answer.firstName,
          lastName: answer.lastName
        },
        function(err, answer) {
          if (err) throw err
          console.table(answer)
        }
        )
        start()
      })
    })}

function addRole() {
      connection.query("SELECT * FROM role", function (err, res) {
      if (err) throw err
      
      inquirer
          .prompt([
              {
                  name: "newRole",
                  type: "input", 
                  message: "New Role:",
              }
          ])
          .then(function(answer){
            connection.query('INSERT INTO role SET ?',
            {
              role: answer.newRole,
            },
            function(err, answer) {
              if (err) throw err
              console.table(answer)
            }
            )
            start()
          })
        })}

function addDepartment() {
          connection.query("SELECT * FROM department", function (err, res) {
          if (err) throw err
          
          inquirer
              .prompt([
                  {
                      name: "newDepartment",
                      type: "input", 
                      message: "New Department:",
                  }
              ])
              .then(function(answer){
                connection.query('INSERT INTO department SET ?',
                {
                  department: answer.newDepartment,
                },
                function(err, answer) {
                  if (err) throw err
                  console.table(answer)
                }
                )
                start()
              })
            })}

