# CU-RF10: Modulo de Ayuda y Preguntas Frecuentes con Chatbot IA

## Diagrama de Caso de Uso Especifico — Aduanas System

> **Vista:** Escenarios (Modelo 4+1) | **Requisito:** CU-RF10 | **Proyecto:** Aduanas System

---

## Actores

| Actor | Tipo | Descripcion |
|-------|------|-------------|
| Turista/Usuario | Primario / Secundario | Participa en el caso de uso |
| Funcionario Aduanas | Primario / Secundario | Participa en el caso de uso |
| Motor IA NLP | Primario / Secundario | Participa en el caso de uso |

---

## Diagrama

```mermaid
flowchart LR
    %% Actores
    Turista[Turista / Usuario]
    FuncAduana[Funcionario Aduanas]
    MotorIA[Motor IA NLP]

    %% Frontera del Sistema
    subgraph Sistema ["Sistema de Ayuda con Chatbot IA"]
        UC_Acc([Acceder al chatbot de ayuda])
        UC_Esc([Escribir pregunta en lenguaje natural])
        UC_Pro([Procesar intención del usuario NLP])
        UC_Con([Consultar base de conocimiento FAQ])
        UC_Ana([Analizar intención con IA NLP])
        UC_Bus([Buscar respuesta en base conocimiento])
        UC_EscH([Escalar a funcionario humano])
        UC_Mos([Mostrar respuesta al usuario])
        UC_Cre([Crear ticket de atención])
        UC_RegF([Registrar feedback del usuario])
        UC_RegI([Registrar interacción en auditoría])
    end

    %% Relaciones de Actores
    Turista --> UC_Acc
    Turista --> UC_Esc
    FuncAduana --> UC_EscH
    UC_Ana --> MotorIA

    %% Relaciones entre Casos de Uso
    UC_Esc -.->|&lt;&lt;include&gt;&gt;| UC_Pro
    UC_Pro -.->|&lt;&lt;include&gt;&gt;| UC_Con
    UC_Con -.->|&lt;&lt;include&gt;&gt;| UC_Ana
    UC_Pro -.->|&lt;&lt;include&gt;&gt;| UC_Bus
    UC_Bus -.->|&lt;&lt;include&gt;&gt;| UC_EscH
    UC_EscH -.->|&lt;&lt;include&gt;&gt;| UC_Con
    UC_Bus -.->|&lt;&lt;include&gt;&gt;| UC_Mos
    UC_EscH -.->|&lt;&lt;extend&gt;&gt;| UC_Mos
    UC_Cre -.->|&lt;&lt;extend&gt;&gt;| UC_Mos
    UC_Mos -.->|&lt;&lt;include&gt;&gt;| UC_RegF
    UC_RegF -.->|&lt;&lt;include&gt;&gt;| UC_RegI
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
