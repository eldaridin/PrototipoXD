# PrototipoXD — Aduanas System v1.0

## 🎯 Descripción General

**Aduanas System** es una plataforma web moderna y responsive desarrollada para automatizar y optimizar los procesos migratorios en el paso fronterizo **Los Libertadores**. El sistema integra 10 módulos funcionales que abordan desde la gestión de menores de edad, admisión de vehículos, hasta la interoperabilidad con organismos internacionales como la Aduana Argentina.

### Contexto del Problema

El paso fronterizo Los Libertadores enfrenta esperas de hasta **20 horas** debido a:
- Procesos manuales e ineficientes
- Infraestructura tecnológica sobrepasada
- Falta de automatización en trámites críticos
- Ausencia de interoperabilidad con sistemas internacionales

### Solución Propuesta

**Aduanas System** reduce significativamente los tiempos de tramitación mediante:
- ✅ Formularios web preventivos y digitales
- ✅ Automatización de validaciones (≤ 2 segundos)
- ✅ Integración segura con organismos chilenos (PDI, SAG) y Aduana Argentina
- ✅ Disponibilidad 24/7 con uptime garantizado del 99.9%
- ✅ Protección de datos sensibles con cifrado de extremo a extremo

---

## 📋 Módulos del Sistema (10 Requerimientos Funcionales)

### 🟥 Críticos (Prioridad Máxima)

