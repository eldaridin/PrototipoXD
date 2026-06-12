# Diagrama de Clases — MS Menores

> **Vista DAS:** 4.2 Vista Logica | **Proyecto:** Aduanas System

---

## Descripcion

Clases del microservicio Menores: MenorEdad, Permiso, Antecedente, HistorialViajeMenor y DocumentoMenor.

---

## Diagrama

```mermaid
classDiagram
    class MenorEdad {
        +Long id_menor
        +String rut
        +registrar()
        +calcularEdad()
    }
    class Permiso {
        +Long id_permiso
        +Long id_menor
        +validarQR()
        +isVigente()
    }
    class Antecedente {
        +Long id_antecedente
        +Long id_menor
        +tieneArraigo()
        +getId()
    }
    class HistorialViajeMenor {
        +Long id_historial
        +Long id_menor
        +registrar()
        +getId()
    }
    class DocumentoMenor {
        +Long id_documento
        +Long id_menor
        +validar()
        +getId()
    }

    MenorEdad "1" --> "*" Permiso : requiere
    MenorEdad "1" --> "*" Antecedente : consulta
    MenorEdad "1" --> "*" HistorialViajeMenor : almacena
    MenorEdad "1" --> "*" DocumentoMenor : identifica
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
