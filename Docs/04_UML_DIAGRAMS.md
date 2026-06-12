# Vistas Arquitectónicas y Diagramas UML

A continuación se presentan los modelos estructurales en código Mermaid para la vista lógica y la vista de componentes.

## 1. Vista de Componentes (Arquitectura de Microservicios)
Muestra la integración entre el API Gateway, los microservicios y las APIs externas.

```mermaid
flowchart TD
    %% Zona Cliente
    Client[Frontend PWA] -- HTTPS --> Gateway[API Gateway - Spring Cloud]
    
    %% Zona Backend
    subgraph Microservicios
        Gateway --> MST[MS Turista]
        Gateway --> MSV[MS Vehículo]
        Gateway --> MSM[MS Menores]
        Gateway --> MSS[MS SAG]
        Gateway --> MSP[MS PDI]
        Gateway --> MSR[MS Reportes]
        
        Security[Módulo Seguridad JWT/RBAC]
        Gateway -. uses .-> Security
    end
    
    %% Bases de Datos
    MST --> DB_T[(BD Turista)]
    MSV --> DB_V[(BD Vehículo)]
    MSM --> DB_M[(BD Menores)]
    MSS --> DB_S[(BD SAG)]
    MSP --> DB_P[(BD PDI)]
    MSR --> DB_R[(BD Reportes)]
    
    %% Sistemas Externos
    MSV -- API REST / VPN --> Ext_Arg[Aduana Argentina]
    MSP -- API REST --> Ext_PDI[PDI Migraciones]
    MSS -- API REST --> Ext_SAG[SAG Externo]
    MST -- API REST --> Ext_RC[Registro Civil]
    MSR -- SMTP --> Ext_Mail[Servicio Email]