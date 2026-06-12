# Criterios de Evaluación y Pruebas de Calidad (Testing)

Para garantizar la fiabilidad del sistema en el entorno crítico de la frontera, se aplicarán las siguientes reglas y criterios de evaluación basados en el estándar ISO/IEC 25010:

## Métricas y Herramientas de Calidad

| Atributo | Criterio de Medición | Herramienta / Método |
| :--- | :--- | :--- |
| **Rendimiento** | Tiempo de respuesta ≤ 2 segundos en el 95% de las solicitudes bajo carga normal. | Apache JMeter — pruebas de carga. |
| **Escalabilidad** | El sistema soporta 5.000 usuarios concurrentes sin degradación del servicio. | Apache JMeter — pruebas de estrés. |
| **Disponibilidad** | Uptime ≥ 99.9% medido mensualmente (máximo 43 minutos de caída al mes). | AWS CloudWatch / Azure Monitor. |
| **Seguridad** | 0 vulnerabilidades críticas en análisis OWASP Top 10. | OWASP ZAP — análisis de vulnerabilidades. |
| **Mantenibilidad**| Cobertura de pruebas unitarias ≥ 80% del código. | JUnit 5 + JaCoCo (reporte de cobertura). |
| **Interoperabilidad**| Las APIs externas responden correctamente en ≥ 99% de las solicitudes. | Pruebas de integración con Postman / Newman. |
| **Fiabilidad** | El modo offline activa en menos de 5 segundos ante pérdida de conexión. | Pruebas de corte de red en entorno de staging. |
| **Trazabilidad** | El 100% de las operaciones CRUD quedan registradas en logs con timestamp. | Revisión de logs en ELK Stack (Elasticsearch, Logstash, Kibana). |
| **Usabilidad** | Puntuación SUS (System Usability Scale) ≥ 70 puntos. | Pruebas con usuarios reales en ventanilla. |
| **Portabilidad** | El sistema funciona sin errores en navegadores modernos (Chrome 120+, Firefox 120+). | Pruebas manuales y Selenium automatizado. |