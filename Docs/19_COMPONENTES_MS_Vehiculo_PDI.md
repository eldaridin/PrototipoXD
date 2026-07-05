# Diagrama de Componentes — Aduanas System

> **Vista DAS:** 4.3 Vista de Desarrollo | **Proyecto:** Aduanas System

---

## Descripcion

Diagrama de componentes organizado en las tres zonas descritas en el DAS: Zona Cliente, Zona Backend (microservicios) y Zona Sistemas Externos.

> **CORRECCIÓN v1.1:** el diagrama anterior usaba **Kong API Gateway**, **Kafka Message Broker**, **MongoDB** (para MS PDI) y **Angular / Flutter** en el frontend — ninguna de estas tecnologías está declarada en ningún otro lugar del DAS. Se reemplazan por lo que sí está declarado y justificado: **Spring Cloud Gateway**, **PostgreSQL** (Database-per-Service, uniforme para los 6 microservicios) y **PWA (HTML/CSS/JS)** en el frontend — que además es lo que efectivamente construye el prototipo.

---

## Diagrama

```mermaid
flowchart TB
    subgraph Zona_Cliente ["Zona Cliente"]
        FE["Frontend PWA<br/>HTML / CSS / JS"]
    end

    subgraph Zona_Backend ["Zona Backend - Microservicios"]
        direction TB
        GW["API Gateway<br/>Spring Cloud Gateway"]
        subgraph MS_Core ["Controller -> Service -> Repository -> BD propia (PostgreSQL)"]
            direction LR
            MS_Tur[MS Turista]
            MS_Veh[MS Vehiculo]
            MS_Men[MS Menores]
            MS_SAG[MS SAG]
            MS_PDI[MS PDI]
            MS_Rep[MS Reportes]
        end
        SEC["Paquete de Seguridad Compartido<br/>JWT / RBAC / HTTPS / Cifrado E2E"]
    end

    subgraph Zona_Externos ["Zona Sistemas Externos"]
        direction TB
        Ext_Arg["Aduana Argentina<br/>REST / VPN"]
        Ext_PDI["PDI / Migraciones<br/>REST / HTTPS"]
        Ext_SAG["SAG Externo<br/>REST / HTTPS"]
        Ext_RC["Registro Civil<br/>REST / HTTPS"]
        Ext_Mail["Servicio Email SMTP"]
    end

    FE -->|HTTPS| GW
    GW --> MS_Tur & MS_Veh & MS_Men & MS_SAG & MS_PDI & MS_Rep
    SEC -.-> MS_Tur & MS_Veh & MS_Men & MS_SAG & MS_PDI & MS_Rep
    MS_Veh -->|VPN| Ext_Arg
    MS_PDI --> Ext_PDI
    MS_SAG --> Ext_SAG
    MS_Tur --> Ext_RC
    MS_Rep -.-> Ext_Mail
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

*DAS Aduanas System v1.1 — Dario Rojas / Nicolas Herrera — DuocUC*
