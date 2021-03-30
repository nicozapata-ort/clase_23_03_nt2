console.log('2.- Funciones de alto orden')

const saludar = (function (){
  var mensaje = "hola equipo NT2";


  function saludando(){
    console.log(`Mensaje a mostrar: ${mensaje}`)
  }

  //console.log(mensaje)

  return saludando
})()


saludar()




const counter = (function(){
  let contador = 0

  return {
    showContador: function() { console.log(contador) },
    inc: function() { contador++ },
    dec: function() { contador-- },
    sum: (num) => { contador += num },
    show: () => saludar(),
    show2: function() { saludar() }

  }

})()

console.log(counter, typeof counter)

counter.showContador()
counter.inc()
counter.showContador()
counter.inc()
counter.inc()
counter.inc()
counter.inc()
counter.showContador()
counter.dec()
counter.showContador()
counter.sum(10)
counter.showContador()
counter.show()
counter.show2()