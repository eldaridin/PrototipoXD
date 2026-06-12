# CU-RF04: Validacion Automatica con Aduana Argentina

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF04 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |
| Aduana Argentina | Primario / Secundario | Participa en el caso de uso |
| PDI/Migraciones | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    FuncAduana[Funcionario Aduanas]
    AduanaArg[Aduana Argentina]
    PDIMig[PDI / Migraciones]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Interoperabilidad Internacional"]
        UC_Aut([Autenticarse en el sistema])
        UC_Sol([Solicitar validación persona/vehículo])
        UC_Con([Consultar base datos Argentina])
        UC_Act([Activar modo offline sin conexión])
        UC_Sin([Sincronizar datos en tiempo real])
        UC_Val([Validación cruzada PDI / Migraciones])
        UC_Gen([Generar alerta persona con impedimento])
        UC_Rei([Reintento automático al restaurar])
        UC_Mos([Mostrar resultado de validación])
        UC_Reg([Registrar resultado en auditoría])
    end

    %% Relaciones de Actores
    FuncAduana --> UC_Aut
    FuncAduana --> UC_Sol
    AduanaArg --> UC_Sin
    UC_Val --> PDIMig

    %% Relaciones entre Casos de Uso
    UC_Sol -.->|&lt;&lt;include&gt;&gt;| UC_Con
    UC_Act -.->|&lt;&lt;extend&gt;&gt;| UC_Con
    UC_Act -.->|&lt;&lt;include&gt;&gt;| UC_Sin
    UC_Con -.->|&lt;&lt;include&gt;&gt;| UC_Val
    UC_Gen -.->|&lt;&lt;extend&gt;&gt;| UC_Val
    UC_Gen -.->|&lt;&lt;extend&gt;&gt;| UC_Rei
    UC_Val -.->|&lt;&lt;include&gt;&gt;| UC_Mos
    UC_Mos -.->|&lt;&lt;include&gt;&gt;| UC_Reg
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
