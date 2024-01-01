var ename = document.getElementById("name");
var email= document.getElementById("email");
var password = document.getElementById("password");
var button = document.getElementById("button");
var warn = document.getElementById("warn");
var emailWarning= document.getElementById("email-warning");
var successfully = document.getElementById("success")
var allWarning= document.getElementById("allwarning");
var iteration = document.getElementById("existance");
var emailList=[];

document.getElementById("link").addEventListener("click",function()
{
    window.location='./index.html';
})



emailList=JSON.parse(localStorage.getItem("emList"))||[];

function creatEmail()
{

    if(userNameVlidate()===true && validateEmail()===true && validateALLFields()===true)
    {
        emailList=JSON.parse(localStorage.getItem("emList"))||[];
        var signup = {
            userName:ename.value,
            userEmail:email.value,
            userPassword:password.value
        }
        let isExiset=false;
        for ( let i = 0 ; i< emailList.length; i++)
        {
            if(emailList[i].userEmail==email.value)
            {
                isExiset=true;
                iteration.classList.replace("d-none","d-block");
                successfully.classList.replace("d-block","d-none");
            }
        }
            

            if(isExiset==false)
            {
                iteration.classList.replace("d-block","d-none");
                emailList.push(signup);
                localStorage.setItem("emList",JSON.stringify(emailList)); 
                successfully.classList.replace("d-none","d-block");   
            }

            

        

    
        // console.log(preventIteration());
        // console.log(emailList);
    }
    
}

button.addEventListener("click", function(){creatEmail();});



function userNameVlidate()
{
    var regex = /^[\w \-_]{2,19}$/
    if(regex.test(ename.value)!=true)
    {
        warn.classList.replace("d-none","d-block");
        return false;
    }
    else
    {
        warn.classList.replace("d-block","d-none");
        return true;
    }
}
ename.addEventListener("keypress",userNameVlidate);




function validateEmail()
{
    var reg = /^[a-z0-9]{4,12}@[\w]{2,10}\.[\w]{2,4}$/
    if(reg.test(email.value)!=true)
    {
        emailWarning.classList.replace("d-none","d-block");
        return false;
    }
    
    else
    {
        emailWarning.classList.replace("d-block","d-none");
        return true;
    }

}
email.addEventListener("keypress",validateEmail);






function validateALLFields()
{
    if(ename.value!="" && email.value!="" && password.value!="")
    {
        allWarning.classList.replace("d-block","d-none");
        return true;
    }
    else
    {
        allWarning.classList.replace("d-none","d-block");
        return false;
    }
}

button.addEventListener("click",validateALLFields);



var x = document.getElementById("link");
x.addEventListener("mouseenter",function(){
    x.classList.remove("text-decoration-none");
});

x.addEventListener("mouseleave",function(){
    x.classList.add("text-decoration-none");
})


