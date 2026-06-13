// Datos de los módulos
const modulesData = {
    RF01: {
        title: "RF01: Gestión de Menores de Edad",
        description: "Sistema de registro y documentación para menores que atraviesan la frontera.",
        features: [
            "Ingreso de datos personales de menores",
            "Carga de autorizaciones notariales digitales",
            "Validación de documentos de identidad",
            "Registro de antecedentes",
            "Generación de comprobante de tramitación"
        ],
        status: "Crítico",
        estimatedTime: "10 - 15 minutos"
    },
    RF02: {
        title: "RF02: Automatización de Admisión de Vehículos",
        description: "Control y registro de entrada/salida de vehículos con validación de plazos internacionales.",
        features: [
            "Ingreso de datos del vehículo (patente, marca, modelo)",
            "Validación de plazos 180/90 días (Acuerdo Chileno-Argentino)",
            "Consulta de base de datos Argentina",
            "Verificación de patentes encargadas y multas",
            "Generación de formulario PDF (2 copias)",
            "Registro de historial entrada/salida"
        ],
        status: "Alto",
        estimatedTime: "5 - 10 minutos"
    },
    RF03: {
        title: "RF03: Declaración Jurada Digital SAG",
        description: "Formulario electrónico para declaración de productos de riesgo sanitario.",
        features: [
            "Declaración de productos animales/vegetales",
            "Verificación de certificados sanitarios oficiales",
            "Validación de productos restringidos",
            "Adjuntar documentación digital",
            "Consulta de lista de prohibidos SAG",
            "Generación de folio de declaración"
        ],
        status: "Alto",
        estimatedTime: "8 - 12 minutos"
    },
    RF04: {
        title: "RF04: Interoperabilidad Internacional",
        description: "Validación automática con sistemas de la Aduana Argentina.",
        features: [
            "Conexión segura VPN con Aduana Argentina",
            "Validación automática de antecedentes",
            "Sincronización de bases de datos",
            "Alertas en tiempo real",
            "Modo offline ante caídas de conexión",
            "Registro de auditoría de integraciones"
        ],
        status: "Crítico",
        estimatedTime: "< 2 segundos"
    },
    RF05: {
        title: "RF05: Control de Procesos PDI y SAG",
        description: "Registro y cierre del flujo de revisión de pasajeros.",
        features: [
            "Registro de control migratorio",
            "Detección de mercancía ilícita",
            "Clasificación de contrabando/tráfico",
            "Cierre de flujo de revisión",
            "Generación de reporte de incidentes",
            "Notificación a organismos competentes"
        ],
        status: "Alto",
        estimatedTime: "Variable según revisión"
    },
    RF06: {
        title: "RF06: Generación de Informes Estadísticos",
        description: "Exportación de reportes en múltiples formatos.",
        features: [
            "Generación de informes en PDF",
            "Exportación a Excel con gráficos",
            "Estadísticas por período",
            "Filtrado por tipo de trámite",
            "Datos de flujo de pasajeros y vehículos",
            "Reportes de incidentes y anomalías"
        ],
        status: "Medio",
        estimatedTime: "1 - 5 minutos"
    },
    RF07: {
        title: "RF07: Gestión de Cuentas de Usuario",
        description: "Control de acceso mediante roles y perfiles especializados.",
        features: [
            "Autenticación con doble factor (2FA)",
            "Roles: Turista, Aduanero, PDI, SAG",
            "Gestión de permisos granulares",
            "Auditoría de acceso y cambios",
            "Recuperación de contraseña segura",
            "Sesiones con timeout automático"
        ],
        status: "Alto",
        estimatedTime: "Configuración inicial"
    },
    RF08: {
        title: "RF08: Notificación Automática de Trámites",
        description: "Alertas por correo electrónico de trámites pendientes.",
        features: [
            "Notificación de trámite en proceso",
            "Alertas de documentación faltante",
            "Confirmación de aprobación/rechazo",
            "Recordatorios de plazos vencidos",
            "Integración con servidor SMTP",
            "Personalización de preferencias de contacto"
        ],
        status: "Medio",
        estimatedTime: "Inmediata"
    },
    RF09: {
        title: "RF09: Validación de Patentes y Multas",
        description: "Consulta de encargos por robo y prohibiciones legales.",
        features: [
            "Consulta de patentes encargadas por robo",
            "Verificación de prohibiciones legales",
            "Consulta de multas pendientes",
            "Integración con Registro Civil",
            "Bloqueo automático de salida si corresponde",
            "Registro de intentos de salida irregular"
        ],
        status: "Alto",
        estimatedTime: "1 - 3 segundos"
    },
    RF10: {
        title: "RF10: Módulo Chatbot FAQ",
        description: "Sistema interactivo de ayuda y preguntas frecuentes.",
        features: [
            "Preguntas frecuentes categorizadas",
            "Búsqueda por palabra clave",
            "Respuestas automáticas",
            "Escalación a operador humano",
            "Disponible 24/7",
            "Soporte en español"
        ],
        status: "Bajo",
        estimatedTime: "Inmediato"
    }
};

