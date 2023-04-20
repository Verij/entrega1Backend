import inquirer from 'inquirer';

export async function promptNuevosGastos(){
  return await inquirer.prompt(nuevaPrompt);
}


const nuevaPrompt = [
    {
    type: "input",
    name: "dia",
    message: "Dia xx/xx/xxxx",
  },
    {
    type: "input",
    name: "gasto",
    message: "Gasto cantidad",
  },
]