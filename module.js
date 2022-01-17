//modules-only shares minimum
//common js, every file is module (by default)

const sayName = require('./nameFunc')
const names = require('./names')
const data = require('./alternative_use_module')
require('./mind_granade')

sayName(names.khalid)
sayName('new')
