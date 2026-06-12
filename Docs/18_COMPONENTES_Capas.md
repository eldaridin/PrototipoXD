# Diagrama de Componentes — Arquitectura en Capas

> **Vista DAS:** 4.3 Vista de Desarrollo | **Proyecto:** Aduanas System

---

## Descripcion

Arquitectura en 5 capas: Presentacion, API Gateway, Microservicios Core, Transversales e Integracion Externa.

---

## Diagrama

```mermaid
flowchart TB
    %% Capas como subgrafos
    subgraph Capa_Presentacion ["Capa de Presentación (UI)"]
        direction LR
        WebApp[Portal Web Turista]
        MobileApp[App Móvil Pasajero]
        Totem[Terminal / Tótem Caseta]
    end

    subgraph Capa_API_Gateway ["Capa de Orquestación y Enrutamiento"]
        Gateway[API Gateway / BFF]
    end

    subgraph Capa_Servicios_Core ["Capa Dominios Core (Microservicios)"]
        direction TB
        MS_Tur[MS Turista]
        MS_Veh[MS Vehículo]
        MS_Men[MS Menores]
        MS_SAG[MS SAG]
        MS_PDI[MS PDI]
    end

    subgraph Capa_Transversal ["Capa de Servicios Transversales"]
        MS_Rep[MS Reportes & Analítica]
        MS_Auth[MS Autenticación & RBAC]
        MS_Not[MS Notificaciones SMTP]
    end

    subgraph Capa_Integracion_Externa ["Capa de Integración (Gateways Externos)"]
        API_Reg[API Registro Civil]
        API_Arg[API Aduana Argentina]
        API_SAG_Ext[API Central SAG]
    end

    %% Dependencias
    Capa_Presentacion --> Capa_API_Gateway
    Capa_API_Gateway --> Capa_Servicios_Core
    Capa_API_Gateway --> Capa_Transversal
    Capa_Servicios_Core --> Capa_Integracion_Externa
    MS_Rep -.->|Audita| Capa_Servicios_Core
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
