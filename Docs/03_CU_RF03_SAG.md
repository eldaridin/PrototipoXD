# CU-RF03: Despliegue del Formulario SAG

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF03 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Turista/Pasajero | Primario / Secundario | Participa en el caso de uso |
| Oficial SAG | Primario / Secundario | Participa en el caso de uso |
| SAG Externo (API) | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    Turista[Turista / Pasajero]
    OficialSAG[Oficial SAG]
    SAGExt[SAG Externo (API)]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Declaración Jurada SAG"]
        UC_Aut([Autenticarse en el sistema])
        UC_Acc([Acceder formulario declaración SAG])
        UC_Dec([Declarar productos animales/vegetales])
        UC_Ver([Verificar certificado sanitario oficial])
        UC_Val([Validar productos restringidos])
        UC_Adj([Adjuntar certificados sanitarios])
        UC_Con([Consultar lista prohibidos SAG])
        UC_Ord([Ordenar destrucción producto prohibido])
        UC_Env([Enviar declaración jurada])
        UC_Gen([Generar folio SAG de declaración])
        UC_Not([Notificar resultado al turista])
    end

    %% Relaciones de Actores
    Turista --> UC_Aut
    Turista --> UC_Acc
    Turista --> UC_Dec
    Turista --> UC_Adj
    Turista --> UC_Env
    OficialSAG --> UC_Env
    OficialSAG --> UC_Gen
    UC_Con --> SAGExt

    %% Relaciones entre Casos de Uso
    UC_Dec -.->|&lt;&lt;include&gt;&gt;| UC_Ver
    UC_Ver -.->|&lt;&lt;include&gt;&gt;| UC_Val
    UC_Adj -.->|&lt;&lt;include&gt;&gt;| UC_Con
    UC_Con -.->|&lt;&lt;extend&gt;&gt;| UC_Ver
    UC_Con -.->|&lt;&lt;include&gt;&gt;| UC_Ord
    UC_Env -.->|&lt;&lt;include&gt;&gt;| UC_Gen
    UC_Gen -.->|&lt;&lt;include&gt;&gt;| UC_Not
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
