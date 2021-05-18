function convertirRomanos(num) {
    num = Math.floor(num);
    let listaRomanos = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };
    let numeroma = Object.keys(listaRomanos); 
    let resultado = ""; 
    let listaDiez = [];
    for (let exponente = 0; exponente < 5; exponente++) {
      let pow = Math.pow(10, exponente);
      listaDiez.push(pow);
    }
    let transformar = num;
    while (transformar > 0) {
      for (let i = 0; i < numeroma.length; i++) {
        let numTrans = listaRomanos[numeroma[i]];
        let porcen = transformar % numTrans;
        let porcenAtras = numTrans % transformar;
        let dividir = transformar / numTrans;
        if (transformar - numTrans >= 0) {
          transformar -= numTrans;
          resultado += numeroma[i];
          break;
        }
        for (let j = (numeroma.length - 1); j > i; j--) {
          let primresult = numTrans;
          let segresult = listaRomanos[numeroma[j]];
          if (listaDiez.indexOf(segresult) === -1) {
            continue;
          }
                  if (segresult * 10 < primresult) {
            continue;
          }
          let resultadofin = primresult - segresult;
          if (transformar - resultadofin >= 0) {
            transformar -= resultadofin;
            resultado += numeroma[j] + numeroma[i];
            break;
          }
        }
        if (transformar === 0) {
          break;
        }
      }
    }
    console.log(resultado);
    return resultado;
  }
  

  let id_numeroIngresado = document.getElementById('numeroIngresado');
  let id_numeroRomano = document.getElementById('numeroRomano');


  function convertir(){
    id_numeroRomano.innerHTML = convertirRomanos(numeroIngresado.value);
  }
  