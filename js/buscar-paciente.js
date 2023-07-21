let btn_buscar=document.querySelector("#btn-buscar");

btn_buscar.addEventListener("click",function(){
    let xhr= new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    
    xhr.addEventListener("load",function()
    {
        let errorAjax=document.querySelector("#error-ajax");
        if(xhr.status == 200)
        {
            errorAjax.classList.add("invisible");

            let pacientes=JSON.parse(xhr.responseText);
            for(paciente of pacientes)
                adicionar_paciente(paciente);
        }
        else
        {
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});