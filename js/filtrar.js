let input_filtrar=document.querySelector("#filtrar-por-nombre");

input_filtrar.addEventListener("input", function(event){

    let pacientes=document.querySelectorAll(".paciente");
    filtrar_por_nombre(pacientes,input_filtrar);
});

function filtrar_por_nombre(pacientes,input_filtrar)
{
    for(paciente of pacientes){

        paciente.classList.add("invisible");
        let nombre_paciente=paciente.querySelector(".info-nombre");

        if(String(nombre_paciente.textContent).toUpperCase().startsWith(String(input_filtrar.value).toUpperCase()))
        {
            paciente.classList.remove("invisible");
        }
    }
}