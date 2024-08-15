
//share
const a="shaurya";
const b="atharva";
//local
const secret="SUPER SECRET";


//modules will help you acess code in different files
//modules ->will only share minimal

//every file is module ,it uses commonjs by default
// console.log(module);

//{
//     id: '.',
//     path: 'c:\\Users\\DELL\\Downloads\\node_js_tut',
//     exports: {},
//     filename: 'c:\\Users\\DELL\\Downloads\\node_js_tut\\learning_modules.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'c:\\Users\\DELL\\Downloads\\node_js_tut\\node_modules',
//       'c:\\Users\\DELL\\Downloads\\node_modules',
//       'c:\\Users\\DELL\\node_modules',
//       'c:\\Users\\node_modules',
//       'c:\\node_modules'
//     ]
//   }

//exports are empty
//modeule is an object
module.exports={a,b}; 
console.log(module);