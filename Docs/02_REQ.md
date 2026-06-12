# Requerimientos del Sistema (Aduanas System)

## Requerimientos Funcionales (RF)
* **RF01:** Gestión de Documentación de Menores (ingreso de datos y carga de autorizaciones notariales digitales).
* **RF02:** Automatización de Salida/Admisión de Vehículos (formulario "Acuerdo Chileno-Argentino" y validación de plazos de 180/90 días).
* **RF03:** Declaración Jurada Digital SAG/Aduanas (formulario electrónico para productos de riesgo).
* **RF04:** Interoperabilidad Internacional (validación automática con Aduana Argentina).
* **RF05:** Control de Procesos PDI y SAG (registro del flujo de revisión y cierre).
* **RF06:** Generación de Informes Estadísticos (exportables a PDF y Excel).
* **RF07:** Gestión de Cuentas de Usuario (acceso mediante roles y perfiles).
* **RF08:** Notificación Automática de Trámites Pendientes (vía correo electrónico).
* **RF09:** Validación de Patentes y Multas (consulta de encargos por robo o prohibiciones legales).
* **RF10:** Módulo de Ayuda y Preguntas Frecuentes (FAQ) (chatbot o sección interactiva).

## Requerimientos No Funcionales (RNF)
* **Rendimiento:** Procesamiento de validaciones en ≤ 2 segundos bajo condiciones normales. Soporte para flujo simultáneo de al menos 5.000 usuarios.
* **Disponibilidad:** Garantizar un uptime del 99.9% (24/7).
* **Seguridad:** Confidencialidad con cifrado de datos, autenticación de doble factor para funcionarios, e integridad mediante registros de auditoría (logs).
* **Fiabilidad:** Recuperación mediante "modo offline" temporal ante caídas de conexión con Argentina. Tolerancia a fallos en el ingreso de datos.
* **Portabilidad y Usabilidad:** Acceso multiplataforma (web responsive) con alta facilidad de uso para personas con poca experiencia digital.