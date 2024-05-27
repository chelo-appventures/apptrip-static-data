const rutauno_rionegro_argentina = require("./rutauno_rionegro_argentina.json");
const rutadeestrellas_sanjuan_argentina = require("./rutadeestrellas_sanjuan_argentina.json");
const rutadelosseismiles_catamarca_argentina = require("./rutadelosseismiles_catamarca_argentina.json");
const siete_lagos_neuquen_argentina = require("./siete_lagos_neuquen_argentina.json");
const bandasurr23_rionegro_argentina = require("./bandasurr23_rionegro_argentina.json");

const all = [
  rutauno_rionegro_argentina,
  rutadeestrellas_sanjuan_argentina,
  rutadelosseismiles_catamarca_argentina,
  siete_lagos_neuquen_argentina,
  bandasurr23_rionegro_argentina,
];

const data = { all };
console.log(JSON.stringify(data));
