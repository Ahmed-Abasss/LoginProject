var user = JSON.parse(localStorage.getItem("userName"))||[] ;

var text = document.getElementById("main-text");
var logoutBtn = document.getElementById("btn");

function displayHome()
{
    for (let i = 0 ; i < user.length ; i ++)
{
    text.innerHTML = `welcome ${user[i]}`;
    console.log(user[i]);
}
}

displayHome();

logoutBtn.addEventListener("click",function()
{
    user.splice(0,1);
    window.location='./index.html';
})