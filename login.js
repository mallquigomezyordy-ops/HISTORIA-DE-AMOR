function verificar(){

    let contraseña="23/03/2026";

    let ingreso=document.getElementById("clave").value;

    if(ingreso===contraseña){

        document.getElementById("error").style.color="green";

        document.getElementById("error").innerHTML=
        "❤️ Bienvenida mi amor...";

        setTimeout(function(){

            window.location.href="principal.html";

        },2000);

    }

    else{

        document.getElementById("error").style.color="red";

        document.getElementById("error").innerHTML=
        "🥺 Ups... esa no es nuestra contraseña.";

    }

}