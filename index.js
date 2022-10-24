const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/teamTemplate.js")
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const path = require('path');
const employees = [];
const idArray = [];

//path to the output html
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPage = path.join(OUTPUT_DIR, "teamTemplate.html");

function teamOptions() {

    function managerPrompt () {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'mgrName',
                    message: "What is the name of the Team Manager?"
                },
                {
                    type: 'text',
                    name: 'mgrId',
                    message: "What is the Team Manager's employee ID?"
                },
                {
                    type: 'text',
                    name: 'mgrEmail',
                    message: "What is the Team Manager's email address?"
                },
                {
                    type: 'text',
                    name: 'mgrOfficeNum',
                    message: "What is the Team Manager's office number?"
                }

            ]).then(answers => {
                const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOfficeNum);
                employees.push(manager);
                idArray.push(answers.mgrId);
                createNewTeam();
            });
    }
    function createNewTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do next?',
                choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
            },
        ])

        if (answers.options === "Add an Engineer") {
            inquirer.prompt([
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
                    name: 'engEmail',
                    message: "What is the Engineer's email address?"
                },

                {
                    type: 'text',
                    name: 'engGithub',
                    message: "What is the Engineer's Github username?"
                },
            ]).then(answers => {
                const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub);
                employees.push(engineer);
                idArray.push(answers.engId);
                createNewTeam();
            });
        }

        if (answers.options === "Add an Intern") {
            inquirer.prompt([
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
                    name: 'intEmail',
                    message: "What is the Intern's email address?"
                },

                {
                    type: 'text',
                    name: 'intSchool',
                    message: "What school did the intern attend?"
                },
            ]).then(answers => {
                const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
                employees.push(intern);
                idArray.push(answers.intId);
                createNewTeam();
            },
    

        // function to initialize app
        // function init() {
    //promptUser()
        // .then(teamData => {

        //     console.log(teamData);
            //const outputPage = teamTemplate(teamData);
            function createTeam() {
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR)
                }
                // renderHTML = () => {
                // const createHTML = render(employees);
                fs.writeFileSync(outputPage, generateTeam(employees), err => {
                    if (err) throw new Error(err);

                    console.log('Team Profile Created! Check out teamTemplate.html in this directory to see it!');
                });
            });
        } }
        //createTeam();
        // Function call to initialize app
        // init();
        managerPrompt();

    }
    teamOptions();