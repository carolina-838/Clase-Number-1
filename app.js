


//let elemento = document.title;

//console.log(elemento);

//let elementoW = window;

//console.log(`ELEMENTOS DE WINDOWS ${elementoW}`);



//let elementoE = document.styleSheets;

//console.log(elementoE);


//let elementoId = document.getElementById("tituloDOM");
//console.log(elementoId);
/*

let opId1 = document.getElementById('p1');
 opId1.innerHTML = 'JavaScript';

 let opId2 = document.getElementById('p2');
 opId2.innerHTML = 'Kotlin';

 let opId3 = document.getElementById('p3');
 opId3.innerHTML = 'C++';



let elementoClase = document.getElementsByClassName('lista');
console.log(elementoClase);
*/

/*
let elementoTag = document.getElementsByTagName('h2');
console.log(elementoTag);
*/
/*
let elemtoQ = document.querySelector('ul');
//console.log(elemtoQ.childElementCount);
//console.log(elemtoQ.children);

//console.log(elemtoQ.children[1]);



console.log(elemtoQ.firstElementChild);

console.log(elemtoQ.lastElementChild);


let elementoClase = document.querySelector('#p1');
console.log(elementoClase);
*/

/*
let elementosP = document.getElementsByTagName('p');
console.log(elementosP.length);

for(let i = 0; i< elementosP.length; i++){


    console.log(elementosP[i].textContent);


}

elementosP[2].innerHTML = 'Ejercicio Estilos'


let opId = document.getElementById('p1');

opId.style.background = 'blue';
opId.style.color = 'red';
opId.style.borderRadius = '8px';
opId.style.width = '250px';
opId.style.height = '20px';
opId.style.textAlign = 'center';
*/


// Ver Fecha

function verFecha(){

    let fec = document.getElementById('resultado'); 
    fec.innerHTML = Date();
   
}

// Quitar Fecha

function quitarFecha(){

    let Qfech = document.getElementById('resultado'); 
    Qfech.innerHTML = "Ya no se ve la fecha";
}


function temperatura(){


    let numero = parseFloat(document.getElementById('dato1').value);


    let calculo = numero-273.5;

    let res1 = document.getElementById('res');
    res1.innerHTML = (`Resultado: ${calculo}`);

    alert(`La conversion es: ${calculo}`);


}





































