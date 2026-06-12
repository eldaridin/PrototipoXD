# Contexto y Visión del Sistema: Aduanas System

## 1. Contexto del Problema
El paso fronterizo Los Libertadores enfrenta esperas de hasta 20 horas debido a procesos manuales y una infraestructura tecnológica sobrepasada.

## 2. Propósito y Ámbito
* **Propósito:** Definir una arquitectura robusta que permita automatizar la salida de menores, la admisión de vehículos y la interoperabilidad con Argentina, reduciendo significativamente los tiempos de atención.
* **Ámbito:** Diseño arquitectónico de una plataforma web responsive de alta disponibilidad (99.9%). El sistema automatizará el control migratorio de menores de edad, la admisión temporal de vehículos (convenio de 180 días) y la declaración jurada digital conjunta para el SAG y la PDI. Queda fuera del alcance el transporte aéreo o marítimo y modificaciones de leyes vigentes.

## 3. Objetivos del Sistema
* Reducir los tiempos de tramitación presencial mediante formularios web preventivos.
* Garantizar la interoperabilidad mediante integraciones seguras con organismos chilenos (PDI, SAG) y la Aduana Argentina.
* Proteger la confidencialidad de datos sensibles (menores de edad) mediante cifrado de extremo a extremo.

## 4. Estilo Arquitectónico
El sistema debe basarse en una arquitectura orientada a servicios (SOA) o microservicios para permitir la integración fluida con los sistemas de la PDI, el SAG y la Aduana Argentina. Esto facilita escalar de manera independiente el módulo de Declaraciones Juradas o Pasajeros sin sobredimensionar todo el sistema ante los flujos estacionales que superan las 126.000 personas.