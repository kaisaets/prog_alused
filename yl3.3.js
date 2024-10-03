const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Mitu täringut on vaja?', vaja => {
    for(let vise = 1; vise <= vaja; vise++){
        console.log(Math.ceil(Math.random()*6))
    }

    rl.close()
})