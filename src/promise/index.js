const somethingWillHappen = () => {
    
    return new Promise( (resolve, reject) => {
        // Si se cumple la condicion nos muestra este mensaje del resolve
        // De lo contrario mostraria el reject
        if (true) {
            resolve('Hey lo logramos');
        } else {
            reject('Upssss!');
        }
    });
    
}
somethingWillHappen()
    // usamos el then para que nos muestre el tipo de respuesta 
    // si se encuenta un error que este lo capture y nos lo muestre
    .then( response => console.log(response))
    .catch(err => console.error(err))



const somethingWillHappen2 = () => {

    return new Promise( (resolve, reject) => {
        if (true) {
            setTimeout( () => {
                resolve('TRUE')
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            // Nos muestra de mejor manera un ERROR!
            reject(error);
        }
    });
}
somethingWillHappen2()
    .then( response => console.log(response) )
    .catch( err => console.log(err) )

    
Promise.all( [somethingWillHappen(), somethingWillHappen2()] )
    .then( response => {
        console.log(`Array de resultados ${response}`);
    })
    .catch ( err => {
        console.error(err);
    })