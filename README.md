 # Pregunta 1 
 
 Codigo original 
 
 ```javascript
function validateString(str) {
	if (!str.toLowerCase().indexOf('superman')) {
	throw new Error('String does not contain superman');
	}    
}
```
 El codigo para hacer el string sensible de mayusculas y minusculas funciona bien, el codigo presentado
 entra en el error porque si tenemos la palabra superman en la primera posicion el resultado arrojado es 0  y el (!0) es true
 y por ende entra en la condicion.
 
 `Esta es la solucion de este problema` 

```javascript	
function validateString(str) {
  if ( str.toLowerCase().indexOf("superman") === -1  ){
    throw new Error('String does not contain superman');
  }    
}
```


# Pregunta 2

lo primero que hace esta funcion es recorrer el array y compararando en cada posicion que el numero ingresado sea 
igual al numero que esta en la posicion del array una vez encontrado retorna un true si no retorna false. 

```javascript
function search(array, num) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === num) return true;
  }
  return false;
}
```


# Pregunta 3

```javascript
function myFunction(value) {
  var str = value.toString();
  var char = "-";
  var newchar = "";
  str = str
    .split("(")
    .join(newchar)
    .split(")")
    .join(newchar)
    .split("-")
    .join(newchar);

  var res =
    str.substring(0, 3) +
    char +
    str.substring(3, 6) +
    char +
    str.substring(6, 10);

  return res;
}
```

# pregunta 4
```javascript
function fizzBuzz( start= 1, stop = 3)
{
    let result = '';
    
    if (stop < start || start < 0 || stop < 0) {
        throw new Error('Invalid arguments');
    }
    
    for (let i = start; i <= stop; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
            continue;
        }
        
        if (i % 3 === 0) {
            result += 'Fizz';
            continue;
        }
        
        if (i % 5 === 0) {
            result += 'Buzz';
            continue;
        }
        console.log(result)
        result += i;
    }
    
    return result;
}

```
Se le realizaron 2 pruebas unitarias para verificar que el texto retornado fuera el deseado y 
verificando que no entrara en el error.

```javascript
describe("test function", () => {
  it("verify throw error", () => {
    expect(fizzBuzz).to.not.throw();
  });

  it("verify string result", () => {
    expect(fizzBuzz()).to.equal("12Fizz");
  });
});

```
# Pregunta 5


```javascript
const files = [
  "/src/common/api.js",
  "/src/common/preferences.js",
  "/src/styles/main.css",
  "/src/styles/base/_base.scss",
  "/src/assets/apple-touch-icon-57.png"
];

const exclude = ["/src/styles/", "/src/assets/apple-touch-icon-57.png"];

function myFunction() {
  for (var i = 0; i < exclude.length; i++) {
    var choice = exclude[i].trim();
    for (var j = 0; j < files.length; j++) {
      if (files[j].trim() === choice) {
        files.splice(j, 1);
        j--;
      }
    }
  }

  for (var i = 0; i < exclude.length; i++) {
    var choice = exclude[i].trim();
    for (var i = 0; i < files.length; i++) {
      var value = files[i].trim();
      var cut = value.substring(0, choice.length);
      if (cut === choice) {
        files.splice(i, 1);
        i--;
      }
    }
    return files;
  }
}
```

# Pregunta 6
  
```javascript

function stringToColour(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
  
```
  
# Pregunta 7

```javascript

const nodes = document.querySelectorAll('button');
for (let i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log(`You clicked button #${i}`);
   });
}

```

Si se presiona el botton numero 1  el resultado seria 0 si se presiona el boton numero 4 el resultado seria 3 esto es porque el
querySelectorAll nos retorna un array que empieza por indice 0 y al hacer click en el boton 1 seria el primer indice del array 
y retorna 0 



# Pregunta 8

```javascript
function isIterable(x) {
	try {
	  var res = x.length ? true: false;
	} catch (err) {
	  return false;
	}
	  return res;
}
```
