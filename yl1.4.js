const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}
)

rl.question('Sisestage oma nimi: ', nimi =>{    
    rl.question('Sisestage lubatud kiirus (km/h): ', lubatudKiirus =>{
        rl.question('Sisetage tegelik kiirus: ', tegelikKiirus =>{
        let trahv = (tegelikKiirus - lubatudKiirus) * 3
        trahv = Math.min(trahv, 190)
        console.log(`${nimi}, Teie trahv on ${trahv} eurot`)
        rl.close()
        })
    }) 
})