# Casos de Uso - Aduanas System

| Caso de Uso | Nombre | Actor |
| :--- | :--- | :--- |
| **CU-RF01** | Registro de menores de edad | PDI / Turista |
| **CU-RF02** | Automatización Admisión / Salida Vehículos | Funcionario aduanas |
| **CU-RF03** | Despliegue formulario SAG | Turista |
| **CU-RF04** | Validación con aduana Argentina | Sistema |
| **CU-RF05** | Revisión de pasajeros | PDI / SAG |
| **CU-RF06** | Generación de informe | Administrador |
| **CU-RF07** | Gestión de cuentas de usuario | Administrador |
| **CU-RF08** | Notificación Trámites pendientes | Sistema |
| **CU-RF09** | Validación de patentes y multas | Funcionario Aduanas |
| **CU-RF10** | Chatbot | Turista / Funcionario |

## Detalles Destacados

### CU-RF01: Registro de menores de edad
* **Descripción:** Registrar menores (con o sin ambos padres) y documentación notarial digital.
* **Flujo Principal:** El funcionario/pasajero ingresa la información, selecciona la modalidad de viaje, carga la autorización notarial digital y el sistema realiza lectura OCR para verificar legitimidad.
* **Excepción Crítica:** Si existe una medida cautelar de "Arraigo Nacional", el sistema genera una alerta silenciosa al supervisor y bloquea automáticamente el flujo migratorio.

### CU-RF05: Registro y Cierre del Flujo de Revisión de Pasajeros
* **Descripción:** Registro y cierre del flujo de revisión en el Complejo Los Libertadores.
* **Flujo Principal:** Funcionario PDI escanea código y autoriza; Funcionario SAG verifica que PDI esté aprobado, registra revisión de equipaje y el sistema habilita la barrera de salida al estar ambos procesos en verde.