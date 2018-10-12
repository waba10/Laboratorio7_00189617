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

containers.style.backgroundColor = "#009999";