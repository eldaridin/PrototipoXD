# CU-RF05: Registro y Cierre del Flujo de Revision de Pasajeros

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF05 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |
| Oficial SAG | Primario / Secundario | Participa en el caso de uso |
| Oficial PDI | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    FuncAduana[Funcionario Aduanas]
    OficialSAG[Oficial SAG]
    OficialPDI[Oficial PDI]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Control Migratorio — Los Libertadores"]
        UC_Aut([Autenticarse en el sistema])
        UC_Bus([Buscar pasajero en el sistema])
        UC_Rev([Revisar checklist de documentos])
        UC_Ver([Verificar documentos completos])
        UC_Gen([Generar alerta pendientes])
        UC_ConS([Confirmar revisión SAG completada])
        UC_ConP([Confirmar revisión PDI completada])
        UC_Cer([Cerrar flujo de revisión])
        UC_Reg([Registrar en auditoría del sistema])
        UC_Hab([Habilitar cruce de frontera])
    end

    %% Relaciones de Actores
    FuncAduana --> UC_Aut
    FuncAduana --> UC_Bus
    FuncAduana --> UC_Rev
    FuncAduana --> UC_Cer
    OficialSAG --> UC_ConS
    OficialPDI --> UC_Gen
    OficialPDI --> UC_ConP

    %% Relaciones entre Casos de Uso
    UC_Rev -.->|&lt;&lt;include&gt;&gt;| UC_Ver
    UC_Gen -.->|&lt;&lt;extend&gt;&gt;| UC_Ver
    UC_Rev -.->|&lt;&lt;include&gt;&gt;| UC_ConS
    UC_ConS -.->|&lt;&lt;include&gt;&gt;| UC_ConP
    UC_ConP -.->|&lt;&lt;include&gt;&gt;| UC_Cer
    UC_Cer -.->|&lt;&lt;include&gt;&gt;| UC_Reg
    UC_Cer -.->|&lt;&lt;include&gt;&gt;| UC_Hab
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
