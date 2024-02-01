<?php
include('conexion.php');
header('Content-Type: application/json');

if (isset($_GET['nombre']) && isset($_GET['contrasena'])) {
    $nombreUsuario = $_GET['nombre'];
    $contrasena = $_GET['contrasena'];

    $query = "SELECT * FROM usuarios WHERE nombreUsuario = '$nombreUsuario' AND contrasena = '$contrasena'";
    $resultado = $conexion->query($query);

    if (!$resultado) {
        die('Error en la consulta: ' . $conexion->error);
    }

    // Devuelve true si al menos una fila fue encontrada, de lo contrario false
    $usuarioExistente = $resultado->num_rows > 0;

    // Devuelve un valor booleano como respuesta
    echo json_encode($usuarioExistente);

    $resultado->close();
} else {
    // Devuelve false si no se proporciona el nombre de usuario
    echo json_encode(false);
}

$conexion->close();
?>