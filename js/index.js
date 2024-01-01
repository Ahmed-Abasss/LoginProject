var uemail = document.getElementById("login-email");
var upassword = document.getElementById("login-password");
var frstwrn =document.getElementById("frstwrn");
var warning = document.getElementById("alerting");
var loginBtn = document.getElementById("login-button");
var moveToSignup = document.getElementById("link2");
var userNameArr =  JSON.parse(localStorage.getItem("userName"))||[];
var getAccounts = JSON.parse(localStorage.getItem("emList"))||[];

function signIn()
{
    if (validateEmail()==true)
    {
        var mail = {
            email:uemail.value,
            password:upassword.value
        }
    var existed = false;
    
        for (let i = 0 ; i< getAccounts.length ; i++)
        {
            if(uemail.value==getAccounts[i].userEmail && upassword.value==getAccounts[i].userPassword)
            {
                existed = true;
                userNameArr.push(getAccounts[i].userName);
                localStorage.setItem("userName",JSON.stringify(userNameArr));
                window.location='./home.html';
            }
        }
    
        if(existed==false)
        {
            warning.classList.replace("d-none","d-block");
        }
    }
    
}

loginBtn.addEventListener("click",
function(){
    signIn();
});

moveToSignup.addEventListener("click", function()
{
    window.location='./signup.html';    
   
    })




function validateEmail()
{
    var reg = /^[a-z0-9]{4,12}@[\w]{2,10}\.[\w]{2,4}$/
    if(reg.test(uemail.value)!==true)
    {
        frstwrn.classList.replace("d-none","d-block");
        return false;
    }
    
    else
    {
        frstwrn.classList.replace("d-block","d-none");
        return true;
    }
}

uemail.addEventListener("keypress",validateEmail);





var x = document.getElementById("link2");

x.addEventListener("mouseenter",function(){
    x.classList.remove("text-decoration-none");
});

x.addEventListener("mouseleave",function(){
    x.classList.add("text-decoration-none");
})

