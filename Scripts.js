// 1. 
function ejercicio1() {
  let edad = prompt("Introduce tu edad:");
  if (edad >= 18) {
      alert("Ya puedes conducir.");
  } else {
      alert("No puedes conducir aún.");
  }
}

// 2. 
function ejercicio2() {
  let nota = prompt("Introduce tu nota:");
  nota = Number(nota);
  if (nota >= 0 && nota < 3) {
      alert("Muy deficiente");
  } else if (nota >= 3 && nota < 5) {
      alert("Insuficiente");
  } else if (nota >= 5 && nota < 6) {
      alert("Suficiente");
  } else if (nota >= 6 && nota < 7) {
      alert("Bien");
  } else if (nota >= 7 && nota < 9) {
      alert("Notable");
  } else if (nota >= 9 && nota <= 10) {
      alert("Sobresaliente");
  } else {
      alert("Nota inválida");
  }
}

// 3. 
function ejercicio3() {
  let resultado = "";
  while (true) {
      let cadena = prompt("Introduce una cadena de texto:");
      if (cadena === null) {
          break;
      }
      resultado += (resultado === "") ? cadena : "-" + cadena;
  }
  alert(resultado);
}

// 4.
function calcularLetraDNI() {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  while (true) {
      let numero = prompt("Introduce tu número de DNI (0-99999999):");
      if (numero === null) {
          break;
      }
      numero = Number(numero);
      if (!isNaN(numero) && numero >= 0 && numero <= 99999999) {
          let indice = numero % 23;
          let letra = letras.charAt(indice);
          alert(`La letra de tu DNI es: ${letra}`);
      } else {
          alert("Número inválido. Por favor, introduce un número entre 0 y 99999999.");
      }
  }
}

function ejercicio4() {
  calcularLetraDNI();
}
