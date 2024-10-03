const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Mitu Pöialpoissi soovib õuna? (0-7)', soovijaid =>{
    let ounad = 14
    for(let pp = 1; pp <= soovijaid; pp++){
        let ounadPoisile = Math.ceil(Math.random() * 2)
        ounad = ounad - ounadPoisile
        console.log(ounadPoisile)
      
    } 
    console.log(`Lumivalgekesele jäi ${ounad} õuna`)
    rl.close()
} )