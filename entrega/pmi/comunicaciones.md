# Área 7 PMI: Gestión de las Comunicaciones

## Descripción del área

La Gestión de las Comunicaciones es el área del PMBOK responsable de planificar, ejecutar y controlar el flujo de información entre el equipo del proyecto y todos sus stakeholders. Su propósito es garantizar que la información correcta llegue a la persona correcta, en el momento correcto, a través del canal correcto.

En este proyecto, el plan de comunicaciones establece 8 canales formales (C1–C8) que cubren todos los stakeholders identificados en la Matriz Poder-Interés. La formalidad del plan es proporcional al nivel de poder e interés de cada stakeholder.

## Plan de comunicaciones C1–C8

| ID | Audiencia | Stakeholder | Mensaje / Contenido | Frecuencia | Canal | Responsable | Formato |
|---|---|---|---|---|---|---|---|
| C1 | Catedrático / Sponsor | S1 Marroquín | Avance de sprint, métricas EVM (CPI/SPI), riesgos activos, CRs en proceso, próximos hitos | Quincenal (cada fin de sprint o a mitad) | Informe escrito + reunión presencial o virtual | PO Say | Documento escrito + presentación breve |
| C2 | Dirección de Admisiones | S3 Admisiones | Demostración de funcionalidades que impactan el catálogo de carreras, solicitud de validación, retroalimentación registrada en acta | Por hito funcional (H4, H5, H7) | Demo + acta de retroalimentación firmada | PO Say | Demo en vivo + acta formal |
| C3 | Equipo Developers | S7 Cruz, Chen, Guzmán | Estado de tareas, impedimentos, coordinación técnica, ceremonies Scrum | Diario (Daily Scrum) + ceremonies por sprint | Standup presencial/virtual + Slack del equipo | SM Cordero | Verbal + tablero Kanban actualizado |
| C4 | Área de TI / Infraestructura UVG | S4 TI UVG | Requerimientos técnicos de infraestructura, solicitudes de acceso, coordinación de entorno staging/producción | Por hito técnico (H3, H5, H7) | Correo formal + reunión técnica según necesidad | Developer Cruz | Correo institucional + minuta |
| C5 | Estudiantes de diversificado | S8 Estudiantes | Invitación a pruebas de usabilidad, instrucciones de participación, feedback recolectado | Por hito de entrega (sprint 8) | Formulario + sesión de prueba moderada | PO Say | Formulario + sesión de usabilidad |
| C6 | Catedráticos de carreras UVG | S9 Catedráticos | Solicitud de validación de descripción de carreras en el catálogo, retroalimentación sobre perfil de ingreso | Una sola vez (entre sprints 2 y 3) | Correo institucional + formulario de validación | PO Say | Correo con cuestionario adjunto |
| C7 | Proveedor infraestructura cloud | S10 Proveedor cloud | Reporte de incidencia, activación de SLA, escalamiento por R6 | Solo ante incidencia o activación del riesgo R6 | Canal técnico de soporte del proveedor | Developer Chen | Ticket formal de soporte |
| C8 | Stakeholders Cuadrante I | S1, S2, S3, S5, S6 | Confirmación de alcance entregado, lecciones aprendidas, Acta de Cierre para firma | Al cierre del proyecto (post sprint 8) | Reunión formal de cierre + Acta firmada | PO Say | Acta de Cierre formal |

## Criterios de escalamiento

El plan de comunicaciones incluye reglas de escalamiento para garantizar que la información crítica llegue al nivel de decisión correcto sin demora:

### Regla 1 — Escalamiento por desempeño de EVM

Si el CPI cae por debajo de 0.90 o el SPI cae por debajo de 0.90 durante dos sprints consecutivos, el PO escala al Sponsor (S1) en el siguiente informe C1, incluyendo un análisis de causa raíz y propuesta de acción correctiva.

### Regla 2 — Escalamiento por riesgo materializado

Si alguno de los riesgos R1–R9 se materializa y supera el umbral de impacto estimado en el plan de riesgos, el PO notifica al Sponsor (S1) en un plazo máximo de 24 horas hábiles mediante C1 extraordinario, sin esperar el siguiente ciclo quincenal.

### Regla 3 — Escalamiento por solicitud de cambio mayor

Si se recibe un CR que requiere aprobación del CCB ampliado (PO + SM + Sponsor), el PO convoca una reunión extraordinaria con S1 Marroquín dentro de los 5 días hábiles siguientes a la recepción del CR, documentada con el registro de CRs.

## Calendario de comunicaciones por sprint

| Sprint | C1 (Sponsor) | C2 (Admisiones) | C3 (Equipo) | C4 (TI UVG) | C5 (Estudiantes) | C6 (Catedráticos) |
|---|---|---|---|---|---|---|
| Sprint 1 | Al cierre | — | Daily + ceremonies | Coordinación H3 | — | — |
| Sprint 2 | Al cierre | — | Daily + ceremonies | — | — | Envío formulario |
| Sprint 3 | Al cierre | Validación H4 (11 feb) | Daily + ceremonies | — | — | — |
| Sprint 4 | Al cierre | — | Daily + ceremonies | — | — | — |
| Sprint 5 | Al cierre | Demo H5 (25 feb) | Daily + ceremonies | Coordinación H5 | — | — |
| Sprint 6 | Al cierre | — | Daily + ceremonies | — | — | — |
| Sprint 7 | Al cierre | — | Daily + ceremonies | — | Pruebas usabilidad H6 | — |
| Sprint 8 | Al cierre (H7) | Demo H7 | Daily + ceremonies | Coordinación H7 | Sesión cierre | — |
| Post sprint 8 | C8 Acta Cierre | C8 Acta | — | — | — | — |

