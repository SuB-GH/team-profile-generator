const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/teamTemplate.html")
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const path = require('path');
const employees = [];

//path to the output html
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPage = path.join(OUTPUT_DIR, "teamTemplate.html");

// new Employee().assignName();
//console.log(inquirer);
const promptUser = async () => {
    const answers = await
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'mgrName',
                    message: "What is the name of the Team Manager?"

                },
                {
                    type: 'text',
                    name: 'employeeId',
                    message: "What is the Team Manager's employee ID?"

                },
                {
                    type: 'text',
                    name: 'email',
                    message: "What is the Team Manager's email address?"

                },
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: "What is the Team Manager's office number?"

                },
                {
                    type: 'list',
                    name: 'options',
                    message: 'What would you like to do next?',
                    choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
                },
                
            ])
            

    if (answers.options === "Add an Engineer") {
        const engineerOpt = await inquirer.prompt([
            {
                type: 'text',
                name: 'engName',
                message: "What is the Engineer's name?"
            },

            {
                type: 'text',
                name: 'engId',
                message: "What is the Engineer's employee ID?"

            },

            {
                type: 'text',
                name: 'email',
                message: "What is the Engineer's email address?"

            },

            {
                type: 'text',
                name: 'github',
                message: "What is the Engineer's Github username?"

            },
        ])
        
    }
    createTeam();

    if (answers.options === "Add an Intern") {
        const internOpt = await inquirer.prompt([
            {
                type: 'text',
                name: 'intName',
                message: "What is the Intern's name?"
            },

            {
                type: 'text',
                name: 'intId',
                message: "What is the Intern's employee ID?"

            },

            {
                type: 'text',
                name: 'email',
                message: "What is the Intern's email address?"

            },

            {
                type: 'text',
                name: 'school',
                message: "What school did the intern attend?"

            },
        ])
    }

    if (answers.options === "Finish building my team") {
        const internOpt = await inquirer.prompt([
            {
                type: 'text',
                name: 'intName',
                message: "What is the Intern's name?"
            },

            {
                type: 'text',
                name: 'intId',
                message: "What is the Intern's employee ID?"

            },

            {
                type: 'text',
                name: 'email',
                message: "What is the Intern's email address?"

            },

            {
                type: 'text',
                name: 'school',
                message: "What school did the intern attend?"

            },
        ])
    }
}

// function to initialize app
function init() {
    promptUser()
        .then(teamData => {

            console.log(teamData);
            //const outputPage = teamTemplate(teamData);
function createTeam(){
    if (!fs.existsSync( OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
            }
            // renderHTML = () => {
                // const createHTML = render(employees);
                fs.writeFileSync(outputPage, generateTeam(employees), err => {
                    if (err) throw new Error(err);

                    console.log('Team Profile Created! Check out teamTemplate.html in this directory to see it!');
                });
            };
        })}
// Function call to initialize app
init();
