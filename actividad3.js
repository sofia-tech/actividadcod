const mayorEdad = 18;

function verificarEdad() {
let edad = document.getElementById("edadUsuario").value;
if (edad >= mayorEdad) {
    alert("Usted es mayor de edad, puede continuar en la página.");
} else {
    alert("Usted NO es mayor de edad, NO puede continuar en la página.");
}
}

function compararEdad () {
    let edad1 = document.getElementById("edadUsuario").value;
    let edad2 = document.getElementById("edadUsuario2").value;
    let edad3 = document.getElementById("edadUsuario3").value;
    let edadMayor = Math.max(edad1, edad2, edad3);
    document.getElementById("mensaje").innerHTML = `La edad mayor es ${edadMayor}.`;
}