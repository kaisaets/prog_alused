const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Mitu korda äratada?', aratamisKordus =>{
    for (let kord = 1; kord <= aratamisKordus; kord++){
        console.log('Tõuse ja sära')
    } 
    rl.close()
})