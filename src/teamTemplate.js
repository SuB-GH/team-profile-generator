//create the team template cards

const renderTeam = team => {
    //this will create the Manager employee card
    const renderManager = manager => {
        return`
        <div class= "employee-card">
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
    `}
};
