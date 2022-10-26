//create the team template cards

const renderTeam = (team) => {
    //let html = ""
    // add for each, array.map, etc to loop over team array 
    // call render manager then html.push, then renderManager
    //this will create the Manager employee card
    const renderManager = manager => {
        return `
        <div class= "team-cards col-12 d-flex justify-content-center">
        <div class= "employee-card "d-flex p-2 bd-highlight"">
            <div class="card-header">
                <h2 class="card-header">${manager.getName()}</h2>
                <h3 class="card-header">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-list">
                    <li class="employee-list-item">ID: ${manager.getId()}</li>
                    <li class="employee-list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}<a/></li>
                    <li class="employee-list-item">Office Number: ${manager.getOfficeNum()}</li>
                </ul>

            </div>
        </div>
        </div>
    `}

    const renderEngineer = engineer => {
        return `
        <div class= "team-cards">
        <div class= "employee-card">
            <div class="card-header">
                <h2 class="card-header">${engineer.getName()}</h2>
                <h3 class="card-header">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-list">
                    <li class="employee-list-item">ID: ${engineer.getId()}</li>
                    <li class="employee-list-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<a/></li>
                    <li class="employee-list-item">Github Username: ${engineer.getGithub()}</li>
                </ul>

            </div>
        </div>
        </div>
    `}

    const renderIntern = intern => {
        return `
        <div class= "team-cards">
        <div class= "employee-card">
            <div class="card-header">
                <h2 class="card-header">${intern.getName()}</h2>
                <h3 class="card-header">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="employee-list">
                    <li class="employee-list-item">ID: ${intern.getId()}</li>
                    <li class="employee-list-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}<a/></li>
                    <li class="employee-list-item">School: ${intern.getSchool()}</li>
                </ul>

            </div>
        </div>

    `}

   

    const html = [];
html.push(
    team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
);
html.push(
    team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderEngineer(engineer))
        .join("")
);
html.push(
    team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderIntern(intern))
        .join("")
        );
        return html.join("");

};



module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>Team Profile</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css" />
</head>
<body>

    <div>
        <div class="row">
            <div class="col-12 jumbotron mb-5 team-heading">
                <h1 class="text-center">Team Profile</h1>
            </div>
        </div>
    </div>
    
            <div class="employee-cards d-inline-flex">

                ${renderTeam(team)}

            </div>
    

</body>

    `
}

//<body>${renderTeam(team)}</body>