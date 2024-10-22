function calcularNota(){

    const notaUno= parseFloat(document.getElementById("inputNotaUno").value);
    const notaDos = parseFloat(document.getElementById("inputNotaDos").value);
    const notaTres = parseFloat(document.getElementById("inputNotaTres").value);

    if(notaUno > 30)
        alert("La nota del primer parcial no puede ser mayor a 30");
    else if(notaDos > 30) 

    alert("La nota del segundo parcial no puede ser mayor a 30");
    
    else if(notaTres > 40)
        alert("La nota del tercer parcial no puede ser mayor a 40");

    const notaFinal = notaUno + notaDos + notaTres;
    document.getElementById("notaFinal").value = notaFinal;

    if(notaFinal == 0 || notaFinal <= 59){
        alert("Nota Final: " + notaFinal + " (REPROBADO)");
    }else if(notaFinal <= 60 || notaFinal <= 79){
        alert("Nota Final: " + notaFinal + " (APROBADO)");
    }
    else{
        alert("Nota Final: " + notaFinal + " (SOBRESALIENTE)");
    }

}

function limpiarFormulario(){
    notaUno = document.getElementById("inputNotaUno").value = "";
    notaDos = document.getElementById("inputNotaDos").value = "";
    notaTres = document.getElementById("inputNotaTres").value = "";
    notaFinal = document.getElementById("notaFinal").value = "";  
}

/*
Crear un formulario utilizando html y javascript en el que según la nota final debe mostrar un mensaje. El usuario debe ingresar 3 notas parciales, por cada parcial hay una nota máxima a ingresar:

Primer parcial: 30%
Segundo parcial: 30%
Tercer parcial: 40%
El mensaje según la suma de las notas de los 3 parciales, debe ser de la siguiente manera:

0% - 59%: Reprobado
60% - 79%: Bueno
80% - 89%: Muy Bueno
90% - 100%: Sobresaliente
*/ 