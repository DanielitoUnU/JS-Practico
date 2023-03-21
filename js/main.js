function saludo(){
    alert("Bienvenido sapo hpta")
}

function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");
}

function arribatop(){
var figura = document.querySelector("#figura");
figura.classList.toggle("top")
}

function izqleft(){
    var figura = document.querySelector("#figura");
figura.classList.toggle("izq")
    
}

function derright(){
    var figura = document.querySelector("#figura");
figura.classList.toggle("der")
    
}

function abajobottom(){
    var figura = document.querySelector("#figura");
figura.classList.toggle("abajo")
    
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonal")
}

function imggif(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("imggif")
    
}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo")
}

// algoritmos
function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Algoritmo que suma dos valores ingresados por el usuario");
    
    A = parseInt(prompt("ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));
    
    suma = A + B; 

    alert("El resultado de la suma es: " + suma);

}

function operacionesBasicas(){

    var numero1 =0;
    var numero2=0;
    var sum = 0;
    var res=0;
    var mult =0;
    var div =0;

    alert("Vamos a hacer operaciones básicas");

    numero1 = parseInt(prompt("Ingrese el número"));
    numero2 = parseInt(prompt("Ingrese el número"));

    sum = numero1 + numero2;
    res = numero1 - numero2;
    mult = numero1 * numero2;
    div= numero1 / numero2;

    alert(`los resultados son: \n suma: ${sum}\n resta: ${res}\n multiplicacion: ${mult}\n división: ${div}`)

    
}

function promedio(){

    var nota1 =0;
    var nota2 =0;
    var nota3 = 0;
    var nota4 =0;
    var nota5 =0;
    var nota6 =0;
    var nota7 =0;

    operacion =0;

    alert("Vamos a sacar el promedio de 7 notas");

    nota1 = parseInt(prompt("Ingrese el número"));
    nota2 = parseInt(prompt("Ingrese el número"));
    nota3 = parseInt(prompt("Ingrese el número"));
    nota4 = parseInt(prompt("Ingrese el número"));
    nota5 = parseInt(prompt("Ingrese el número"));
    nota6 = parseInt(prompt("Ingrese el número"));
    nota7 = parseInt(prompt("Ingrese el número"));

    operacion = (nota1+nota2+nota3+nota4+nota5+nota6+nota7) / 7;

    if (operacion >= 6.2){
        alert("El estudiante pasó la materia con: "+operacion);
    }
    else{alert("El estudiante perdió la materia con: "+operacion);}

    
}

function AreaTriangulo(){

    var base =0;
    var altura =0;
    resultado =0;
    alert("Vamos el area de un triangulo");

    base = parseInt(prompt("Ingrese la base del triangulo"));
    altura = parseInt(prompt("Ingrese la altura del triángulo"));

    resultado =(base*altura)/2;

    alert("la base es: " + base + "\n La altura es: "+altura+"\n El area es: "+resultado);
    
}

function inversion(){

    var capital =0;
    var anos=0;
    var anos2 =0;
    var porcen=0;
    var resultado =0;

    alert("Inversión a criptomoneda");

        capital = parseInt(prompt("Ingrese el capital que desea invvertir"));
        anos = parseInt(prompt("Ingrese cuantos años desea invertir el capital"));

        porcen= (capital * 1.7) /100;
    anos2 = anos *12

    resultado = porcen*anos2;

    alert("El capital es de: "+capital+"\n Los años de inversión son: "+anos+"\n La ganancia por mes es: "+porcen+"\n la ganancia por años es: "+resultado);


 
}

function descuento(){


    var pago=4500;
    var kilos=0;
    var total=0;
    var suma=0;
    var descuento=0;

    alert("Fruteria | descuento");

    kilos = parseInt(prompt("Ingrese el kilo que desea llevar"));

    if (kilos <= 2) {
        suma= (pago * kilos);
        descuento = 0;
        total= suma - descuento;
        alert("El descuento es de 0% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 3) && (kilos <= 5)){
        suma= (pago * kilos);
        descuento = (suma *10)/100;
        total= suma - descuento;
        alert("El descuento es de 10% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    } if ((kilos >= 6) && (kilos <= 10)){
        suma= (pago * kilos);
        descuento = (suma *15)/100;
        total= suma - descuento;
        alert("El descuento es de 15% \n El total es: " + total +"\n Su descuento fue de: "+ descuento);


    }if (kilos > 10){
        descuento= ((pago * kilos) * 20)/100;
        suma= (pago * kilos);
        descuento = (suma *20)/100;
        total= suma - descuento;
        alert("El descuento es de 20% \n El total es: " + total +" \n Su descuento fue de: " + descuento);
    }


}
