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