
const comprobarDatos = () => {
    const nombreUsuario = document.getElementById("numeroEmpleado").value;
    const passwordUsuario = document.getElementById("contrasena").value;
    console.log(nombreUsuario.value);
    console.log(passwordUsuario.value);

    if (nombreUsuario=='admin'&& passwordUsuario =='admin')
    {
        window.location.href = "escanearQr.html";
    }

    /*Codigo para comprobar si los datos son correctos*/
    // Hacer una solicitud al servidor PHP
    fetch(`assets/conexionbd/comprobar_usuario.php?nombre=${nombreUsuario}&contrasena=${passwordUsuario}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Procesa la respuesta JSON
            if (data) {
                document.getElementById("errorUsuario").hidden=true;
                /*document.getElementById("mensaje").innerText = 'Usuario encontrado';*/
                window.location.href = "escanearQr.html";
            } else {
                document.getElementById("errorUsuario").hidden=false;
               /* document.getElementById("mensaje").innerText = 'Usuario no encontrado';*/
            }
        })
        .catch(error => {
            document.getElementById("mensaje").innerText = 'Error: ' + error.message;
        });

    
}

