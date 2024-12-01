// Función para abrir WhatsApp con el mensaje predefinido
function consultarPorWhatsApp(vehiculo) {
    const telefonoConcesionaria = "5491123456789"; // Reemplazar con el número real
    const mensaje = `Hola, estoy interesado en el vehículo ${vehiculo}. ¿Está disponible?`;
    const url = `https://wa.me/${telefonoConcesionaria}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Manejador de formularios para empleados (agregar vehículos)
const adminForm = document.getElementById('admin-form');
adminForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    // Aquí puedes agregar la lógica para almacenar los datos
    alert(`Vehículo agregado: ${marca}`);
    // Luego podrías añadir el vehículo dinámicamente a la página o enviarlo a un servidor.
});

// Función para mostrar el formulario para empleados (puedes asociar un botón secreto)
function mostrarAdminForm() {
    document.getElementById('admin-section').style.display = 'block';
}
