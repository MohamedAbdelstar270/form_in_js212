function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var message = document.getElementById("error");

    message.style.color="white";
    message.style.textAlign="center";
    message.style.backgroundColor="red";
    message.style.padding="10px";
    message.style.transition="all 1s ease";
    message.style.marginBottom="10px";

  
    if(name=="" && email=="" && password=="" && confirmpassword=="" ){
        message.innerHTML ="Please Enter Data";
        return false;
    }else if( name.length<5 || name.length>15){
        message.innerHTML = "Please insert 5-15 charachter in user name";
        return false;
    } else if (email.indexOf("@")=="-1"){
        message.innerHTML = "Please enter valid E-mail";
        return false;
    }else if (password.length<=8){
        message.innerHTML="Please enter at least 8 character";
        return false;
    }else if(password != confirmpassword){
        message.innerHTML ="Please matched passwrd";
        return false;
    }else{
        return true;
    }

}