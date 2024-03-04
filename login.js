function ingresarLogin(){
    const usuario1 = "stevens123"
    const constraseña1 = "123";

    const usuarioLog = document.getElementById('usuarioInput').value;
    const passlog = document.getElementById('passInput').value;

    if(usuarioLog === usuario1 && passlog === constraseña1){
        alert("Usuario y contraseña correctos");
        window.location.href = "1.html"
    }
    else{
        alert("Usuario y contraseña incorrectos");
    }
    console.log("exito");
}
