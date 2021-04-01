const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const employeeList = [];

async function addManager() {
    try{
      const {name, id, email, office} = await inquirer.prompt([
          {
              message: "What is your manager's name?",
              name: "name"
          },
          {
              message: "What is your manager's ID?",
              name: "id"
          },
          {
              message: "What is your manager's email?",
              name: "email"
          },
          {
              message: "What is your manager's office number?",
              name: "office"
          }
      ]);

      employeeList[0] = new Manager(name, id, email, office);
      addNew();

    }
    catch(err){
        console.log("Error in addManager")
    }
    
}

async function addNew(){
  try{
    const {response} = await inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Yes, add new Engineer", "Yes, add new Intern", "No, export to HTML"],
            name: "response"
        }
    ]);

    switch(response){
      case "Yes, add new Engineer":
        return addEngineer();

      case "Yes, add new Intern":
        return addIntern();

      case "No, export to HTML":
        return postData();

    }
  }
  catch(err){
    console.log("Error in addNew")
  }
}

async function addEngineer(){
  try{
    const {name, id, email, github} = await inquirer.prompt([
        {
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            message: "What is your engineer's ID?",
            name: "id"
        },
        {
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            message: "What is your engineer's github account?",
            name: "github"
        }
    ]);

    employeeList[employeeList.length] = new Engineer(name, id, email, github);
    addNew();

  }
  catch(err){
    console.log("Error in addEngineer")
  }
}

async function addIntern(){
  try{
    const {name, id, email, school} = await inquirer.prompt([
        {
            message: "What is your intern's name?",
            name: "name"
        },
        {
            message: "What is your intern's ID?",
            name: "id"
        },
        {
            message: "What is your intern's email?",
            name: "email"
        },
        {
            message: "What is your intern's school?",
            name: "school"
        }
    ]);

    employeeList[employeeList.length] = new Intern(name, id, email, school);
    addNew();

  }
  catch(err){
    console.log("Error in addIntern")
  }
}

async function postData(){
try{
let content = "";
 for (let i = 0; i < employeeList.length; i++){
  let role = employeeList[i].getRole();

  switch(role){
    case "Manager":
      content += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employeeList[0].getName()}</h5>
        <h5 class="card-title"><span class="fa fa-mug-hot"></span>Manager</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employeeList[0].getId()}</li>
          <li class="list-group-item">Email: ${employeeList[0].getEmail()}</li>
          <li class="list-group-item">Office number: ${employeeList[0].officeNumber}</li>
        </ul>
      </div>
    </div>
    `
      break;
    case "Intern":
      content += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employeeList[i].getName()}</h5>
        <h5 class="card-title"><span class="fa fa-user-graduate"></span>Intern</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employeeList[i].getId()}</li>
          <li class="list-group-item">Email: ${employeeList[i].getEmail()}</li>
          <li class="list-group-item">School: ${employeeList[i].getSchool()}</li>
        </ul>
      </div>
    </div>
  `
      break;
    case "Engineer":
      content += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employeeList[i].getName()}</h5>
        <h5 class="card-title"><span class="fa fa-glasses"></span>Engineer</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employeeList[i].getId()}</li>
          <li class="list-group-item">Email: ${employeeList[i].getEmail()}</li>
          <li class="list-group-item">Github: ${employeeList[i].getGithub()}</li>
        </ul>
      </div>
    </div>
  `   
      break;
  }
 }

 const template = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Team Profile</title>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
     <link href="style.css" rel="stylesheet">
 </head>
 <body>
   <header class="team-header">
     <h1>My Team</h1>
   </header>
   <section id="main">
   ${content}
 </section>
 </body>
 </html>
 ` 
 await writeFileAsync("./dist/index.html", template, "utf8");
}
catch(err){
  console.log("Error in postData")
}
}




addManager();

