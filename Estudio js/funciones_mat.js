//funcion que redondea un numero
var precio = Math.round(399.58);
document.write(precio);

document.write('<br>');

//redondear sin importar decimal
var precio = Math.ceil(299.2);
document.write('precio redondeado: ', precio);
document.write('<br>');

//rendondeo hacia abajo
var precio = Math.floor(540.6);
document.write('precio redondeado: ', precio);
document.write('<br>');

//seno de angulo
var seno = Math.sin(45);
document.write('Seno de 45: ',seno);
document.write('<br>');

//logaritmo
var log = Math.log(5);
document.write('Logaritmo de 10:', log);
document.write('<br>');

//valor absoluto
var absoluto = Math.abs(-10);
document.write('Valor absoluto de -10: ', absoluto);
document.write('<br>');

//valor maximo de secuencia
var maximo = Math.max(10,500,30,1,-1000);
document.write('Mayor valor: ', maximo);
document.write('<br>');

//valor minimo
var minimo = Math.min(10,500,30,1,-1000);
document.write('Menor valor: ', minimo);
document.write('<br>');

//valor aleatorio
var aleatorio = Math.round(Math.random()*5);
document.write('Mayor random: ', aleatorio);
document.write('<br>');