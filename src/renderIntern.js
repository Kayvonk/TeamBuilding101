module.exports = (intern) => `
<div class="employee-card">
    <div class="cardHeader">
        <h3 class="subHeader pt-2 pl-3 pr-3">${intern.name}</h3>
        <h4 class="subHeader pb-3 pl-3 pr-3"> <i class="fas fa-university"></i>${intern.role}</h4>
    </div>
    <div class="contents">
        <div class="pl-3 pr-3"> ID:${intern.id}</div>
         <div class="pl-3 pr-3"> Email: <a href="mailto:${intern.email}">${intern.email}</a> </div>
        <div class="pb-3 pl-3 pr-3">School:${intern.school}</div>
    </div>
</div>
`

