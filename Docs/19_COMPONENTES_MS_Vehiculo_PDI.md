# Diagrama de Componentes — MS Vehiculo y MS PDI

> **Vista DAS:** 4.3 Vista de Desarrollo | **Proyecto:** Aduanas System

---

## Descripcion

Detalle interno de Controller, Service y Repository de MS Vehiculo y MS PDI con Kafka Message Broker.

---

## Diagrama

```mermaid
flowchart LR
    %% Clientes y Gateways
    UI[Frontend Angular / Flutter] -->|HTTPS / REST| GW[Kong API Gateway]

    %% Componentes MS Vehículos
    subgraph MS_Vehiculo_Comp ["Componente Microservicio Vehículo"]
        direction TB
        Ctrl_Veh[VehiculoController]
        Serv_Veh[VehiculoService]
        Repo_Veh[VehiculoRepository]
        
        Ctrl_Veh --> Serv_Veh
        Serv_Veh --> Repo_Veh
    end

    %% Componentes MS PDI
    subgraph MS_PDI_Comp ["Componente Microservicio PDI"]
        direction TB
        Ctrl_PDI[PdiController]
        Serv_PDI[PdiService]
        Repo_PDI[PdiRepository]
        
        Ctrl_PDI --> Serv_PDI
        Serv_PDI --> Repo_PDI
    end

    %% Broker y Bases de Datos
    Broker{{~ Kafka Message Broker ~}}
    DB_Veh[("PostgreSQL (DB Vehículos)")]
    DB_PDI[("MongoDB (Event Store PDI)")]

    %% Conexiones
    GW --> Ctrl_Veh
    GW --> Ctrl_PDI
    Repo_Veh --> DB_Veh
    Repo_PDI --> DB_PDI
    Serv_Veh -.->|Publica Eventos Offline| Broker
    Serv_PDI -.->|Consume Alertas| Broker
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
