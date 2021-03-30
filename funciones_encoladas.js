function imprimirUno(){
  console.log('uno')
}

function imprimirDos(){
  console.log('dos')
}

function imprimirTres(){
  setTimeout(function() {
    console.log('Aqui estoy dentro de tres')
  }, 5000)
  console.log('tres')
}


// Con este ejemplo se puede apreciar como trabaja la cola de funciones.
// No los imprime en el orden en que fueron invocados, sino que depende de las llamadas encoladas y su tiempo
setTimeout(imprimirUno, 3000)
setTimeout(imprimirDos)

// Las llamadas en ejecucion prevalecen sobre las llamadas encoladas.
imprimirTres()
imprimirUno()