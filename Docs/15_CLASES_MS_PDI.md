# Diagrama de Clases — MS PDI

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases del microservicio PDI: ControlPDI, ControlMigratorio, MercanciaIlicita, Contrabando y Trafico.

---

## Diagrama

```mermaid
classDiagram
    class ControlPDI {
        +Long id_control
        +Long id_turista
        +registrar()
        +cerrarFlujo()
    }
    class ControlMigratorio {
        +Long id_migracion
        +Long id_control
        +verificar()
        +generarAlerta()
    }
    class Mercanciallicita {
        +Long id_incidente
        +Long id_control
        +registrar()
        +getId()
    }
    class Contrabando {
        +Long id_contrabando
        +Long id_control
        +registrar()
        +getId()
    }
    class Trafico {
        +Long id_trafico
        +Long id_control
        +registrar()
        +getId()
    }

    ControlPDI "1" --> "1" ControlMigratorio : ejecuta
    ControlPDI "1" --> "*" Mercanciallicita : detecta
    Mercanciallicita <|-- Contrabando : es_un
    Mercanciallicita <|-- Trafico : es_un
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
