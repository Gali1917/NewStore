var admin = false;
if(admin == true){
    document.getElementById("boton-inventario").style.display = "block";

}
function desplegarTodoMan(){
    const sectionListado = document.getElementById("section-listado");
    const sectionCategorias = document.getElementById("section-categorias");
    const tituloCategoria = document.getElementById("titulo-categoria");
    sectionListado.style.display = "flex";
    sectionCategorias.style.display = "none";
    tituloCategoria.style.display = "block";
}
function btnAtras(){
    document.getElementById("section-listado").style.display = "none";
    document.getElementById("section-categorias").style.display = "flex";
    document.getElementById("titulo-categoria").style.display = "none";
}

function desplegarMenu(){
    const asideMenu = document.getElementById("aside-menu");
    const aside = document.getElementById("aside");
    if(aside.style.display == "block"){
        aside.style.display = "none";
    }
    else{

        aside.style.display = "block";
    }
    asideMenu.style.animationName = "desplegar-menu";
}

function iniciarSesion(){
    const inputEmail = document.getElementById("input-email");
    const inputPassword = document.getElementById("input-password");
    if(inputEmail.value == "admin"){
        admin = true;
        document.getElementById("boton-inventario").style.display = "block";
        history.go(-1);
    }
    else{
        alert("Usuario o contrasena incorrecto");
    }
}