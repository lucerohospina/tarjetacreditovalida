//  creamos función para validar si una tarjeta de crédito es válida
function isValidCard() {
  //  pedimos al usuario su número de tarjeta de crédito
  var cardNumber = prompt('escribe el numero de tu tarjeta');
  
  while (cardNumber === '') {
    //  condicionamos a que el asuario no deje el campo el blanco y le pedimos que escriba su número de tarjeta
    cardNumber = prompt('escribe un numero');
  }
  
  var arr = [];
  //  recorremos el número de tarjeta brindado por el usuario
  for (var i = 0; i < cardNumber.length; i++) {
    //  pasamos el string de números que hemos obtenido del usuario a un array
    parseInt(cardNumber[i].split(''));
    //  colocamos en el array vacío los números de las tarjetas que ya han sido separados en un array
    arr.push(parseInt(cardNumber[i].split('')));
  }
  //  ponemos los números de la tarjeta que estan en un array en orden inverso
  var reverseCardNumber = arr.reverse();
  
  for (var j = 0; j < reverseCardNumber.length; j++) {
    // buscamos los números en posiciones impares del arreglo
    // if(j%2!=0) --->otra forma de buscar impares
    if (j % 2 === 1) {
      // aquellos en posiciones impares los multiplicamos por 2
      var duplicate = reverseCardNumber[j] * 2;
      //  de cada uno de aquellos multiplicados cuyo producto sea de dos dígitos vamos a sumar sus dígitos y los vamos poniendo el array inverso en sus posiciones correspondientes
      reverseCardNumber[j] = parseInt(duplicate / 10) + duplicate % 10;
    }
  }
  //  creamos varianle sum donde vamos a sumar los elementos del array inverso
  var sum = 0;
  //  vamos a recorrer el array inverso para poder sumar sus elementos
  for (var k = 0; k < reverseCardNumber.length; k++) {
    //  sumamos cada uno de los elementos del array inverso
    sum += reverseCardNumber[k];
  }
  //  retornamos TARJETA VALIDA  si el residuo de 10 de la suma es igual a 0 y TARJETA INVALIDA si eso es falso.
  return sum % 10 === 0 ? alert('tarjeta valida') : alert('tarjeta invalida');
}
//  invocamos a la función para validar la tarjeta de crédito que brinde el usuario
isValidCard();
  