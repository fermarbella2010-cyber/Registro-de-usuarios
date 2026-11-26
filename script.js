function enviar() {
    let nombre = document.getElementById("nombre").value;
    let paterno = document.getElementById("paterno").value;
    let materno = document.getElementById("materno").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;

    document.getElementById("resultado").innerHTML =
    "Nombre: " + nombre + "<br>" +
    "Apellido Paterno: " + paterno + "<br>" +
    "Apellido Materno: " + materno + "<br>" +
    "Telefono: " + telefono + "<br>" +
    "Dirección: " + direccion + "<br>" +
    "Correo: " + correo;
}