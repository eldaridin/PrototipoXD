# Diagrama de Clases — MS SAG

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases del microservicio SAG: InspeccionSAG, DeclaracionJurada, Medicamento, Animal, Producto y ResultadoEnum.

---

## Diagrama

```mermaid
classDiagram
    class InspeccionSAG {
        +Long id_inspeccion
        +Long id_turista
        +registrar()
        +calcularResultado()
    }
    class DeclaracionJurada {
        +Long id_declaracion
        +Long id_inspeccion
        +generar()
        +getFolio()
    }
    class Medicamento {
        +Long id_item
        +Long id_inspeccion
        +validar()
        +getId()
    }
    class Animal {
        +Long id_animal
        +Long id_inspeccion
        +validar()
        +getId()
    }
    class Producto {
        +Long id_producto
        +Long id_inspeccion
        +validar()
        +getId()
    }
    class ResultadoEnum {
        <<enumeration>>
        APROBADO
        RECHAZADO
        PENDIENTE
    }

    InspeccionSAG "1" --> "1" DeclaracionJurada : genera
    InspeccionSAG "1" --> "*" Medicamento : contiene
    InspeccionSAG "1" --> "*" Animal : declara
    InspeccionSAG "1" --> "*" Producto : inspecciona
    InspeccionSAG --> ResultadoEnum : estado_final
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
