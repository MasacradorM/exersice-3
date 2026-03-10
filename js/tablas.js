    
// Variable para almacenar el HTML de la tabla
var imprimir = "<tr><th>Nombre</th><th>Edad</th><th>Curso</th></tr>";

// Arreglo para guardar registros
var registros = [];

function imprimirTabla(){

    var nombre = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var curso = document.getElementById("curso").value;

    if(nombre == "" || edad == "" || curso == ""){
        alert("Debe ingresar todos los campos");
        return;
    }

    // Verificar si ya existe el registro
    for(let i = 0; i < registros.length; i++){
        if(registros[i].nombre == nombre && registros[i].curso == curso){
            alert("Este nombre ya está registrado en este curso");
            return;
        }
    }

    // Guardar en el arreglo
    registros.push({
        nombre: nombre,
        edad: edad,
        curso: curso
    });

    // Agregar fila a la tabla
    imprimir += "<tr><td>" + nombre + "</td><td>" + edad + "</td><td>" + curso + "</td></tr>";
    document.getElementById("imprimir").innerHTML = imprimir;
}