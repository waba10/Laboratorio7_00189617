var container = document.getElementById("c1");
console.log(container);

/*
Contiene la descripción de la etiqueta donde se ha utilizado el id c1
*/

container.innerText = "¡Hola Mundo!";
/*
En el primer cuadrado naranja aparece un hola mundo*/

container.style.backgroundColor = "#000000";
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = '<input type="text" placeholder="escriba su texto">';

/*
El primer cuadrado ha cambiado su color de fondo, posteriormente lo hizo el hola mundo
, pero ya terminando los pasos anteriores se creo un input de tipo text
*/

/*
La diferencia, es que con el innerHtml agregas u obtenes codigo en formato html
y con innetText es en formato de texto
*/

var containers = document.getElementsByClassName("c2");
console.log(containers);

/*
Un arreglo con todos los elemntos donde se encuentra la clase c2
*/
var contenedores = document.querySelectorAll(".c2");
console.log(contenedores);
contenedores.forEach((element) => {
    element.style.backgroundColor = "#009999";
    element.innerHTML = '<input type="text" placeholder="escriba su texto">';
});

/*
Los demás cuadros cambiaron a un color turquesa 
*/

/*
Cada cuadro tiene su propio input de tipo text
*/

/*
La diferencia, es que con el innerHtml agregas u obtenes codigo en formato html
y con innetText es en formato de texto
*/

var boton = document.getElementById("btn-click");

boton.onclick = function(evt) {
    alert("Hola mundo");
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt) {
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}

/* 
Aparecerá un mensaje de alerta diciendo "Hola Mundo"
*/

/*Con innerText hay que agregar un texto específico y con value 
el texto es el que se recoge atraves de un evento, es decir, el que se ingresa*/