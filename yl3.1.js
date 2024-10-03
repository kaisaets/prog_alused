const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Mitu korda äratada?', aratamisKordus =>{
    let kord = 1
    while (kord <= aratamisKordus) {
    console.log('Tõuse ja sära')
    kord++
    }
     
    rl.close()
})