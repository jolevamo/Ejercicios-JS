/*
Calcular el salario de un empleado que gana 2.500.000
Descontando el 8% de salud y el 10% de pensión.


var salario = prompt ("Digita tu salario: ");
var salud = salario * 8/100;
var pension = salario * 10/100;
var Sueldo_A_Pagar = salario - salud - pension;

alert("Su sueldo es de: "+salario+
            "\n , descuento de salud: "+salud+
            "\n , descuento de pensión: "+pension+
            "\n , el sueldo a pagar es de: "+Sueldo_A_Pagar);

//Ejercicio 2:
var Base = prompt ("Digita la base: ");
var Altura = prompt ("Digita la altura: ");
var Area = (Base*Altura)/2;
alert("El área es: "+Area);
//Ejercicio 3:
var Num1 = prompt ("Digita el número 1: ");
var Num2 = prompt ("Digita el número 2: ");
var Sum = parseInt(Num1) + parseInt(Num2);
var Rest = Num1 - Num2;
var Mult = Num1 * Num2;
var Div = Num1 / Num2;
alert("La suma de los números es : "+Sum);
alert("La resta de los números es : "+Rest);
alert("La multiplicación de los números es : "+Mult);
alert("La división de los números es : "+Div);
//Ejercicio 4:
var ValorHoraOrd = prompt ("Ingrese el valor de la hora ordinaria: ");
var horaOrd = prompt ("Ingrese la cantidad de horas ordinarias: ");
var horaExt = prompt ("Ingrese la cantidad de horas extras: ");
var ValorHoraExt = ValorHoraOrd * 1.25;
var TotalHrOrd = ValorHoraOrd * horaOrd;
var TotalHrExt = ValorHoraExt * horaExt;
var Total = TotalHrOrd + TotalHrExt;
alert("El valor de las horas ordinarias es : "+TotalHrOrd);
alert("El valor de las horas extras es : "+TotalHrExt);
alert("El valor total devengado es : "+Total);
/*Ejercicio 5:
var CantProdcut = prompt("Ingrese la cantidad de productos: ");
var PrecProdcut = prompt("Ingrese el precio del producto: ");
var Subtotal = PrecProdcut * CantProdcut;
var IVA = Subtotal * 0.19;
var Total = parseInt(Subtotal) + parseInt(IVA);
alert("El valor del producto sin impuesto es: "+Subtotal);
alert("El valor del impuesto es: "+IVA);
alert("El total a pagar es: "+Total);
//Ejercicio 11
var edad = prompt ("Digite su edad: ");
if (edad<=18) {
    alert("Usted es menor de edad");
}
else if (edad<=28) {
        alert("Usted es adulto adolescente");
}
else if (edad<=49){
        alert("Usted es adulto");
}
else {
alert("Usted es adulto mayor");
}
//Ejercicio 11 con switch
var edad = prompt ("Digite su edad: ");
switch(true){
    case edad < 18: alert("Usted es menor de edad");
    break;
    case edad <= 28: alert("Usted es adulto adolescente");
    break;
    case edad <= 49: alert("Usted es adulto");
    break;
    default: alert("Usted es adulto mayor");
}
//Ejercicio 10
var  dia = prompt("Digite un número del 1 al 7: ");
switch (parseInt(dia)){
    case 1: prompt("Lúnes");
    break;
    case 2: prompt("Martes");
    break;
    case 3: prompt("Miércoles");
    break;
    case 4: prompt("Jueves");
    break;
    case 5: prompt("Viernes");
    break;
    case 6: prompt("Sábado");
    break;
    case 7: prompt("Domingo");
    break;
    default: prompt("Digite un número del 1 al 7");
    break;
}*/
(4>5) ? prompt("Verdadero") : prompt("Falso");








