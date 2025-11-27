
let elementosPorclass = document.getElementsByClassName("texto");
let elementosPorID = document.getElementById("formulario");
let elementoPOrTag = document.getElementsByTagName("a");


//exibindo
console.log(elementosporClass);
console.log(elementosPorClass[0]); // acessa a 1 posição do array
console.log(elementosPorID);
console.log(elementoporTag);
console.log(elementoporTag[0].textContent);


//modificando
elementoPorTag[0].textContent = "Vídeo engraçado"; //modifica o conteudo do elemento
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontSize= "30px";


//DESAFIOS
//1️⃣exiba o 2 segundo elemento(item) da variavel elementos✅
//2️⃣Crie uma variavel que tenha o valor de um elemento buscado pelo nome da tag✅
//3️⃣Acesse a propriedade innerText da variavel elementoPorTag(é uma array, vão ter que acessar pela posição do elemento) e exiba no console.log✅
//Acesse a propriedade style.color e atribui (=) uma cor red em formato de string para a posição 0 da variavel elementoPorTag