let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){

    /*IMPORTANTE!! --> utilizamos "event.target" en lugar de "this", porque queremos trabajar con el elemento 
    a partir del cual se origino realmente el evento, no con aquel al que se adjunto o asocio el evento ("tabla"); 
    Lo que ocurre es una "propagación del evento", ya que no existe un HANDLER asociado al elemento que generó 
    el evento, y se trata de manejar si es posible, con los HANDLER de elementos de mayor nivel de los cuales 
    desciende el elemento
    */
    event.target.parentNode.classList.add("fadeOut");
    
    /*Esto lo hacemos para que recien cuando lo termine de opacar al elemento, lo elimine; Sino el efecto de 
    opacado no se llega a ver, porque lo elimina instantaneamente.*/
    setTimeout(function(){
        /*Aca le decimos que dentro de la tabla, el elemento que haya sido clickeado (en este caso un "td"), 
        que no lo elimine, sino que elimine a "parientNode" que sería aquel de un nivel superior 
        ("tr" --> paciente), que es lo que buscamos en fin. */
        event.target.parentNode.remove();
    }, 500);
});