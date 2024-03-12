function tossCoin() {
    return Math.random() > 0.5 ? "cara" : "cruz";
}

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let caraContador = 0;
        let intentos = 0;
        while(caraContador < 5) {
            intentos++;
            let result = tossCoin();
            console.log(`A salido ${result} (${intentos})`);
            if(result === "cara") {
                caraContador++;
            } else {
                caraContador = 0;
            }

            if (intentos == 100){
                return reject(`Ya usaste ${intentos} intentos de 100, no puedes seguir tirando.`)
            }
        }
        return resolve(`se tomaron ${intentos} intentos para que salga 5 cara`);
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "" );


