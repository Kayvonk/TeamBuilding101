module.exports = (engineer) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${engineer.name} </h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-wrench"></i> ${engineer.role}</h4>
    </div>
    <div class="contents">
        <div class="pl-3 pr-3"> ID: ${engineer.id}</div>
        <div class="pl-3 pr-3"> Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </div>
        <div class="pb-3 pl-3 pr-3">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
        </div>
    </div>
</div>
`