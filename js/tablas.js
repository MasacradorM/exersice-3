    var imprimir = "<tr><th>Nombre</th><th>Edad</th><th>Curso</th></tr>";

function imprimirFormulario(){
    var nombre = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var curso = document.getElementById("curso").value;

    if(nombre == "" || edad == "" || curso == ""){
        alert("Debe ingresar todos los campos");
    }
    else{
        imprimir += "<tr><td>" + nombre + "</td><td>" + edad + "</td><td>" + curso + "</td></tr>";
        document.getElementById("imprimir").innerHTML = imprimir;
    }


}