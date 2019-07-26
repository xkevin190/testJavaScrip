


// el codigo para hacer sencible de mayusculas y minusculas esta bien, el codigo presentado
// entra en el error porque si tenemos la palabra superman en la primera posicion el resultado arrojado es 0  y el (!0) es true
// y por ende entra en la condicion.


// esta es la solucion de este problema 

function validateString(str) {
    console.log(str.toLowerCase().indexOf("superman"));
    if (str.toLowerCase().indexOf("superman") === -1) {
      throw new Error("String does not contain superman");
    }
  }
  
  
  validateString("I love Superman");
  validateString("superman is awesome!");
  