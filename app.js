const colors = require('colors/safe');
const argv = require('./config/yargs').argv;
const {crearArchivo, listarTabla} = require('./Multiplicar/index');

  let command = argv._[0];

switch (command) {
  case 'listar':
  // console.log(`El resultado de multiplicar la tabla del:`
  // ,colors.blue(argv.base),`hasta el:`, colors.blue(argv.limite))

  console.log('++++++++++++++++++++++++++'.rainbow);
  console.log(`Tabla del : `, colors.blue(argv.base),`hasta el:`, colors.blue(argv.limite));
  console.log('++++++++++++++++++++++++++'.rainbow);

  listarTabla(argv.base, argv.limite);

  break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado:`, colors.green(archivo)))
      .catch( e => console.log(e));
  break;

  default:
    console.log('Comando no reconocido'.rainbow)
  break;
}

// console.log(argv);
// let base = '1';
// let argv2 = process.argv;
// console.log('base', argv.base, 'Limite', argv.limite)
// let parametro= argv[2];
// let base = parametro.split('=')[1];
// console.log(base)


// _________________________

// console.log(process); Veo los procesos que corre node

/**
// Con este "Module puedo ver esto: "
console.log(module)
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\EGROJ\\Desktop\\CursoNode\\03-Bases-node\\app.js',
  loaded: false,
  children: [],
  paths:
  [ 'C:\\Users\\EGROJ\\Desktop\\CursoNode\\03-Bases-node\\node_modules',
    'C:\\Users\\EGROJ\\Desktop\\CursoNode\\node_modules',
    'C:\\Users\\EGROJ\\Desktop\\node_modules',
    'C:\\Users\\EGROJ\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules' ] }
 */

// .split separara los elementos para convertir de string a array
// console.log(process.argv)

/**
 * Los colores 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
 */