## Anti-patrones evitados

### Anti-patrón 1 — Comunicación verbal sin registro

Todas las decisiones significativas (cambios de alcance, validaciones de Admisiones, acuerdos con el Sponsor) se registran en acta o en el sistema de CRs. No existen "acuerdos de pasillo" que modifiquen el alcance o el cronograma del proyecto.

### Anti-patrón 2 — Comunicación solo al final del proyecto

Los informes C1 son quincenales desde el inicio de la ejecución. El Sponsor no recibe información sobre el proyecto únicamente al momento de la entrega; está informado sprint a sprint. Esto evita sorpresas al cierre.

### Anti-patrón 3 — Mezclar canales informales con decisiones formales

El Slack del equipo (C3) es para coordinación operativa interna. Las decisiones de alcance, aprobaciones de CR y validaciones de entregables no se toman por Slack; se toman en las instancias formales definidas (CCB, Sprint Review, reuniones C1 y C2).

### Anti-patrón 4 — Ignorar stakeholders de bajo interés hasta que se convierten en problema

El proveedor cloud (S10, Cuadrante IV) tiene un canal formal definido (C7) aunque la comunicación sea solo ante incidencia. Esto garantiza que si el riesgo R6 se materializa, el equipo tiene un proceso claro de escalamiento y no improvisa la comunicación con el proveedor bajo presión.

## Principio rector

Como establece el criterio académico del curso: "La mayoría de proyectos fallan por mala comunicación, no por mala técnica."

Este principio es la razón de ser del plan C1–C8. El sistema de recomendación puede ser técnicamente correcto, pero si el Sponsor no está informado del avance, si la Dirección de Admisiones no valida el catálogo a tiempo, o si el Área de TI no coordina la infraestructura antes del H3, el proyecto fracasa no por defectos técnicos sino por falta de coordinación comunicacional. El plan de comunicaciones es tan crítico como el plan de sprints.

## Restricciones de comunicación

Las siguientes restricciones aplican a todos los canales de comunicación del proyecto:

| # | Restricción | Aplica a | Razón |
|---|---|---|---|
| COM-RC-1 | Los datos personales de los aspirantes de diversificado (nombre, respuestas de encuesta, resultados de recomendación) son datos sensibles. No pueden compartirse fuera del equipo sin consentimiento explícito del aspirante y sin los controles de privacidad documentados en R8. | C5 (Estudiantes), todo el equipo técnico | Protección de datos personales — Riesgo R8 |
| COM-RC-2 | Las métricas internas del proyecto (CPI, SPI, burn rate, estado de riesgos) son información confidencial del equipo. Solo se comparten con el Sponsor (C1) y con el CCB cuando aplica. No se publican en canales accesibles a stakeholders externos sin autorización del PO. | C1, C3 | Gobernanza del proyecto |
| COM-RC-3 | Las decisiones de alcance, aprobaciones de CR y validaciones de entregables no pueden comunicarse por Slack (C3) ni por canales informales. Requieren el canal formal establecido para cada tipo de decisión. | Todos los canales | Control de cambios — anti-patrón 3 |
| COM-RC-4 | El Sponsor (S1 Marroquín) recibe información del proyecto exclusivamente a través del PO Say. Los developers no tienen comunicación directa con el Sponsor sobre temas de alcance, cronograma o presupuesto. | C1, todo el equipo | Gobernanza — RACI de comunicaciones |

## Supuestos de comunicación

| # | Supuesto | Implicación si no se cumple |
|---|---|---|
| COM-SA-1 | El Sponsor (S1 Marroquín) está disponible para los informes C1 quincenales en el canal acordado (presencial o virtual). | Si la disponibilidad falla en más de un ciclo consecutivo, se activa R4 y el PO escala por correo formal con acuse de recibo. |
| COM-SA-2 | La Dirección de Admisiones (S3) responde al formulario de validación C6 dentro del período H4 acordado. | Si S3 no responde antes del cierre del sprint 3, se activa R4 y el PO coordina reunión extraordinaria con C2 de emergencia. |
| COM-SA-3 | El Área de TI (S4) responde a coordinaciones C4 dentro de 5 días hábiles. | Si TI no responde antes del H3, el equipo usa el entorno cloud externo (S10) sin dependencia del entorno institucional. |
| COM-SA-4 | Los estudiantes de diversificado (S8) son reclutables para las sesiones de usabilidad de H6 a través de la coordinación con S3 Admisiones. | Si no hay participantes disponibles, las pruebas de usabilidad se realizan con usuarios sustitutos (estudiantes universitarios de primer año) documentando la desviación. |
