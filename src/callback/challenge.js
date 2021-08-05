// Instalacion de depedencia XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// API a la cual le hare la peticion
let API            = 'https://rickandmortyapi.com/api/character/';

const fetchData = (urlAPI, callback) => {

    // XMLHttpRequest(): Referencia al objeto que necesito
    let xhttp = new XMLHttpRequest();

    // GET: Peticion que realizaremos
    // urlAPI: Direccion de nuestra API
    // true: Estamos diciendo que va ser de manera asincrona
    xhttp.open('GET', urlAPI, true);

    // OnReadyStateChange: Si este cambio sucede ejecutara una funcion que recibe un evento
    xhttp.onreadystatechange = (event) => {

        // readyState: Tiene 5 respuestas las cuales son:
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready
        if (xhttp.readyState === 4) {

            // status: Este nos trae diferentes estados
            // 200: Respuesa satisfactoria
            // 300: Redirecciones
            // 400: Errores de los clientes
            // 500: Errores del servidor
            if(xhttp.status === 200) {
                // El segundo parametro es un JSON que debemos parsear
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error(`Error ${urlAPI}`);
                return callback(error, null)
            }

        }

    }
    xhttp.send();

}  


// API: Variable que creamos la cual contiene la URL de la API
// error1: si encuentra algun error
// data1: Es el parseo del JSON que realizamos
fetchData(API, (error1, data1) => {
    
    if (error1) return console.error(error1);

    // data1: estamos en la posicion 0 y en el id del personaje
    fetchData(API + data1.results[0].id, (error2, data2) => {
        if(error2) return console.error(error2);

        // data2: posicion origin del personaje y url del origin
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);

            // data1: info->count de los personajes 
            console.log(data1.info.count);
            // data2: results->name nombre del personaje
            console.log(data2.name);
            // data3: dimesion o nombre de la dimension que pertenece el personaje
            console.log(data3.dimension);
        });

    })
})