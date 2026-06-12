# Diagrama de Clases — MS Reportes y Usuario

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases de Usuario y Reporte con enumeraciones RolEnum, FormatoEnum y TipoReporteEnum.

---

## Diagrama

```mermaid
classDiagram
    class Usuario {
        +Long id_usuario
        +String nombre
        +autenticar()
        +validar2FA()
    }
    class Reporte {
        +Long id_reporte
        +String tipoReporte
        +generar()
        +exportarPDF()
    }
    class RolEnum {
        <<enumeration>>
        TURISTA
        FUNCIONARIO_ADUANA
        ADMINISTRADOR
        PDI
        SAG
    }
    class FormatoEnum {
        <<enumeration>>
        PDF
        EXCEL
        CSV
    }
    class TipoReporteEnum {
        <<enumeration>>
        FLUJO_MIGRATORIO
        VEHICULOS
        INSPECCIONES
    }

    Usuario --> RolEnum : asignado
    Reporte --> FormatoEnum : exporta_en
    Reporte --> TipoReporteEnum : clasificado_como
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
