// let elemento = document

// elemento=document.body;
// console.log(elemento)

// let opid= document.getElementById(`p1`); opid.innerHTML= `LOCA`

// let clase = document.getElementsByClassName(`lista`);
// console.log(clase)

// let elementotag = document.getElementsByTagName(`h2`);
// console.log(elementotag)

// let elementoq = document.querySelector(`ul`);
// console.log(elementoq)

// console.log(elementoq.children)}

// let elementop = document.getElementsByTagName(`p`)
// console.log(elementop.length)

// for(let i = 0; i < elementop.length; i++){

// console.log(elementop [i].textContent)

// }

// elementop[2].innerHTML=`prueba`

// let opid= document.getElementById(`p1`); 

// opid.style.background = `blue`;
// opid.style.borderRadius = `8px`;
// opid.style.textAlign = `center`;


// Ver fecha


function verfecha(){

    let fec = document.getElementById(`resultado`)
    fec.innerHTML=Date()

}

// Quitar fecha

function quitarfecha(){

let Qfec = document.getElementById(`resultado`);
Qfec.innerHTML = "fecha"
}

function temperatura (){

  let numero =parseFloat (document.getElementById(`dato1`).value);
    
  let calculo = numero -273.5;

  let res1 = document.getElementById(`res`)
res1.innerHTML = (`resultadO; ${calculo}`)
//   alert (`La conversion es: ${calculoalculo}`)
}
