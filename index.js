const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

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
        console.log("There seems to be an error")
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
        addEngineer();
        break;
      case "Yes, add new Intern":
        addIntern();
        break;
      case "No, export to HTML":
        postData();
        break;
      default:
        throw err;
    }
  }
  catch(err){
    console.log("There seems to be an error")
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
    console.log("There seems to be an error")
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
    console.log("There seems to be an error")
  }
}

function postData(){
  console.log("Success!\n");
  for (let i = 0; i < employeeList.length; i++){
    console.log(employeeList[i].getName() + "\n");
  }
}

addManager();