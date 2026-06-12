# Diagrama de Actividad — Flujo Completo Cruce Fronterizo

> **Vista DAS:** 4.4 Vista de Procesos | **Proyecto:** Aduanas System

---

## Descripcion

Flujo completo de un pasajero desde la llegada hasta la habilitacion: PDI, SAG y Aduana.

---

## Diagrama

```mermaid
stateDiagram-v2
    [*] --> LlegadaComplejo
    LlegadaComplejo --> ControlPDI : Presenta Cédula / Pasaporte

    state ControlPDI {
        [*] --> ValidarIdentidad
        ValidarIdentidad --> VerificarMenor
        
        state chk_menor <<choice>>
        VerificarMenor --> chk_menor
        chk_menor --> ValidarAutorizacionNotarial : Es Menor de Edad
        chk_menor --> VerificarArraigos : Es Adulto
        
        ValidarAutorizacionNotarial --> VerificarArraigos
        VerificarArraigos --> EvaluacionPDI
    }

    state chk_arraigo <<choice>>
    EvaluacionPDI --> chk_arraigo
    chk_arraigo --> AlertaSupervisor : Alerta / Arraigo Activo
    chk_arraigo --> ControlSAG : Limpio / Habilitado

    AlertaSupervisor --> BloqueoFlujo
    BloqueoFlujo --> [*]

    state ControlSAG {
        [*] --> RevisionDeclaracion
        RevisionDeclaracion --> InspeccionFisica
        InspeccionFisica --> ResultadoInspeccion
    }

    state chk_sag <<choice>>
    ResultadoInspeccion --> chk_sag
    chk_sag --> DecomisoDestruccion : Contiene Productos Prohibidos
    chk_sag --> ControlAduana : Declaración Conforme

    DecomisoDestruccion --> ControlAduana

    state ControlAduana {
        [*] --> ValidarPatente
        ValidarPatente --> VerificarPlazosVehiculo
        VerificarPlazosVehiculo --> ImpresionFormulario
    }

    ImpresionFormulario --> CierreFlujo
    CierreFlujo --> SalidaHabilitada
    SalidaHabilitada --> [*]
```

---

| Notacion | Significado |
|----------|-------------|
| `+` | Visibilidad publica |
| `-` | Visibilidad privada |
| `<<enumeration>>` | Enumeracion UML |
| `1 --> *` | Uno a muchos |
| `1 --> 1` | Uno a uno |
| `<|--` | Herencia |
| `<<include>>` | Relacion obligatoria CU |
| `<<extend>>` | Relacion opcional CU |

---

*DAS Aduanas System v1.0 — Dario Rojas / Nicolas Herrera — DuocUC*
