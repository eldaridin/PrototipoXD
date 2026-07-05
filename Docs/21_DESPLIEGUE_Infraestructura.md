# Diagrama de Despliegue — Aduanas System

> **Vista DAS:** 4.5 Vista Fisica | **Proyecto:** Aduanas System

---

## Descripcion

Infraestructura de despliegue con App Servers y DB Servers independientes por microservicio (Database-per-Service), sin contenedores/orquestador.

> **CORRECCIÓN v1.1:** el diagrama anterior describía un **clúster Kubernetes con pods Docker y Nginx Ingress Controller**, y solo mostraba 3 de los 6 microservicios. Esto no coincide con la Vista Física del DAS, que describe **App Servers independientes (MS1 al MS6)** cada uno con su propia base de datos PostgreSQL. Se corrige para incluir los 6 microservicios y se elimina la referencia a Kubernetes/Docker/Nginx.

---

## Diagrama

```mermaid
flowchart TD
    Internet["Internet<br/>Usuarios (turistas / funcionarios)"]
    CDN["«device» CDN Server<br/>Frontend PWA"]
    GW["«device» API Gateway Server<br/>Spring Cloud Gateway"]
    SEC["«device» Security Server<br/>JWT / RBAC"]

    subgraph AppServers ["App Servers (uno por microservicio)"]
        direction LR
        AS_Tur["«device» App Server<br/>MS-Turista"]
        AS_Veh["«device» App Server<br/>MS-Vehiculo"]
        AS_Men["«device» App Server<br/>MS-Menores"]
        AS_SAG["«device» App Server<br/>MS-SAG"]
        AS_PDI["«device» App Server<br/>MS-PDI"]
        AS_Rep["«device» App Server<br/>MS-Reportes"]
    end

    subgraph DBServers ["DB Servers (PostgreSQL, uno por microservicio)"]
        direction LR
        DB_Tur[("PostgreSQL<br/>Turista")]
        DB_Veh[("PostgreSQL<br/>Vehiculo")]
        DB_Men[("PostgreSQL<br/>Menores")]
        DB_SAG[("PostgreSQL<br/>SAG")]
        DB_PDI[("PostgreSQL<br/>PDI")]
        DB_Rep[("PostgreSQL<br/>Reportes")]
    end

    subgraph Externos ["Sistemas Externos"]
        direction TB
        Ext_Arg["«device» Aduana Argentina<br/>REST / VPN"]
        Ext_PDI["«device» PDI / Migraciones<br/>REST / HTTPS"]
        Ext_SAG["«device» SAG Externo<br/>REST / HTTPS"]
        Ext_RC["«device» Registro Civil<br/>REST / HTTPS"]
    end

    Internet -->|HTTPS| CDN
    CDN -->|HTTPS| GW
    GW -->|valida JWT| SEC
    GW --> AS_Tur & AS_Veh & AS_Men & AS_SAG & AS_PDI & AS_Rep
    AS_Tur -->|JDBC/SSL| DB_Tur
    AS_Veh -->|JDBC/SSL| DB_Veh
    AS_Men -->|JDBC/SSL| DB_Men
    AS_SAG -->|JDBC/SSL| DB_SAG
    AS_PDI -->|JDBC/SSL| DB_PDI
    AS_Rep -->|JDBC/SSL| DB_Rep
    AS_Veh -->|VPN| Ext_Arg
    AS_PDI --> Ext_PDI
    AS_SAG --> Ext_SAG
    AS_Tur --> Ext_RC
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
