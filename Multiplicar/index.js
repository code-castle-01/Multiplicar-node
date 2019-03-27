// requiereds
const fs = require('fs');
const colors = require('colors');

// 1) module.exports.crearArchivo --> podria usarlo asi 
let crearArchivo = (base, limite=10) =>  {

  return new Promise((resolve, reject) => {
    
    if (!Number(base) || !Number(limite)){
      reject (`Imposible la generacion de la tabla
      Validar ya que existen valores "${base.red}" ó "${limite.red}" que no son correctos`);
      return;
    }
    
    let data = '';

    for (let i = 1; i <= limite; i++) {
    
      data += `${base} * ${i} = ${base * i}\n` ;
    
    }
    
    fs.writeFile(`Tablas/Tabla-${base}-al-${limite}.txt`, data, (err) => {
//      console.log(data); para ver la tabla generada
      if (err)
          reject (err)
        else
          resolve (`Tabla-${base}-al-${limite}.txt`);
    });    
  }); 
}

let listarTabla = (base, limite = 10) =>  {

  for (let i = 1; i <= limite; i++) {
    
    console.log(`${base} * ${i} = ${base * i}`);  
  }
}

module.exports = { crearArchivo, listarTabla };

/**
* 2) Otra ocpcion gracias a ES6 no hace falta repetir el mismo nombre
* module.exports = { crearArchivo: crearArchivo}
* 
* Mejor asi ya que se pueden agregar otras funcionciones....
  module.exports = { 
    crearArchivo
    1
    2
    3
    etc
  }
*
*/