// Toggle Modal de Módulo
function showModal(moduleKey) {
    const modal = document.getElementById('moduleModal');
    const data = modulesData[moduleKey];
    const modalBody = document.getElementById('modalBody');

    let featuresHTML = data.features.map(feature => `<li>${feature}</li>`).join('');

    modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p style="color: #666; margin-bottom: 1rem;">${data.description}</p>
        <p><strong>Estado:</strong> <span style="background-color: ${getStatusColor(data.status)}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.85rem;">${data.status}</span></p>
        <p><strong>Tiempo estimado:</strong> ${data.estimatedTime}</p>
        <h3 style="margin-top: 1.5rem; color: #1e3c72; margin-bottom: 1rem;">Características principales:</h3>
        <ul style="margin-left: 1.5rem; line-height: 2;">
            ${featuresHTML}
        </ul>
        <button class="cta-btn" style="width: 100%; margin-top: 1.5rem;" onclick="closeModal()">Cerrar</button>
    `;

    modal.style.display = 'block';
}

function getStatusColor(status) {
    switch(status) {
        case 'Crítico':
            return '#ff6b6b';
        case 'Alto':
            return '#ffa502';
        case 'Medio':
            return '#667eea';
        case 'Bajo':
            return '#51cf66';
        default:
            return '#999';
    }
}

function closeModal() {
    const modal = document.getElementById('moduleModal');
    modal.style.display = 'none';
}

// Toggle FAQ
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-${index}`);
    const question = answer.previousElementSibling;
    const icon = question.querySelector('.faq-icon');

    // Cerrar otras respuestas abiertas
    document.querySelectorAll('.faq-answer.active').forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.faq-icon').classList.remove('active');
        }
    });

    // Toggle actual
    answer.classList.toggle('active');
    icon.classList.toggle('active');
}

// Toggle Login Modal
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    const rut = document.getElementById('rut').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Datos simulados (mock data)
    if (rut && password && role) {
        alert(`Ingreso exitoso\n\nRUT: ${rut}\nRol: ${role}\n\nNota: Este es un prototipo funcional. En producción se conectaría con el servidor de autenticación.`);
        toggleLoginModal();
        document.querySelector('form').reset();
    } else {
        alert('Por favor complete todos los campos');
    }
}

// Scroll to modules
function scrollToModules() {
    document.getElementById('modulos').scrollIntoView({ behavior: 'smooth' });
}

// Cerrar modal al hacer click fuera de él
window.onclick = function(event) {
    const moduleModal = document.getElementById('moduleModal');
    const loginModal = document.getElementById('loginModal');

    if (event.target === moduleModal) {
        moduleModal.style.display = 'none';
    }
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Aduanas System Prototipo v1.0 cargado exitosamente');
    console.log('✓ 10 módulos RF disponibles');
    console.log('✓ Sistema responsive activado');
    console.log('✓ Navegación interactiva lista');
});
