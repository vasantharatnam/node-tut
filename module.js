// require - function to use modules (CommonJS)

// module - info about current module (file)
//CommonJS, every file is module by default
// Modules - Encapsulated Code (only share minimum)


const names  = require('./name');

const sayHI = require('./util');

const data = require('./alternative');

      require('./grenade');
// sayHI(names.john);
// sayHI(names.peter);
//  sayHI('susan');

// process - info about env where the program is being executed (node in this case)
