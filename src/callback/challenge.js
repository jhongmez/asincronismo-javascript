// Instalacion de depedencia XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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