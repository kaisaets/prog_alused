const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Sisesta kirja suurus megabaitides: ', suurus => {
    rl.question('Sisesta kirja pealkiri. Kui pealkiri puudub, jata vali tyhjaks: ', pealkiri => {
        rl.question('Kas kirjaga on kaasas faile (jah voi ei): ', fail => {
            if ((suurus > 1 && fail == 'jah') || pealkiri === '' ){
                console.log('Kiri on spamm')
            } else {
                console.log('Kiri ei ole spamm')
            }
            rl.close()
        })
    
    }) 
}) 