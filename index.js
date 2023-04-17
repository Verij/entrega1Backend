
import fs from "fs";
import { promptNuevosGastos } from './gastosPrompt.js';


const main = async () => {
  const nuevaDataGasto = await promptNuevosGastos();
  
console.log("nueva data a crear", nuevaDataGasto);

const currentGastos = await readFilePromise("archivoGastos");



currentGastos.push(nuevaDataGasto);
await writeFilePromise("archivoGastos", currentGastos);

//aca muestro los datos con los dias con el gasto total sumando todo
console.log("estos son los gastos", currentGastos);
const suma = currentGastos.reduce((acc, obj) => {return acc + Number(obj.gasto);
}, 0);
console.log("El gasto total es:", suma);
}
main();



/////////////////////////////////////

const readFilePromise = (file) => {
  return new Promise((resolve, reject) =>{
    fs.readFile(file + '.json', "utf8", (err, content) => {
      if(err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

const writeFilePromise = (file, content) => {
  return new Promise ((resolve, reject) =>{
    fs.writeFile(file + '.json', JSON.stringify(content), (err) =>{
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};