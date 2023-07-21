let boton_agregar=document.querySelector("#btn-agregar");

boton_agregar.addEventListener("click",function (event){
    event.preventDefault(); /*Prevenimos que se recargue la página, que es el comportamiento de la función por 
                            defecto del controlador del evento "click". Esto nos lleva a que podamos visualizar
                            lo que imprimimos en consola por ejemplo.*/
                            
    inicializar_errores();
    
    let form=document.querySelector("#form-agregar");
    let paciente = capturarDatosFormulario(form);
    let camposFaltantes=camposIncompletos(paciente);

    if(camposFaltantes.find( campo => campo == 1) != undefined)
    {
        informar_campos_incompletos(camposFaltantes);
    }
    else
    {
        adicionar_paciente(paciente);
    }
});

function inicializar_errores()
{
    let errores = document.querySelectorAll(".error");
    for(error of errores)
        error.textContent="";
}
function informar_campos_incompletos(camposFaltantes)
{
    let errores = document.querySelectorAll(".error");
    for(let i=0; i<camposFaltantes.length; i++)
    {
        if(camposFaltantes[i]==1)
        {
            errores[i].textContent="Campo incompleto";
        }   
    }
}
function adicionar_paciente(paciente)
{
    let tabla=document.querySelector("#tabla-pacientes");
    let pacienteTr = construirTr(paciente);
    tabla.appendChild(pacienteTr);
}
function capturarDatosFormulario(form)
{
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.porcentaje.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
function construirTr(paciente){

    let pacienteTr=document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-porcentaje"));
    

    if(verificarDatos(paciente.peso,paciente.altura))
    {
        pacienteTr.appendChild(construirTd(paciente.imc,"imc"));
    }
    else
    {
        informarValoresInvalidos(paciente.peso,paciente.altura);
        pacienteTr.classList.add("paciente-incorrecto");
        pacienteTr.appendChild(construirTd("Valores incorrectos","imc"));
    }

    return pacienteTr;
}
function construirTd(dato,clase){
    let td = document.createElement("td");
    td.classList.add(clase);
    td.textContent=dato;

    return td;
}
function informarValoresInvalidos(peso,altura){

    let errores = document.querySelectorAll(".error");

    if(!verificarPeso(peso) && !verificarAltura(altura))
    {
        errores[1].textContent="Peso(kg) > 0 y Peso(kg) < 700";
        errores[2].textContent="Altura(m) > 0 y Altura(m) < 4.00";
    }
    else
    {
        if(!verificarPeso(peso))
        {
            errores[1].textContent="Peso(kg) > 0 y Peso(kg) < 700";
        }  
        else
        {
            errores[2].textContent="Altura(m) > 0 y Altura(m) < 4.00";
        }      
    }
}
function camposIncompletos(paciente){

    let camposIncomp=[0,0,0,0];

    if(paciente.nombre=="")
        camposIncomp[0]=1
    if(paciente.peso=="")
        camposIncomp[1]=1;
    if(paciente.altura=="")
        camposIncomp[2]=1;
    if(paciente.gordura=="")
        camposIncomp[3]=1;

    return camposIncomp;
}