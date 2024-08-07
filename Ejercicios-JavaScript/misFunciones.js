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

function convertirUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("El valor ingresado no es correcto" + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (id === "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.0833333;
        yarda = valor * 0.0277778;
    } else if (id === "pie") {
        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;

    } else if (id === "yarda") {
        yarda = valor;
        metro = valor * 0.9143990856;
        pie = valor * 2.999997;
        pulgada = valor * 36;

    }
    document.lasUnidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id -El id de los inputs de grados o radianes.
 * @param {number} valor- El valor de los inputs de grados o radianes.
 */
function convertirGR(id, valor) {
    let grad, rad;
    if (isNaN(valor)) {
        document.getElementById("grados").value = " ";
        document.getElementById("radianes").value = " ";
        alert("El valor ingresado no es correcto");
    } else if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        grad = rad * 180 / Math.PI;
        document.getElementById("grados").value = grad;
    }
}

/**
 * Permite mostrar u ocultar cierta información que contiene el div
 * @method mostrar_ocultar
 * @param {string} valorMO
 */
function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

/**
 *Permite sumar dos numeros.
 * @method calcularSuma
 */
function calcularSuma() {
    let num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = num1 + Number(num2);
}

/**
 *Permite restar dos numeros.
 * @method calcularResta
 */
function calcularResta() {
    let num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = num1 - Number(num2);
}

/**
 *Permite multiplicar dos numeros.
 * @method calcularMulti
 */
function calcularMulti() {
    let num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = num1 * Number(num2);
}

/**
 *Permite dividir dos numeros.
 * @method calcularDiv
 */
function calcularDiv() {
    let num1, num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = num1 / Number(num2);
}

/**
 *Permite pasar valores de primeraweb a segundaweb. .
 * @method cargarWeb
 * @method cargarResultado
 */
function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado() {
    var urlComp, can, un;

    urlcomp = window.location.href.split("#")[5];
    console.log(urlComp);
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function guargarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById("distacia").value;
    unidad = document.getElementsByName("unidad")[0].value;
    localStorage.setItem("distancials", distancia);
    localStorage.setItem("unidadesls", unidad);
    window.open('2_web.html');
}

function cargarLocalStorage() {
    let cant, un;
    cant = localStorage.getItem("distacials");
    un = localStorage.getItem("unidadesls");

    document.getElementsByName("dist").value = cant + " " + un;

}

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0, yMax - 40 - margen, 40, 40);

    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementsById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera == true) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }

}

function limpiarCanvas() {
    var canvas = document.getElementsById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturamax = canvas.height;
    var anchomax = canvas.width;

    //Dibujar lineas horizontales
    ctx.beginPath();
    for (var i = 0; i < alturamax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchomax, i);
        ctx.strokeStyle = "#e3e0ec";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //Dibujar lineas verticales
    ctx.beginPath();
    for (var i = 0; i < anchomax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamax);
        ctx.strokeStyle = "D9D8D8";
        ctx.stroke();
        i = i + 20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturamax/2);
    ctx.lineTo(anchomax, alturamax/2);
    ctx.strokeStyle = "#d91c00";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchomax/2, 0);
    ctx.lineTo(anchomax/2, alturamax);
    ctx.strokeStyle = "#d91c00";
    ctx.stroke();
    ctx.closePath();
}