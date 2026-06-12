# Diagrama de Clases — MS Turista

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases del microservicio Turista: Turista, Documento, HistorialViaje, Permiso, Antecedente y EstadoEnum.

---

## Diagrama

```mermaid
classDiagram
    class Turista {
        +Long id_turista
        +String rut
        +registrar()
        +validarIdentidad()
    }
    class Documento {
        +Long id_documento
        +Long id_turista
        +validar()
        +isVigente()
    }
    class Antecedente {
        +Long id_antecedente
        +Long id_turista
        +registrar()
        +getId()
    }
    class Permiso {
        +Long id_permiso
        +Long id_turista
        +isVigente()
        +getId()
    }
    class HistorialViaje {
        +Long id_historial
        +Long id_turista
        +registrar()
        +calcularDuracion()
    }
    class EstadoEnum {
        <<enumeration>>
        ACTIVO
        INACTIVO
        BLOQUEADO
    }

    Turista "1" --> "*" Documento : posee
    Turista "1" --> "*" Antecedente : registra
    Turista "1" --> "*" Permiso : cuenta_con
    Turista "1" --> "*" HistorialViaje : registra
    Turista --> EstadoEnum : estado
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
