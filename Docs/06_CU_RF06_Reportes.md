# CU-RF06: Generacion de Informe Estadistico

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF06 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Administrador SNA | Primario / Secundario | Participa en el caso de uso |
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    AdminSNA[Administrador SNA]
    FuncAduana[Funcionario Aduanas]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Reportes y Estadísticas"]
        UC_Aut([Autenticarse en el sistema])
        UC_Sel([Seleccionar tipo y rango de informe])
        UC_Apl([Aplicar filtros fecha, tipo, paso])
        UC_Cal([Calcular estadísticas de flujo])
        UC_Con([Consultar BD con filtros aplicados])
        UC_Gen([Generar informe estadístico])
        UC_For([Formatear datos según plantilla])
        UC_Env([Enviar informe por email])
        UC_Exp([Exportar en PDF o Excel])
        UC_Not([Notificar error sin datos])
        UC_Des([Descargar archivo generado])
    end

    %% Relaciones de Actores
    AdminSNA --> UC_Aut
    AdminSNA --> UC_Sel
    AdminSNA --> UC_Apl
    AdminSNA --> UC_Exp
    FuncAduana --> UC_Des

    %% Relaciones entre Casos de Uso
    UC_Sel -.->|&lt;&lt;include&gt;&gt;| UC_Apl
    UC_Apl -.->|&lt;&lt;include&gt;&gt;| UC_Cal
    UC_Cal -.->|&lt;&lt;include&gt;&gt;| UC_Con
    UC_Apl -.->|&lt;&lt;include&gt;&gt;| UC_Gen
    UC_Gen -.->|&lt;&lt;include&gt;&gt;| UC_For
    UC_Env -.->|&lt;&lt;extend&gt;&gt;| UC_For
    UC_Exp -.->|&lt;&lt;include&gt;&gt;| UC_Env
    UC_Des -.->|&lt;&lt;include&gt;&gt;| UC_Not
    UC_Not -.->|&lt;&lt;include&gt;&gt;| UC_Env
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
