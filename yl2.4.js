const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Kas soovite istekohta valida ("ise") või loosida ("loos")? ', istekoht => {
    if (istekoht == "ise"){
        rl.question('Kas soovite istuda akna ääres ("aken"), keskel ("keskmine") või vahekäigu ääres ("vahekäik")?' , valisIse => {
            if (valisIse == "aken"){
                console.log('Valisite aknakoha')
            } else if (valisIse == "keskmine"){
                console.log('Valisite keskmise koha')
            } else if (valisIse == "vahekäik"){
                console.log('Valisite koha vahekäigu ääres')
            }
            rl.close()
        })
    } else if (istekoht == "loos"){
        let valisLoos = Math.ceil(Math.random()*3)
        if (valisLoos == 1){
            console.log('Istekoht loositi. Aknakoht.')
        } else if (valisLoos == 2){
            console.log('Istekoht loositi. Keskmine koht.')
        } else if (valisLoos == 3){
            console.log('Istekoht loositi. Vahekäigu koht.')
        }
        rl.close()
    }
})