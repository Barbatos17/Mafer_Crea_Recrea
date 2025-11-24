document.addEventListener('DOMContentLoaded', function() {

    // 1. SELECCIONAR ELEMENTOS
    const form = document.getElementById('contactForm');
    const nombresInput = document.getElementById('nombres');
    const correoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const mensajeInput = document.getElementById('mensaje');
    const decoracionSelect = document.getElementById('decoracion');

    // Función para mostrar error
    const mostrarError = (input, mensaje) => {
        // Subimos al padre (.input-group) para buscar el small de error
        const formGroup = input.parentElement; 
        const errorDisplay = formGroup.querySelector('.error-text');
        
        errorDisplay.innerText = mensaje;
        input.classList.add('error');
        input.classList.remove('success');
    };

    // Función para mostrar éxito
    const mostrarExito = (input) => {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-text');

        errorDisplay.innerText = '';
        input.classList.add('success');
        input.classList.remove('error');
    };

    // 2. LÓGICA DE VALIDACIÓN
    const validarCampos = () => {
        let esValido = true; 

        const nombresValor = nombresInput.value.trim();
        const correoValor = correoInput.value.trim();
        const telefonoValor = telefonoInput.value.trim();
        const mensajeValor = mensajeInput.value.trim();
        const decoracionValor = decoracionSelect.value;

        // Validar Nombres
        if (nombresValor === '') {
            mostrarError(nombresInput, 'El nombre es obligatorio.');
            esValido = false;
        } else {
            mostrarExito(nombresInput);
        }

        // Validar Correo
        if (correoValor === '') {
            mostrarError(correoInput, 'El correo electrónico es obligatorio.');
            esValido = false;
        } else if (!/^\S+@\S+\.\S+$/.test(correoValor)) {
            mostrarError(correoInput, 'Por favor, ingresa un correo válido.');
            esValido = false;
        } else {
            mostrarExito(correoInput);
        }

        // Validar Teléfono
        if (telefonoValor === '') {
            mostrarError(telefonoInput, 'El teléfono es obligatorio.');
            esValido = false;
        } else if (!/^\d{9}$/.test(telefonoValor)) {
            mostrarError(telefonoInput, 'Solo números (9 dígitos).');
            esValido = false;
        } else {
            mostrarExito(telefonoInput);
        }

        // Validar Mensaje
        if (mensajeValor === '') {
            mostrarError(mensajeInput, 'El mensaje no puede estar vacío.');
            esValido = false;
        } else if (mensajeValor.length < 10) {
            mostrarError(mensajeInput, 'El mensaje debe tener al menos 10 caracteres.');
            esValido = false;
        } else {
            mostrarExito(mensajeInput);
        }

        // Validar Selección
        if (decoracionValor === '') {
            mostrarError(decoracionSelect, 'Debes seleccionar un tipo de decoración.');
            esValido = false;
        } else {
            mostrarExito(decoracionSelect);
        }
        
        return esValido;
    };

    // 3. EVENTO SUBMIT
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const esFormularioValido = validarCampos();
        
        if (esFormularioValido) {
            alert('¡Formulario enviado con éxito!');
            form.reset();
            
            // Limpiar estilos verdes
            document.querySelectorAll('.formulario_input, select').forEach(input => {
                input.classList.remove('success');
            });
        } 
    });
});