| RF | Módulo | Descripción | Estado |
|---|---|---|---|
| **RF01** | **Menores de Edad** | Gestión de documentación y autorizaciones notariales digitales para menores que cruzan la frontera | [Explorar](#rf01) |
| **RF04** | **Interoperabilidad** | Validación automática con Aduana Argentina mediante APIs seguras | [Explorar](#rf04) |

### 🟠 Alto (Prioridad Alta)

| RF | Módulo | Descripción | Estado |
|---|---|---|---|
| **RF02** | **Admisión de Vehículos** | Automatización de entrada/salida con validación de plazos (180/90 días) según Acuerdo Chileno-Argentino | [Explorar](#rf02) |
| **RF03** | **Declaración SAG** | Formulario electrónico para productos de riesgo sanitario | [Explorar](#rf03) |
| **RF05** | **Control PDI/SAG** | Registro del flujo de revisión y cierre de procesos | [Explorar](#rf05) |
| **RF07** | **Gestión de Usuarios** | Control de acceso mediante roles y perfiles especializados | [Explorar](#rf07) |
| **RF09** | **Patentes y Multas** | Validación de encargos por robo y prohibiciones legales | [Explorar](#rf09) |

### 🟡 Medio (Prioridad Moderada)

| RF | Módulo | Descripción | Estado |
|---|---|---|---|
| **RF06** | **Reportes Estadísticos** | Generación de informes exportables a PDF y Excel | [Explorar](#rf06) |
| **RF08** | **Notificaciones** | Alertas automáticas de trámites pendientes vía correo | [Explorar](#rf08) |

### 🟢 Bajo (Prioridad Estándar)

| RF | Módulo | Descripción | Estado |
|---|---|---|---|
| **RF10** | **Chatbot FAQ** | Módulo de ayuda y preguntas frecuentes interactivo | [Explorar](#rf10) |

---

## 🏗️ Requerimientos No Funcionales (RNF)

| Atributo | Requisito | Implementación |
|---|---|---|
| **Rendimiento** | Procesamiento ≤ 2 segundos en validaciones (95% de casos) | Apache JMeter para pruebas de carga |
| **Escalabilidad** | Soporte de 5.000 usuarios simultáneos | Arquitectura de microservicios con Spring Cloud |
| **Disponibilidad** | Uptime 99.9% (máx. 43 min/mes) | Redundancia y clustering en cloud |
| **Seguridad** | 0 vulnerabilidades críticas OWASP Top 10 | Cifrado E2E, 2FA, JWT/RBAC |
| **Fiabilidad** | Modo offline en < 5 seg ante desconexión | Sistema de caché distribuido |
| **Portabilidad** | Navegadores modernos (Chrome 120+, Firefox 120+) | HTML5 responsive, Progressive Web App |
| **Usabilidad** | SUS Score ≥ 70 puntos | UX optimizada para usuarios sin experiencia digital |
| **Trazabilidad** | 100% de operaciones CRUD registradas | ELK Stack (Elasticsearch, Logstash, Kibana) |

---

## 🗂️ Estructura del Proyecto

```
PrototipoXD/
├── index.html                 # Página principal del prototipo
├── css/
│   └── styles.css            # Estilos CSS con diseño responsive
├── js/
│   └── script.js             # Lógica interactiva y navegación
├── Docs/                     # Documentación de arquitectura
│   ├── 01_CONTEXT.md         # Contexto y visión del sistema
│   ├── 02_REQ.md             # Requerimientos funcionales y no funcionales
│   ├── 02_CU_RF01_Menores.md # Casos de uso específicos
│   ├── 02_CU_RF02_Vehiculos.md
│   ├── 03_CU_RF03_SAG.md
│   ├── 04_CU_RF04_Interoperabilidad.md
│   ├── 05_CU_RF05_Revision.md
│   ├── 06_CU_RF06_Reportes.md
│   ├── 07_CU_RF07_Usuarios.md
│   ├── 08_CU_RF08_Notificaciones.md
│   ├── 09_CU_RF09_Patentes.md
│   ├── 10_CU_RF10_Chatbot.md
│   ├── 04_UML_DIAGRAMS.md    # Diagramas UML de componentes
│   ├── 11_CLASES_MS_Turista.md
│   ├── 14_CLASES_MS_SAG.md
│   ├── 15_CLASES_MS_PDI.md
│   ├── 05_TESTING.md         # Criterios de evaluación y testing
│   └── README.md             # Índice de documentación
├── AGENTS.md                 # Instrucciones para agentes de IA
├── README.md                 # Este archivo
└── .gitignore               # Archivos ignorados
```

---

## 🚀 Inicio Rápido

### Requisitos Previos

- Navegador moderno (Chrome 120+, Firefox 120+, Safari 15+, Edge 120+)
- No se requieren dependencias externas (prototipo HTML puro)

### Instalación y Ejecución

**Opción 1: Localmente (recomendado para desarrollo)**

```bash
# Clonar el repositorio
git clone https://github.com/eldaridin/PrototipoXD.git
cd PrototipoXD

# Abrir en navegador
# Método 1: Doble clic en index.html
# Método 2: Con Python 3
python -m http.server 8000

# Abrir en navegador
# http://localhost:8000
```

**Opción 2: GitHub Pages (producción)**

```
https://eldaridin.github.io/PrototipoXD/
```

---

## 🎮 Funcionalidades del Prototipo

### Interfaz Principal

- **Navegación fluida** entre secciones con scroll suave
- **Menú sticky** con acceso rápido a módulos y contacto
- **Botón de ingreso** con modal de autenticación interactivo
- **Diseño responsive** adaptado a desktop, tablet y móvil

### Módulos Interactivos

- **10 módulos clickeables** con detalles expandibles
- **Información detallada** de características y tiempos estimados
- **Código de colores** por prioridad (Crítico/Alto/Medio/Bajo)
- **Modales informativos** con descripción completa

### Sección FAQ

- **6 preguntas frecuentes** resueltas
- **Accordion interactivo** con expand/collapse
- **Búsqueda intuitiva** de respuestas comunes

### Sistema de Login (Mock Data)

**Credenciales de prueba:**
```
RUT: 12.345.678-K
Contraseña: cualquier contraseña
Roles disponibles:
  - Turista/Pasajero
  - Funcionario Aduanas
  - Oficial PDI
  - Oficial SAG
```

---

## 📊 Casos de Uso Principales

### RF01: Gestión de Menores de Edad

```
Actor Primario: Turista/Pasajero, Funcionario Aduanas
Precondición: Sistema operativo, usuario autenticado
Flujo principal:
  1. Ingresar datos personales del menor
  2. Cargar autorización notarial digitalizada
  3. Validar identidad y documentos
  4. Registrar antecedentes
  5. Generar comprobante de tramitación
Postcondición: Registro completado y notificación enviada
```

### RF02: Admisión de Vehículos

```
Actor Primario: Funcionario Aduanas, Turista
Precondición: Sistema operativo, BD sincronizada
Flujo principal:
  1. Ingresar patente y datos vehículo
  2. Seleccionar tipo (Entrada/Salida)
  3. Validar plazos (180/90 días)
  4. Consultar BD Argentina
  5. Verificar multas y encargos
  6. Generar PDF (2 copias)
  7. Registrar historial
Postcondición: Autorización de paso o bloqueo
```

### RF04: Interoperabilidad con Argentina

```
Actor Primario: Sistema SAG/PDI Argentina
Precondición: Conexión VPN estable, API disponible
Flujo principal:
  1. Enviar solicitud de validación
  2. Procesar en < 2 segundos
  3. Recibir respuesta de Argentina
  4. Actualizar estado en BD local
  5. Registrar log de operación
  6. Notificar resultado a funcionario
Postcondición: Sincronización completada
Manejo de excepciones: Activar modo offline si hay timeout
```

---

## 🔐 Seguridad

### Medidas Implementadas (Prototipo)

- ✅ **Autenticación de doble factor (2FA)** - Framework preparado
- ✅ **Control de acceso por roles (RBAC)** - 4 roles definidos
- ✅ **Cifrado de datos en tránsito** - HTTPS requerido en producción
- ✅ **Auditoría completa** - Logs de acceso y cambios
- ✅ **Protección de datos sensibles** - Mascarado de RUT/datos menores

### Variables de Entorno (Producción)

```env
# No incluir credenciales en código fuente
DATABASE_URL=your_database_url
ARGENTINA_API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
SMTP_PASSWORD=your_smtp_password
ENCRYPTION_KEY=your_encryption_key
```

---

## 🏛️ Arquitectura de Microservicios

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend PWA (index.html)                │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
                           ↓
┌─────────────────────────────────────────────────────────────┐
│              API Gateway (Spring Cloud Gateway)             │
│         JWT/RBAC Security Module (OAuth 2.0)               │
└─┬─────────┬──────────┬─────────┬──────────┬──────────┬─────┘
  │         │          │         │          │          │
  ↓         ↓          ↓         ↓          ↓          ↓
┌─────┐ ┌──────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌─────────┐
│ MS  │ │ MS   │ │ MS     │ │ MS     │ │ MS     │ │ MS      │
│Turi-│ │Vehi- │ │Menores │ │SAG     │ │PDI     │ │Reportes │
│sta  │ │culo  │ │        │ │        │ │        │ │         │
└─────┘ └──────┘ └────────┘ └────────┘ └────────┘ └─────────┘
  │        │        │          │          │          │
  ↓        ↓        ↓          ↓          ↓          ↓
 BD_T    BD_V     BD_M        BD_S       BD_P       BD_R
     
External APIs:
├── Aduana Argentina (VPN/REST)
├── PDI Migraciones (REST)
├── SAG Externo (REST)
├── Registro Civil (REST)
└── SMTP Email Service
```

---

## 📈 Métricas de Calidad

| Métrica | Objetivo | Herramienta | Estado |
|---------|----------|-------------|--------|
| Cobertura de tests | ≥ 80% | JUnit 5 + JaCoCo | 🔄 Pendiente |
| Vulnerabilidades | 0 críticas | OWASP ZAP | 🔄 Pendiente |
| Performance | ≤ 2 seg | Apache JMeter | ✅ Prototipo OK |
| Disponibilidad | 99.9% | AWS CloudWatch | 🔄 Producción |
| Usabilidad SUS | ≥ 70 pts | User Testing | 🔄 En pruebas |
| Portabilidad | 4+ navegadores | Selenium | ✅ Verificado |

---

## 📚 Documentación Completa

Consulta la carpeta `/Docs` para acceder a:

- **01_CONTEXT.md** - Contexto y visión del proyecto
- **02_REQ.md** - Requerimientos funcionales y no funcionales
- **04_UML_DIAGRAMS.md** - Arquitectura de componentes y microservicios
- **05_TESTING.md** - Plan de testing y criterios de evaluación
- **Casos de Uso RF01-RF10** - Diagramas y flujos específicos
- **Diagramas de Clases MS** - Modelos de datos por microservicio

---

## 🔄 Flujo de Desarrollo (Scrum)

```
Sprint Duration: 15 días

├── Sprint Planning
│   └── Definir backlog de sprint
│
├── Daily Standup (15 min)
│   ├── ¿Qué hice ayer?
│   ├── ¿Qué haré hoy?
│   └── ¿Qué obstáculos tengo?
│
├── Desarrollo
│   ├── Rama: feature/<ticket>-descripcion
│   ├── Commits: feat: descripción breve
│   └── Pull Request → Review → Merge
│
├── Sprint Review
│   └── Demostración de incremento
│
└── Sprint Retrospective
    └── Mejoras continuas
```

---

## 👥 Equipo

| Rol | Miembro | Responsabilidades |
|-----|---------|-------------------|
| **Scrum Master** | Dario Rojas | Facilitador, planificación, impedimentos |
| **Development Team** | Nicolas Herrera | Desarrollo, testing, documentación |

**Institución:** DuocUC - Escuela de Informática y Telecomunicaciones  
**Asignatura:** Ingeniería de Software  
**Proyecto:** Aduanas System — Modernización de la Frontera

---

## 🎯 Criterios de Aceptación (Definition of Done)

Para cada feature entregada:

- ✅ Código compilable o prototipo navegable localmente
- ✅ Tests básicos ejecutados o comprobación manual documentada
- ✅ Documentación actualizada en `/Docs`
- ✅ Pull Request revisado y aprobado (mín. 1 revisor)
- ✅ Sin conflictos abiertos
- ✅ Cumple con checklist de prototipado (si aplica)

---

## 📝 Lineamientos de Contribución

### Rama por Feature

```bash
# Crear rama con convención
git checkout -b feature/RF01-gestion-menores

# Realizar commits con prefijos tipo
git commit -m "feat: Agregar validación de identidad en RF01"
git commit -m "fix: Corregir error en carga de documentos"
git commit -m "docs: Actualizar README con instrucciones"

# Push y Pull Request
git push origin feature/RF01-gestion-menores
```

### Estructura de Commit

```
<tipo>(<ticket>): <descripción breve>

<descripción detallada si aplica>

Closes #<issue-number> (si aplica)
```

**Tipos permitidos:**
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Cambios en documentación
- `style` - Formato, sin cambio de lógica
- `refactor` - Refactorización de código
- `test` - Agregar o mejorar tests
- `chore` - Cambios en configuración

---

## 🚨 Troubleshooting

### Problema: El prototipo no carga

**Solución:**
```bash
# Verificar que estés en la rama correcta
git branch

# Cambiar a rama feature
git checkout feature/prototype-implementation

# Recargar en navegador (Ctrl+Shift+R)
```

### Problema: Estilos CSS no aplican

**Solución:**
```bash
# Verificar que css/styles.css existe
ls -la css/

# Limpiar caché del navegador
# Ctrl+Shift+Delete (Windows/Linux)
# Cmd+Shift+Delete (Mac)
```

### Problema: Scripts no responden

**Solución:**
```bash
# Abrir consola de navegador (F12)
# Revisar si hay errores en JavaScript
# Verificar que js/script.js se cargó correctamente
```

---

## 📞 Contacto y Soporte

**Email:** [info@aduanassystem.cl](mailto:info@aduanassystem.cl)  
**Repositorio:** [github.com/eldaridin/PrototipoXD](https://github.com/eldaridin/PrototipoXD)  
**Issues:** [Reportar problemas](https://github.com/eldaridin/PrototipoXD/issues)

---

## 📄 Licencia

Este proyecto es desarrollado como parte del curso de Ingeniería de Software en DuocUC y está protegido bajo licencia educativa. Para uso comercial, contacte al equipo.

---

## ✅ Checklist del Prototipo

- ✅ Estructura HTML válida y semántica
- ✅ Estilos CSS para navegación y legibilidad
- ✅ Interacciones básicas (enlaces, navegación, botones)
- ✅ Modal informativo de módulos
- ✅ Sistema de login con mock data
- ✅ FAQ interactivo con accordion
- ✅ Diseño responsive (desktop, tablet, móvil)
- ✅ Navegación fluida entre secciones
- ✅ Documentación completa actualizada
- ✅ README principal completado

---

## 🔮 Roadmap Futuro

| Fase | Objetivos | Timeline |
|------|-----------|----------|
| **Fase 1** | Prototipo HTML navegable ✅ | Sprint 1 (Completado) |
| **Fase 2** | Backend con APIs REST | Sprint 2-3 |
| **Fase 3** | Integración con Argentina | Sprint 4-5 |
| **Fase 4** | Testing y optimización | Sprint 6 |
| **Fase 5** | Deploy a producción | Sprint 7+ |

---

**Última actualización:** 13 de Junio, 2026  
**Versión:** 1.0 - Prototipo Funcional  
**Estado:** ✅ Listo para revisión

