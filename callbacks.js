
function saludaEnIngles(nombre, callback){
  return callback(`Hello ${nombre}, how are you?`)
}
function saluda(nombre, callback){
  //return console.log(`Hola ${nombre}, como estas?`)
  return callback(`Hola ${nombre}, como estas?`)
}

console.log(saluda)

let nombre = 'Matias'
saluda(nombre, console.warn)
saludaEnIngles(nombre, console.info)


// const miFuncion= function(arg){ console.log(arg)}



// saluda(nombre, miFuncion)
// saludaEnIngles(nombre, miFuncion) 

// saluda(nombre, console.warn)




function saludoTardio(param1, callback){
  setTimeout(()=>{
    callback("Hola mundo despues de 5 sg!", param1)
  }, 5000)
  
}


//saludoTardio(nombre, console.info)



nombre = 'Agus'
saluda(nombre, console.log)


function obTenerUsuarioDesdeBD(callback){

  // 
  setTimeout(() => {
    const dataUser = {
      firstName: 'Carlos',
      lastName: 'Gonzalez',
      edad: 40
    }

    // return dataUser
    callback(dataUser)
  }, 1000)
}


function saludoUsuario(user){
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}

function validarEdadUsuario(user){
  if(user.edad > 35){
    console.log(`Hola ${user.firstName} ${user.lastName}, esta apto para usar esta APP`)
  }else{
    console.log(`Hola ${user.firstName} ${user.lastName}, NO esta apto para usar esta APP`)
  }
}

//Mi llamada a la API
obTenerUsuarioDesdeBD(saludoUsuario)


obTenerUsuarioDesdeBD(validarEdadUsuario)
