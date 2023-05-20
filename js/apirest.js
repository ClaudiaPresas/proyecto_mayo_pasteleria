/*Los datos obtenidos de la api de randomuser serán mostrados 
en los placeholders del formulario de forma aleatoria*/

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');

const apiPlaceholders = async (nat) => {
    try {
        const connect = await fetch(`https://randomuser.me/api/?nat=${nat}`)
        const data = await connect.json()

        nombre.placeholder = data.results[0].name.first
        apellido.placeholder = data.results[0].name.last
        correo.placeholder = data.results[0].email
        telefono.placeholder = data.results[0].phone
    }

    catch (error) {
        console.log(error)
    }
}
apiPlaceholders('es')