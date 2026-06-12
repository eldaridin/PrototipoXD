# CU-RF02: Automatizacion Admision y Salida de Vehiculos

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF02 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |
| Turista/Pasajero | Primario / Secundario | Participa en el caso de uso |
| Aduana Argentina | Primario / Secundario | Participa en el caso de uso |
| Registro Civil | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    FuncAduana[Funcionario Aduanas]
    Turista[Turista / Pasajero]
    AduanaArg[Aduana Argentina]
    RegCivil[Registro Civil / Multas]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Gestión de Vehículos"]
        UC_Aut([Autenticarse en el sistema])
        UC_Ing([Ingresar patente y datos vehículo])
        UC_Sel([Seleccionar tipo: Entrada o Salida])
        UC_ValA([Validar vehículo con Argentina])
        UC_ConA([Consultar base datos Argentina])
        UC_ValP([Validar plazo 180 / 90 días])
        UC_VerP([Verificar patente y multas])
        UC_BloV([Bloquear salida vehículo encargado])
        UC_ConM([Consultar multas y encargos])
        UC_GenF([Generar formulario PDF 2 copias])
        UC_RegH([Registrar historial entrada/salida])
        UC_NotF([Notificar resultado al funcionario])
    end

    %% Relaciones de Actores
    FuncAduana --> UC_Aut
    FuncAduana --> UC_Ing
    FuncAduana --> UC_Sel
    UC_ConA --> AduanaArg
    UC_ConM --> RegCivil
    Turista --> UC_GenF

    %% Relaciones entre Casos de Uso
    UC_Sel -.->|&lt;&lt;include&gt;&gt;| UC_ValA
    UC_ValA -.->|&lt;&lt;include&gt;&gt;| UC_ConA
    UC_ValA -.->|&lt;&lt;include&gt;&gt;| UC_ValP
    UC_ValP -.->|&lt;&lt;include&gt;&gt;| UC_VerP
    UC_BloV -.->|&lt;&lt;extend&gt;&gt;| UC_VerP
    UC_BloV -.->|&lt;&lt;include&gt;&gt;| UC_ConM
    UC_VerP -.->|&lt;&lt;include&gt;&gt;| UC_GenF
    UC_GenF -.->|&lt;&lt;include&gt;&gt;| UC_RegH
    UC_RegH -.->|&lt;&lt;include&gt;&gt;| UC_NotF
```

---

## Relaciones UML

| Tipo | Descripcion |
|------|-------------|
| `<<include>>` | Relacion obligatoria — el caso de uso base siempre ejecuta el incluido |
| `<<extend>>` | Relacion opcional — se ejecuta solo bajo ciertas condiciones |

---

*Documento de Arquitectura de Software (DAS) — Aduanas System v1.0*
*Generado para la carpeta UML-DIA del repositorio PrototipoXD*
