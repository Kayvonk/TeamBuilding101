module.exports = (manager) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${manager.name}</h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-briefcase"></i>${manager.role}</h4>
    </div>
    <div class="contents">
        <div class="pl-3 pr-3"> ID:${manager.id}</div>
        <div class="pl-3 pr-3"> Email: <a href="mailto:${manager.email}">${manager.email}</a> </div>
        <div class="pb-3 pl-3 pr-3">Office Number: ${manager.officeNumber}</div>
    </div>
</div>
`