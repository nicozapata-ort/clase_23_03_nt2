

function addOne(num){
  //throw new Error('Este error es generado por nosotros')
  console.log('estoy en AddOne')
  return num + num
}

function getNum(){
  console.log('estoy en getNum')
  return addOne(10)
}

function c(){
  console.log('estoy en C')
  console.log(getNum() + getNum())
}


c()