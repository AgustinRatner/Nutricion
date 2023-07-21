let pacientes=document.querySelectorAll(".paciente");

for(let paciente of pacientes)
{
    let info_peso=paciente.querySelector(".info-peso");
    let info_altura=paciente.querySelector(".info-altura");
    let info_imc=paciente.querySelector(".imc");

    if(verificarDatos(info_peso.textContent, info_altura.textContent))
    {
        info_imc.textContent = calcularImc(info_peso.textContent, info_altura.textContent);
    }
    else
    { 
        paciente.classList.add("paciente-incorrecto");
        info_imc.textContent = "Valores incorrectos";
    }
    
}

function calcularImc (peso,altura){
    return (peso/Math.pow(altura,2)).toFixed(2);
}
function verificarDatos(peso,altura){ 
    return (verificarPeso(peso) && verificarAltura(altura));
}
function verificarPeso(peso){
    return (peso > 0 && peso < 700);
}
function verificarAltura(altura){
    return (altura > 0 && altura < 4);
}