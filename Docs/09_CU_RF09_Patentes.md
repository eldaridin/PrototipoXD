# CU-RF09: Validacion de Patentes y Multas

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF09 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |
| Registro Civil | Primario / Secundario | Participa en el caso de uso |
| Aduana Argentina | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    FuncAduana[Funcionario Aduanas]
    RegCivil[Registro Civil Multas]
    AduanaArg[Aduana Argentina]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Validación de Vehículos"]
        UC_Aut([Autenticarse en el sistema])
        UC_Ing([Ingresar patente del vehículo])
        UC_ConM([Consultar multas y encargos])
        UC_Blo([Bloquear vehículo con encargo])
        UC_ConR([Consultar Registro Civil multas])
        UC_Val([Validar patente en Argentina])
        UC_ConA([Consultar Aduana Argentina API])
        UC_Gen([Generar alerta al funcionario])
        UC_Mos([Mostrar resultado de validación])
        UC_Apr([Aprobar vehículo para cruce])
        UC_Reg([Registrar validación en auditoría])
    end

    %% Relaciones de Actores
    FuncAduana --> UC_Aut
    FuncAduana --> UC_Ing
    UC_ConR --> RegCivil
    UC_ConA --> AduanaArg

    %% Relaciones entre Casos de Uso
    UC_Ing -.->|&lt;&lt;include&gt;&gt;| UC_ConM
    UC_Blo -.->|&lt;&lt;extend&gt;&gt;| UC_ConM
    UC_Blo -.->|&lt;&lt;include&gt;&gt;| UC_ConR
    UC_ConM -.->|&lt;&lt;include&gt;&gt;| UC_Val
    UC_Val -.->|&lt;&lt;include&gt;&gt;| UC_ConA
    UC_Gen -.->|&lt;&lt;extend&gt;&gt;| UC_ConA
    UC_Val -.->|&lt;&lt;include&gt;&gt;| UC_Mos
    UC_Apr -.->|&lt;&lt;include&gt;&gt;| UC_Mos
    UC_Apr -.->|&lt;&lt;include&gt;&gt;| UC_Reg
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
