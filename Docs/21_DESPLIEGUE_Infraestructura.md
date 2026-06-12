# Diagrama de Despliegue — Infraestructura Kubernetes

> **Vista DAS:** 4.5 Vista Fisica | **Proyecto:** Aduanas System

---

## Descripcion

Infraestructura en cluster Kubernetes con pods, PostgreSQL y conexiones a sistemas externos.

---

## Diagrama

```mermaid
flowchart TD
    %% Nivel Cliente
    subgraph Capa_Dispositivos ["Infraestructura del Cliente / Punto de Control"]
        direction LR
        POS[Dispositivo POS / Lector Biométrico]
        Browser[Navegador Web Funcionario]
    end

    %% Red Complejo Fronterizo
    subgraph Cluster_K8s ["Nodo Servidor Central (Kubernetes Cluster)"]
        subgraph Ingress_Controller ["Capa de Enrutamiento (Ingress)"]
            Ingress[Nginx Ingress Controller]
        end

        subgraph Pods_Microservicios ["Pods de Aplicación (Docker Containers)"]
            direction LR
            Pod_Tur[Pod: MS-Turista]
            Pod_Veh[Pod: MS-Vehiculo]
            Pod_SAG[Pod: MS-SAG]
        end

        subgraph Pods_Data ["Capa de Almacenamiento Distribuido"]
            DB_Replica[("PostgreSQL Cluster (Primary/Replica)")]
        end
    end

    %% Entidades Externas
    subgraph Red_Gubernamental ["Servidores Externos Estatales"]
        Aduana_Arg[Servidor Aduana Argentina]
        Reg_Civil[API Red Mideplan / Reg. Civil]
    end

    %% Enlaces
    POS & Browser -->|HTTPS / TLS 1.3| Ingress
    Ingress --> Pod_Tur & Pod_Veh & Pod_SAG
    Pod_Tur & Pod_Veh & Pod_SAG -->|TCP / Puerto 5432| DB_Replica
    Pod_Veh -->|REST API / VPN| Aduana_Arg
    Pod_Tur -->|REST API / Tramo Seguro| Reg_Civil
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
