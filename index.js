const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/teamTemplate.html")
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
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

}

// function to initialize app
function init() {
    promptUser()
        .then(teamData => {

            console.log(teamData);
            const outputPage = teamTemplate(teamData);

            fs.writeFile('./dist/outputHTML.html', outputPage, err => {
                if (err) throw new Error(err);

                console.log('Team Profile Created! Check out outputHTML.html in this directory to see it!');
            });
        });
}
// Function call to initialize app
init();
