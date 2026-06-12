# Diagrama de Casos de Uso General — Aduanas System

> **Vista DAS:** 4.1 Vista de Escenarios | **Proyecto:** Aduanas System

---

## Descripcion

Vista general con los 5 modulos del sistema y como interactuan los 4 actores principales.

---

## Diagrama

```mermaid
flowchart TD
    %% Actores
    T[Turista / Pasajero]
    FA[Funcionario Aduana]
    OP[Oficial PDI]
    OS[Oficial SAG]

    %% Módulos del Sistema
    subgraph Paso_Los_Libertadores ["Complejo Fronterizo Integrado"]
        M1[Módulo Pre-Registro & Notificaciones]
        M2[Módulo Control Migratorio Menores]
        M3[Módulo Inspección Fitosanitaria SAG]
        M4[Módulo Admisión Vehicular Aduanas]
        M5[Módulo Core de Interoperabilidad Internacional]
    end

    %% Flujos e Interacciones
    T -->|1. Realiza Pre-Registro| M1
    T -->|2. Se presenta en Caseta| OP
    OP -->|3. Fiscaliza Identidad/Arraigo| M2
    T -->|4. Declara Equipaje/Bienes| OS
    OS -->|5. Valida Sanitariamente| M3
    FA -->|6. Controla Patente/Plazos| M4
    M4 <-->|7. Consulta Bilateral| M5
    M2 <-->|7. Consulta Bilateral| M5
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
