/**
 * Descripción
 * Conversión de unidades, de metros, yardas, pies y pulgadas.
 * Refactorizacion de codigo.
 * Si el usuario ingresa una coma, se cambia por un punto.
 * @method convertirUnidades de la función
 * @param {string} id -El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor- El valor de los inputs de metros, pies, yardas o pulgadas.
 * @return
 *  //TODO: deberia admitir numeros con coma
 */

function convertirUnidades(id, valor){
var metro, pulgada, pie, yarda;

if(valor.includes(",")){
    valor = valor.replace(",", ".");
}

    if(isNaN(valor)){
        alert("El valor ingresado no es correcto" +id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id==="metro"){
        metro = valor;
        pulgada = valor*39.3701;
        pie = valor*3.28084;
        yarda = valor*1.09361;
    }else if(id==="pulgada"){
        pulgada = valor;
        metro = valor*0.0254;
        pie = valor*0.0833333;
        yarda = valor*0.0277778;
    }else if(id==="pie"){
        pie =  valor;
        metro = valor*0.3048;
        pulgada = valor*12;
        yarda = valor*0.333333;

    }else if(id==="yarda"){
        yarda = valor;
        metro = valor*0.9143990856;
        pie = valor*2.999997;
        pulgada = valor*36;

    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id -El id de los inputs de grados o radianes.
 * @param {number} valor- El valor de los inputs de grados o radianes.
 */
function convertirGR(id, valor){
    let grad, rad;
    if(isNaN(valor)){
        document.getElementById("grados").value = " ";
        document.getElementById("radianes").value = " ";
        alert("El valor ingresado no es correcto");
    }else if(id==="grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    }
    else if(id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}

/**
 * Permite mostrar u ocultar cierta información que contiene el div
 * @method mostrar_ocultar
 * @param {string} valorMO
 */
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

/**
*Permite sumar dos numeros.
 * @method calcularSuma
 */
function calcularSuma(){
    let num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML= num1 + Number(num2);
}
/**
 *Permite restar dos numeros.
 * @method calcularResta
 */
function calcularResta(){
    let num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= num1 - Number(num2);
}
/**
 *Permite multiplicar dos numeros.
 * @method calcularMulti
 */
function calcularMulti(){
    let num1, num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= num1 * Number(num2);
}
/**
 *Permite dividir dos numeros.
 * @method calcularDiv
 */
function calcularDiv(){
    let num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= num1 / Number(num2);
}
