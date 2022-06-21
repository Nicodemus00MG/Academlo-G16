// var usuarios = ["Josue Munoz"];
// var contraseñas = ["1234"];
// let flag = false;
// function validar() {
//   // var usuarioR=document.getElementById("user").value;


//   return flag;
// }

// validar();


function login(){
    let user ;


    let password;

    user=document.getElementById("user").value;
    password=document.getElementById("psw").value;

    if(user=="Josue Munoz"&& password=="1234"){
        window.location="../html/blogP1.html";
    }else{
        alert("datos no validos")
    }
}
