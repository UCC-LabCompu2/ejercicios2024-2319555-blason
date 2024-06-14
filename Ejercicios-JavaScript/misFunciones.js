/**
 * Descripción
 * permite convertir metro, pie, pulgada y yarda
 * @method convertirUnidades de la función
 * @param {string} id
 * @param {string} valor
 *  //TODO: deberia admitir numeros con coma
 */

function convertirUnidades(id, valor){

    if(isNaN(valor)){
        document.getElementById("metro").value = " ";
        document.getElementById("pulgada").value = " ";
        document.getElementById("pie").value = " ";
        document.getElementById("yarda").value = " ";
        alert("El valor ingresado no es correcto");
    }else if(id==="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09361;
    }else if(id==="pulgada"){
        document.getElementById("metro").value = valor*0.0254;
        document.getElementById("pie").value = valor*0.0833333;
        document.getElementById("yarda").value = valor*0.0277778;
    }else if(id==="pie"){
        document.getElementById("metro").value = valor*0.3048;
        document.getElementById("pulgada").value = valor*12;
        document.getElementById("yarda").value = valor*0.333333;

    }else if(id==="yarda"){
        document.getElementById("metro").value = valor*0.9143990856;
        document.getElementById("pie").value = valor*2.999997;
        document.getElementById("pulgada").value = valor*36;

    }

}

/**
 * Permite convertir grados a radianes y viceversa
 * method convertirGR
 * @param id
 */
function convertirGR(id){
    let grad, rad;
    //Agregar mensaje de error cuando se ingresa letras
    //TODO: deberia admitir numeros con coma

    if(id==="grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    }else if(id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}




/*
*Permite sumar, restar, dividir y multiplicar
*
 */