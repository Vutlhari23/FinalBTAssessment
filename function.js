

function validateEmail(){

    let email = document.getElementById("email").value;

    let atSign = 0;
    let dotSign = 0;

    for(let i = 0; i < email.length; i++){

        if(email[i] === "@"){
            atSign++;
        }

        if(email[i] === "."){
            dotSign++;
        }
    }

    if(atSign == 1 && dotSign >= 1){

        document.getElementById("email").style.color = "green";

        localStorage.setItem("email", email);

        window.location.href = "thank-u.html";

    }else{

        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.backgroundColor = "pink";
        document.getElementById("err").innerHTML = "Please provide a valid email";            
    }
}
function validateEmailOne(){

    let email = document.getElementById("emailddeskTop").value;

    let atSign = 0;
    let dotSign = 0;

    for(let i = 0; i < emailddeskTop.length; i++){

        if(email[i] === "@"){
            atSign++;
        }

        if(email[i] === "."){
            dotSign++;
        }
    }

    if(atSign == 1 && dotSign >= 1){

        document.getElementById("emailddeskTop").style.color = "green";

        localStorage.setItem("emailddeskTop", emailddeskTop);

        window.location.href = "thank-u.html";

    }else{

        document.getElementById("emailddeskTop").style.color = "red";
        document.getElementById("emailddeskTop").style.backgroundColor = "pink";
        document.getElementById("err").innerHTML = "Please provide a valid email";            
    }
}

function resized(){

    const width = window.innerWidth;

    if(width < 1500){

        document.getElementById('main').style.display = 'none';
        document.getElementById('main1').style.display = 'block';

    }else{

        document.getElementById('main').style.display = 'flex';
        document.getElementById('main1').style.display = 'none';
    }
}

window.addEventListener('resize', resized);
window.addEventListener('load', resized);
