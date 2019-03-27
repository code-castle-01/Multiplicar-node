const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

// Lineas de comando

const argv = require('yargs')
.command('listar', 'Imprime en consola la tabla de multiplicar', opts)

/** // Antes tenia el objeto dentro... para optimizarlo uso otro const de objeto
  base: {
  demand: true,
  alias: 'b'
},
limite: {
  alias: 'l',
  default: 10
}
 */
.command('crear', 'Genera una archivo con la tabla de multiplicar', opts)
.help()
.argv;

module.exports = { argv };
