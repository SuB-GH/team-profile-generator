//create the team template cards

const renderTeam = (team) => {
    //let html = ""
    // add for each, array.map, etc to loop over team array 
    // call render manager then html.push, then renderManager
    //this will create the Manager employee card
    const renderManager = manager => {
        return `
       
        <div style="width:16rem;" class="employee-card card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                <h3 class="card-header">${manager.getName()}</h3>
                <h4 class="card-header">${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="employee-list p-2">
                    <li class="employee-list-item">ID: ${manager.getId()}</li>
                    <li class="employee-list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}<a/></li>
                    <li class="employee-list-item">Office Number: ${manager.getOfficeNum()}</li>
                </ul>

            </div>
            
        </div>
    `}

    const renderEngineer = engineer => {
        return `
      
        <div style="width:16rem;" class="employee-card card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                <h3 class="card-header">${engineer.getName()}</h3>
                <h4 class="card-header">${engineer.getRole()}</h4>
            </div>
            <div class="card-body">
            <ul class="employee-list p-2">
                    <li class="employee-list-item">ID: ${engineer.getId()}</li>
                    <li class="employee-list-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<a/></li>
                    <li class="employee-list-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}<a/></li>
                </ul>

            </div>
        
        </div>
       
    `}

    const renderIntern = intern => {
        return `
     
        <div style="width:16rem;" class="employee-card card shadow p-3 mb-5 bg-white rounded">
            <div class="card-header">
                <h3 class="card-header">${intern.getName()}</h3>
                <h4 class="card-header">${intern.getRole()}</h4>
            </div>
            <div class="card-body">
            <ul class="employee-list p-2">
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
<link rel="stylesheet" href="./dist/style.css"> 
</head>
<body>

    <div>
        <div class="row">
            <div class="col-12 jumbotron mb-5 team-heading">
                <h1 class="text-center">Team Profile</h1>
            </div>
        </div>
    </div>
    
    
    <div class= "container justify-content-center d-flex flex-wrap text-center p-2 bd-highlight">

                ${renderTeam(team)}

            </div>
           
    

</body>

    `
}

//<body>${renderTeam(team)}</body>