const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");

const render = require("./lib/htmlRenderer");
let arrayOfCards = []

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter the name of the team manager."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee ID of the team manager."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email address of the team manager."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the office number of the team manager."
        }
    ]).then(function (response) {
        let manager = new Manager(response.employeeName, response.id, response.email, response.officeNumber);
        arrayOfCards.push(manager);
        console.log(arrayOfCards)
    })
}


const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter the name of the engineer."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee ID of the engineer."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email address of the engineer."
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Github username of the team engineer."
        }
    ]).then(function (response) {
        let engineer = new Engineer(response.employeeName, response.id, response.email, response.github);
        arrayOfCards.push(engineer);
        console.log(arrayOfCards)
        return true;
    })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Enter the name of the intern."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the employee ID of the intern."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email address of the intern."
        },
        {
            type: "input",
            name: "school",
            message: "Enter the school of the intern."
        }
    ]).then(function (response) {
        let intern = new Intern(response.employeeName, response.id, response.email, response.school);
        arrayOfCards.push(intern);
        console.log({ arrayOfCards })
        return true;
    })
}

const runPromptLoop = () => {
    return inquirer.prompt({
        type: "list",
        name: "nextEntry",
        message: "Would you like to enter an engineer, an intern, or to finish building your team?",
        choices: [
            { name: "Engineer" },
            { name: "Intern" },
            { name: "Finish" }
        ]
    }).then((answers) => {
        // console.log({ answers })
        if (answers.nextEntry == 'Engineer') {
            return promptEngineer()
        }

        else if (answers.nextEntry == 'Intern') {
            return promptIntern()

        }
        else if (answers.nextEntry == 'Finish') {


        }
    }).then((createdEmployee) => {
        // console.log({ createdEmployee })
        if (createdEmployee) {
            return runPromptLoop()
        }
    })
}

promptManager().then(() => {
    return runPromptLoop()
}).then(() => {
    return fs.writeFile(outputPath, render(arrayOfCards), "utf-8")
}).then(() => {
    console.log("Your response has been logged")
})
