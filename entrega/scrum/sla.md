# SLA en Scrum

## Declaración explícita: el SLA no aplica en Scrum

El Service Level Agreement (SLA) no aplica al componente Scrum de este proyecto. Esta declaración no es una omisión: es una consecuencia directa de la naturaleza del modelo de trabajo que Scrum propone.

## Por qué el SLA no aplica en Scrum

Un SLA define compromisos de disponibilidad continua, tiempos de respuesta a incidentes y niveles de servicio medibles de forma permanente. Ejemplos típicos: "el sistema estará disponible el 99.5% del tiempo", "los incidentes críticos se resuelven en menos de 4 horas", "el tiempo de respuesta del API no supera 500ms bajo carga".

Estos compromisos suponen que existe un servicio en producción operando de forma continua, con usuarios reales que dependen de su disponibilidad en cualquier momento.

**En Scrum, el cliente no compra disponibilidad de servicio continua. El cliente compra capacidad del equipo por sprint.**

La unidad de valor en Scrum es el incremento de producto entregado al final de cada sprint, no la disponibilidad de un servicio. El equipo se compromete a un Sprint Goal, no a un tiempo de actividad (uptime). Si el sistema está en construcción durante el sprint 3 y un componente falla, el equipo lo corrige dentro del sprint sin que exista un SLA que regule el tiempo de respuesta a esa corrección.

Durante el período de ejecución Scrum de este proyecto (enero–abril 2027), el sistema de recomendación está en construcción activa. No hay usuarios finales dependiendo de él en producción. Por tanto, no hay servicio continuo que garantizar y no hay SLA que definir.

## Lo que reemplaza al SLA en Scrum

Scrum tiene sus propios mecanismos de compromiso y calidad que cumplen una función análoga al SLA dentro del contexto de un proyecto de desarrollo:

### Sprint Goal comprometido

Al inicio de cada sprint, el equipo se compromete públicamente con un Sprint Goal concreto. Ese compromiso es el equivalente scrum de un contrato de servicio: el equipo se responsabiliza de entregarlo al final del sprint. Si el Sprint Goal no se cumple, el equipo lo registra en la retrospectiva y aplica mejoras.

Los 8 Sprint Goals del proyecto están definidos desde la planificación y son el principal mecanismo de rendición de cuentas del equipo ante los stakeholders de UVG.

### Velocidad declarada de 20 SP/sprint

El equipo declaró una velocidad de 20 story points por sprint. Esta velocidad es el compromiso de capacidad del equipo: los stakeholders pueden proyectar cuánto trabajo se completará en qué fecha basándose en ella. Si la velocidad real se desvía significativamente de 20 SP, el equipo y el SM lo comunican proactivamente para ajustar expectativas.

### Definition of Done verificable

La DoD garantiza que cada historia entregada cumple un estándar de calidad no negociable. Una historia que pasa la DoD es funcional, probada, integrada y libre de deuda técnica deliberada. Este estándar reemplaza la garantía de calidad que en un contexto de servicio se expresaría mediante métricas de SLA.

## Cuándo sí aplica el SLA en este proyecto

El SLA sí aplica en las metodologías de flujo continuo o de servicio que este proyecto utiliza en otros componentes:

### Kanban

Kanban es una metodología de flujo continuo donde el equipo gestiona un tablero con trabajo entrante de forma indefinida. En ese contexto, las métricas de tiempo de ciclo (cycle time), tiempo de entrega (lead time) y tasa de flujo son la base para definir SLAs de respuesta a solicitudes. Ver la documentación del componente Kanban de este proyecto para los SLAs correspondientes.

### Scrumban

Scrumban combina la estructura de sprints de Scrum con el flujo continuo de Kanban. Para el componente de soporte o mantenimiento que opera bajo Scrumban, los SLAs de tiempo de respuesta a incidentes sí son aplicables porque existe un servicio en operación continua que atiende solicitudes. Ver la documentación del componente Scrumban de este proyecto para los SLAs definidos.

## Resumen

| Dimensión | Scrum | Kanban / Scrumban |
|---|---|---|
| Modelo de trabajo | Sprints de capacidad fija | Flujo continuo |
| Compromiso principal | Sprint Goal por sprint | Tiempo de ciclo / tiempo de entrega |
| SLA aplicable | No | Sí |
| Unidad de valor | Incremento de producto | Solicitud resuelta |
| Métricas de rendimiento | Velocidad (SP/sprint), DoD | Cycle time, lead time, throughput |
