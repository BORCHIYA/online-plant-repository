function validate(){
    var username=document.getElementById("username").value
    var password=document.getElementById("passwrd").value
    if(username=="admin" && password=="user")
    {alert("login succesfull");
    window.location="deal.html";
    
}
else{
    alert("login failed");
}
}