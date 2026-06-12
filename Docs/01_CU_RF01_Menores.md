# CU-RF01: Registro de Menores de Edad

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF01 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Funcionario PDI | Primario / Secundario | Participa en el caso de uso |
| Turista/Pasajero | Primario / Secundario | Participa en el caso de uso |
| Registro Civil | Primario / Secundario | Participa en el caso de uso |
| Supervisor | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    FuncPDI[Funcionario PDI]
    Turista[Turista / Pasajero]
    RegCivil[Registro Civil]
    Supervisor[Supervisor]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Gestión de Menores"]
        UC_Aut([Autenticarse en el sistema])
        UC_Ing([Ingresar datos del menor])
        UC_Val([Validar identidad con Registro Civil])
        UC_Sel([Seleccionar modalidad de viaje])
        UC_Ocr([Verificar autenticidad OCR notarial])
        UC_Car([Cargar autorización notarial digital])
        UC_Par([Validar vínculo de parentesco])
        UC_Vin([Vincular documento al registro])
        UC_Arr([Verificar arraigo nacional])
        UC_Ale([Generar alerta silenciosa])
        UC_Blo([Bloquear flujo migratorio])
        UC_Fol([Generar folio de autorización])
        UC_Hab([Habilitar paso migratorio])
    end

    %% Relaciones de Actores
    FuncPDI --> UC_Aut
    FuncPDI --> UC_Ing
    FuncPDI --> UC_Sel
    FuncPDI --> UC_Car
    FuncPDI --> UC_Vin
    Turista --> UC_Vin
    Turista --> UC_Fol
    UC_Val --> RegCivil
    UC_Ale --> Supervisor

    %% Relaciones entre Casos de Uso
    UC_Ing -.->|&lt;&lt;include&gt;&gt;| UC_Val
    UC_Sel -.->|&lt;&lt;include&gt;&gt;| UC_Ocr
    UC_Car -.->|&lt;&lt;include&gt;&gt;| UC_Par
    UC_Par -.-> UC_Ocr
    UC_Vin -.->|&lt;&lt;include&gt;&gt;| UC_Arr
    UC_Ale -.->|&lt;&lt;extend&gt;&gt;| UC_Arr
    UC_Blo -.->|&lt;&lt;extend&gt;&gt;| UC_Ale
    UC_Vin -.->|&lt;&lt;include&gt;&gt;| UC_Fol
    UC_Fol -.->|&lt;&lt;include&gt;&gt;| UC_Hab
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
