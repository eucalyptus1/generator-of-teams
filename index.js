const inquirer = require("inquirer");
const fs = require("fs");

const managArr = [];
const enginArr = [];
const intArrn = [];

const managerQuestions = [
  {
    type: "input",
    name: "manager",
    message: "What is the Team Managers name?",
    validate: (managerInput) => {
      if (managerInput) {
        return true;
      } else {
        console.log("The manager has to have a name!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "empId",
    message: "What is their Employee ID number?",
  },

  {
    type: "input",
    name: "manEmail",
    message: "What is their Email address?",
  },

  {
    type: "input",
    name: "office",
    message: "What is their Office number?",
  },

  {
    type: "checkbox",
    name: "engIntern",
    message: "Would you like to add an Employee?",
    choices: ["Add Engineer", "Add Intern", "Finish building team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engName",
    message: "What is the Engineer's name?",
  },

  {
    type: "input",
    name: "engId",
    message: "What is their Employee ID number?",
  },

  {
    type: "input",
    name: "engEmail",
    message: "What is their Email address?",
  },

  {
    type: "input",
    name: "engHub",
    message: "What is their Github username?",
  },

  {
    type: "checkbox",
    name: "engIntern",
    message: "Would you like to add another Employee?",
    choices: ["Add Engineer", "Add Intern", "Finish building team"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "intName",
    message: "What is the Intern's name?",
  },

  {
    type: "input",
    name: "intId",
    message: "What is their Employee ID number?",
  },

  {
    type: "input",
    name: "intEmail",
    message: "What is their Email address?",
  },

  {
    type: "input",
    name: "intSchool",
    message: "What school do they go to?",
  },

  {
    type: "checkbox",
    name: "engIntern",
    message: "Would you like to add an Employee?",
    choices: ["Add Engineer", "Add Intern", "Finish building team"],
  },
];

function writeToFile(data) {
  fs.writeFile("./dist/generatedHTML.md", generateHTML(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("it works!");
    }
  });
}

function init() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "employeeChoice",
        message:
          "Welcome to TeamGen 2k9. Please select a team member role to create",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I changed my mind, i have to go",
        ],
      },
    ])
    .then(function (data) {
      if (data.choices === "Manager") {
        inquirer.prompt(managerQuestions).then((manAnswers) => {
          manAnswers.push(managArr);
        });
      } else if (data.choices === "Engineer") {
        inquirer.prompt(engineerQuestions).then((engAnswers) => {
          engAnswers.push(enginArr);
        });
      } else if (data.choices === "Intern") {
        inquirer.prompt(internQuestions).then((intAnswers) => {
          intAnswers.push(intArrn);
        });
      } else {
        return;
      }
      // writeToFile(answers);
    });
}

init();
