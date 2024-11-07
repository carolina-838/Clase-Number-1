let exmedicamento1 = 0;
let exmedicamento2 = 0;
let pacientesA = 0;
let pacientesmedicamento1 = 0;
let pacientesmedicamento2 = 0;

document.getElementById("actualizarExistencias").addEventListener("click", () => {
    exmedicamento1 = parseInt(document.getElementById("medicamento1").value);
    exmedicamento2 = parseInt(document.getElementById("medicamento2").value);

    if (exmedicamento1 > 0 && exmedicamento2 > 0) {
        document.getElementById("mostrarExistencias").textContent = 
            `Medicamento 1 tiene ${exmedicamento1} unidades. El medicamento 2 tiene ${exmedicamento2} unidades.`;
        document.getElementById("mensaje").textContent = "";
    } else {
        document.getElementById("mensaje").textContent = "Atención: Valores no permitidos (Valores Negativos o 0)";
    }
});


document.getElementById(`procesarPaciente`).addEventListener(`click`, () => {
let sistolica = parseFloat(document.getElementById(`sistolica`).value)
let diastolica = parseFloat(document.getElementById(`diastolica`).value)
let categoria = ``;
let Medicamentoentregado
let dosis = 0;
let mensaje = ``

if (sistolica < 68 && diastolica < 48) {
    categoria = `Hipotension`;
    Medicamentoentregado = 2;
    dosis = 6
}

else if (sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica < 66 ){
categoria = `Optima`}
else if (sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica < 92 ){
categoria = `Comun`}
else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124 ){}
categoria = `Pre-HTA`
Medicamentoentregado =1
dosis

})