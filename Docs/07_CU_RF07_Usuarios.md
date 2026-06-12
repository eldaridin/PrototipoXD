# CU-RF07: Gestion de Cuentas de Usuario

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF07 | **Proyecto:** Aduanas System

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
    subgraph Sistema ["Sistema de Gestión de Usuarios — RBAC"]
        UC_Aut([Autenticarse con credenciales])
        UC_Val([Validar doble factor autenticación])
        UC_GenT([Generar token JWT con permisos])
        UC_Apl([Aplicar control de acceso RBAC])
        UC_Cre([Crear cuenta de funcionario])
        UC_Asi([Asignar rol PDI/SAG/Aduana/Admin])
        UC_Reg([Registrar acción en auditoría])
        UC_Edi([Editar datos de usuario])
        UC_Not([Notificar al usuario cuenta creada])
        UC_Des([Deshabilitar cuenta de usuario])
        UC_Blo([Bloquear acceso no autorizado])
    end

    %% Relaciones de Actores
    AdminSNA --> UC_Aut
    AdminSNA --> UC_Cre
    AdminSNA --> UC_Asi
    AdminSNA --> UC_Edi
    AdminSNA --> UC_Des
    FuncAduana --> UC_Val

    %% Relaciones entre Casos de Uso
    UC_Aut -.->|&lt;&lt;include&gt;&gt;| UC_Val
    UC_Val -.->|&lt;&lt;include&gt;&gt;| UC_GenT
    UC_GenT -.->|&lt;&lt;include&gt;&gt;| UC_Apl
    UC_Cre -.->|&lt;&lt;include&gt;&gt;| UC_Apl
    UC_Cre -.->|&lt;&lt;include&gt;&gt;| UC_Asi
    UC_Asi -.->|&lt;&lt;include&gt;&gt;| UC_Reg
    UC_Not -.->|&lt;&lt;extend&gt;&gt;| UC_Reg
    UC_Edi -.->|&lt;&lt;include&gt;&gt;| UC_Not
    UC_Des -.->|&lt;&lt;include&gt;&gt;| UC_Blo
    UC_Blo -.->|&lt;&lt;include&gt;&gt;| UC_Not
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
