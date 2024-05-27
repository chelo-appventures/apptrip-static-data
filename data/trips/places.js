const rutauno_rionegro_argentina = require("./rutauno_rionegro_argentina.json");
const rutadeestrellas_sanjuan_argentina = require("./rutadeestrellas_sanjuan_argentina.json");
const rutadelosseismiles_catamarca_argentina = require("./rutadelosseismiles_catamarca_argentina.json");
const siete_lagos_neuquen_argentina = require("./siete_lagos_neuquen_argentina.json");
const bandasurr23_rionegro_argentina = require("./bandasurr23_rionegro_argentina.json");

let names = [];
names = names.concat(rutauno_rionegro_argentina.places.map((p) => p.image));
names = names.concat(
  rutadeestrellas_sanjuan_argentina.places.map((p) => p.image),
);
names = names.concat(
  rutadelosseismiles_catamarca_argentina.places.map((p) => p.image),
);
names = names.concat(siete_lagos_neuquen_argentina.places.map((p) => p.image));
names = names.concat(bandasurr23_rionegro_argentina.places.map((p) => p.image));
const setnames = new Set(names);

console.log(setnames);
console.log(setnames.size, names.length);
