/*
console.log('Hello kira');
var nombre = 'Kira';
console.log(nombre);
console.log(typeof(nombre));

var edad = 6;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1000.000;
console.log(sueldo);
console.log(typeof(sueldo));

var tienehambre = false;
console.log(tienehambre);
console.log(typeof(tienehambre));
*/

/*
*Operadores Matematicos


var edadKira, edadLeidy, diferenciaEdad;
var suma, yKira, yLeidy, yActual;

edadKira = 6;
edadLeidy = 23;
yActual = 2020;

suma = edadKira + edadLeidy;
console.log('La suma de edad es: ',suma);

diferenciaEdad = edadLeidy - edadKira;
console.log('La dferencia de edad es', diferenciaEdad);

ykira = yActual - edadKira;
console.log('Año en que nacio Kira: ', ykira);

yLeidy = yActual - edadLeidy;
console.log('Año en que nacio Leidy: ', yLeidy);
*/

/*
* Operadores Logicos, Unarios y de Asignación
*/
//Logicos <, >, <=, =>, ==, !

/*
var edadKira, edadLeidy, diferenciaEdad;

edadKira = 6;
edadLeidy = 23;

var mayor = !(edadLeidy == edadKira);
console.log(mayor);

//Unarios, ++Incremento, --Decremento
edadKira--;
console.log(edadKira);

//Asignación , +=. -=, *=, /=, %=.
var a = 20;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);

a+=b;
console.log(a);
a-=b;
console.log(a);
a*=b;
console.log(a);
var divi = 20/5;
console.log(divi);
*/

/***
 * Sentencias if... else
 */

 /*
 var nombre = 'kira';
 var esCasado = true;

 if (esCasado == true){
     console.log(nombre + ' es casado.');
 } else {
     console.log(nombre + 'es soltero');
 }
 */

 /**
  * Sentencias if anidadas
  */
/*
  var nombre = 'kira';
  var edad = 6;
  var edadPerruna = edad * 7
  if (edadPerruna < 12){
      console.log(nombre + ' Es un cachorro' );
  } else if ((edadPerruna >11) && (edadPerruna < 18)){
      console.log(nombre + ' Casi es un perro adulto');
  } else if (edadPerruna >17 && edadPerruna < 60){
      console.log(nombre + ' Es un perro adulto');
  }else if (edadPerruna > 60){
      console.log(nombre + ' Es un perro anciano');
  }else{
      console.log(' Has digitado mal');
  }
*/

/**
 * Sentencia Switch
 */

 var mes = 3;

 switch(mes){
     case 1:
         console.log('enero');
         break;
     case 2:
         console.log('febrero');
         break;
     case 3:
         console.log('Marzo');
         break;
     case 4:
         console.log('abril');
         break;
     default:
         console.log('ME no enontrado');

 }