# Diagrama de Clases — MS Vehiculo

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases del microservicio Vehiculo: Vehiculo, DocumentoVehiculo, HistorialVehiculo y MovimientoEnum.

---

## Diagrama

```mermaid
classDiagram
    class Vehiculo {
        +Long id_vehiculo
        +String patente
        +registrar()
        +validarPlazo()
    }
    class DocumentoVehiculo {
        +Long id_documento
        +Long id_vehiculo
        +validar()
        +isVigente()
    }
    class HistorialVehiculo {
        +Long id_historial
        +Long id_vehiculo
        +registrar()
        +getId()
    }
    class MovimientoEnum {
        <<enumeration>>
        ENTRADA
        SALIDA
        TRANSITO
    }

    Vehiculo "1" --> "*" DocumentoVehiculo : asocia
    Vehiculo "1" --> "*" HistorialVehiculo : registra
    HistorialVehiculo --> MovimientoEnum : tipo_movimiento
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
