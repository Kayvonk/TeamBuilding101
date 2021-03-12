const path = require("path");
const fs = require("fs");

const srcDir = path.resolve(__dirname, "../src");


const renderManager = (manager) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${manager.writeName()}</h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-briefcase"></i> ${manager.writeRole()}</h4>
    </div>
    <div class="contents">
        <div class="pl-3 pr-3"> ID:${manager.writeId()}</div>
        <div class="pl-3 pr-3"> Email: <a href="mailto:${manager.writeEmail()}">${manager.writeEmail()}</a> </div>
        <div class="pb-3 pl-3 pr-3">Office Number: ${manager.writeOfficeNumber()}</div>
    </div>
</div>
`
const renderEngineer = (engineer) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${engineer.writeName()} </h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-wrench"></i> ${engineer.writeRole()}</h4>
    </div>
    <div class="contents">
        <div class="pl-3 pr-3"> ID: ${engineer.writeId()}</div>
        <div class="pl-3 pr-3"> Email: <a href="mailto:${engineer.writeEmail()}">${engineer.writeEmail()}</a> </div>
        <div class="pb-3 pl-3 pr-3">Github: <a href="https://github.com/${engineer.writeGithub()}" target="_blank">${engineer.writeGithub()}</a>
        </div>
    </div>
</div>
`

const renderIntern = (intern) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${intern.writeName()}</h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-university"></i> ${intern.writeRole()}</h4 >
    </div >
    <div class="contents">
        <div class="pl-3 pr-3"> ID:${intern.writeId()}</div>
        <div class="pl-3 pr-3"> Email: <a href="mailto:${intern.writeEmail()}">${intern.writeEmail()}</a> </div>
        <div class="pb-3 pl-3 pr-3">School: ${intern.writeSchool()}</div>
    </div>
</div >
    `

module.exports = (employees) => {
    console.log({ employees })
    const managerHTML = employees.filter(employee => employee.writeRole() === "Manager").map(renderManager).join("\n")
    const engineerHTML = employees.filter(employee => employee.writeRole() === "Engineer").map(renderEngineer).join("\n")
    const internHTML = employees.filter(employee => employee.writeRole() === "Intern").map(renderIntern).join("\n")
    return `<!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css">
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
                        <link rel="preconnect" href="https://fonts.gstatic.com">
                            <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600&display=swap" rel="stylesheet">
                                <link rel="stylesheet" href="style.css" />
                                <title>Team Profile</title>
</head>

                            <body>
                                <div class="container-fluid">
                                    <div id="header" class="row">
                                        <h1 class="center" id="headerText">Meet the Team</h1>

                                    </div>
                                    <div id="cards" class="row d-flex justify-content-center">
                                        ${managerHTML}
                                        ${engineerHTML}
                                        ${internHTML}
                                    </div>
                                </div>
                            </body>

</html>`
};