# Water-Scrum-Fall: Marco Metodológico Integrado del Proyecto

## Definición del modelo

Water-Scrum-Fall es un modelo híbrido de gestión de proyectos que combina tres enfoques en secuencia:

- **Water** (cascada/PMI): planificación formal y estructurada al inicio, con énfasis en la definición del alcance, el contrato y los documentos de gobernanza.
- **Scrum**: ejecución iterativa e incremental del trabajo técnico, organizada en sprints con ceremonies ágiles.
- **Fall** (cascada/PMI): cierre formal con entrega estructurada, validación del alcance comprometido y firma de documentos de cierre.

El modelo no es un anti-patrón ágil. Es una respuesta pragmática a entornos donde el cliente es institucional, existe un contrato formal de alcance, y la organización requiere documentación de gobernanza antes de autorizar el inicio de la ejecución.

## Por qué se adopta en este proyecto

Este proyecto opera en un entorno con características específicas que justifican el modelo:

- El Sponsor es un catedrático de UVG con un calendario académico fijo que determina la fecha de entrega (22 abr 2027).
- El cliente institucional (UVG, Dirección de Admisiones) necesita documentos formales de planificación para aprobar el inicio de la ejecución.
- El alcance inicial puede definirse con suficiente precisión para un contrato (6 épicas, 32 HU, catálogo de carreras 2026).
- El equipo es pequeño (5 personas) y necesita la flexibilidad de Scrum en la ejecución sin renunciar a la gobernanza PMI que el cliente exige.
- El cierre requiere un Acta de Cierre firmada por el Sponsor, lo que exige el rigor del cierre PMI.

Adoptar Scrum puro sin la fase PMI de planificación hubiera significado comenzar la ejecución sin alcance definido, sin gestión de riesgos documentada y sin plan de comunicaciones con los 10 stakeholders. Adoptar PMI puro hubiera significado perder la adaptabilidad que requiere el desarrollo de software con un cliente que no tiene requerimientos completamente estables.

## Las 3 fases del modelo con fechas

### Fase 1 — Planificación PMI

| Campo | Detalle |
|---|---|
| Período | 10 de marzo de 2026 – 31 de diciembre de 2026 |
| Marco | PMI (10 áreas de conocimiento) |
| Hitos | H1 (inicio planificación, 10 mar 2026), H2 (entrega documentos, 10 mar 2026) |
| Responsable principal | PO Josué Say + SM Mathew Cordero |

**Qué produce:**

- Project Charter firmado por el Sponsor.
- WBS/EDT de 3 niveles (épicas $\to$ HU $\to$ tareas).
- Plan de riesgos con R1–R9 identificados y con estrategias de respuesta.
- Plan de comunicaciones C1–C8.
- Plan de adquisiciones (SLA con proveedor cloud S10).
- Registro de stakeholders con Matriz Poder-Interés.
- Plan del cronograma (Gantt macro H1–H8 + Gantt micro 8 sprints).
- Plan de calidad (DoR, DoD, criterios de aceptación).
- Plan de control de cambios (proceso CR, composición CCB).
- Plan de EVM para monitoreo durante la ejecución.

### Fase 2 — Ejecución Ágil (Scrum + Kanban/Scrumban + XP)

| Campo | Detalle |
|---|---|
| Período | 1 de enero de 2027 – 22 de abril de 2027 |
| Marco | Scrum (sprints) + Kanban/Scrumban (flujo diario) + XP (prácticas técnicas) |
| Hitos | H3 (inicio sprint 1), H4 (validación catálogo), H5 (motor funcional), H6 (pruebas usabilidad), H7 (entrega MVP) |
| Responsable principal | SM Mathew Cordero (ceremonies) + Developers (entregables técnicos) |

**Qué produce:**

- 8 sprints ejecutados con ceremonies completas (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective).
- Incrementos funcionales al cierre de cada sprint.
- Tablero Kanban/Scrumban actualizado con cycle time monitoreado.
- Columna Code Review activa cuando se aplican prácticas XP.
- Informes quincenales al Sponsor (C1) con métricas EVM.
- Actas de reunión por hito funcional con Admisiones (C2).
- Registro de CRs si aplica durante la ejecución.

### Fase 3 — Cierre PMI

| Campo | Detalle |
|---|---|
| Período | Abril–mayo de 2027 (posterior al sprint 8) |
| Marco | PMI (procesos de cierre) |
| Hito | H8 (firma Acta de Cierre, por confirmar con Sponsor) |
| Responsable principal | PO Josué Say |

**Qué produce:**

- Reporte EVM final (CPI y SPI del proyecto completo).
- Lecciones aprendidas documentadas.
- Acta de Cierre firmada por el Sponsor (H8).
- Entrega formal del MVP al cliente.
- Archivo del proyecto (documentos de planificación + artefactos de ejecución).

## Cómo el control de cambios conecta Fase 1 y Fase 2

La Fase 1 produce un contrato de alcance fijo (Charter + WBS). La Fase 2 ejecuta ese alcance con iteraciones adaptables. La tensión entre "alcance fijo" y "backlog adaptable" se resuelve mediante el proceso formal de control de cambios:

- Todo cambio al alcance comprometido en Fase 1 que surja durante Fase 2 debe seguir el proceso CR (solicitud $\to$ evaluación de impacto $\to$ decisión CCB $\to$ implementación/archivo $\to$ comunicación).
- El CCB básico (PO + SM) gestiona cambios menores; el CCB ampliado (PO + SM + Sponsor) gestiona cambios mayores.
- Los cambios aprobados se incorporan al backlog sin invalidar el contrato original; se documentan como desviaciones formales.
- Esto permite que el backlog evolucione (naturaleza ágil) sin que el cliente perciba que el alcance comprometido se abandonó (naturaleza contractual).

## Anti-patrón evitado

Un error frecuente en proyectos académicos y corporativos es omitir las áreas PMI "porque el equipo trabaja ágil". Este anti-patrón produce:

- Inicio de ejecución sin alcance definido formalmente.
- Riesgos no identificados que se materializan sin plan de respuesta.
- Stakeholders no gestionados que escalan al Sponsor directamente sin canal formal.
- Cierre sin documentación, con entrega informal que el cliente no puede validar ni firmar.

Water-Scrum-Fall no es una contradicción metodológica. Es la respuesta estructurada al entorno real del proyecto: cliente institucional + equipo ágil + fecha fija + entregable de software.

## Riesgos específicos del modelo híbrido

El modelo Water-Scrum-Fall introduce riesgos que no existen en Scrum puro ni en cascada pura. Son riesgos de la transición entre fases y de la tensión entre la rigidez PMI y la adaptabilidad ágil:

| Riesgo híbrido | Descripción | Mitigación aplicada en este proyecto |
|---|---|---|
| Sobreplanificación en Fase 1 | Dedicar demasiado tiempo a la planificación PMI y llegar tarde al inicio de la ejecución, perdiendo sprints disponibles. | H1 y H2 son el mismo día (10 mar 2026), lo que reduce la duración de la Fase 1. Los documentos PMI se producen en paralelo, no secuencialmente. |
| Rigidez del alcance comprometido en Charter | El Charter fija el alcance antes de conocer los detalles de implementación. Si los primeros sprints revelan que el alcance subestimó la complejidad, el equipo enfrenta presión sin mecanismo de ajuste formal. | El proceso de CR y el CCB permiten renegociar el alcance formalmente. El buffer del sprint 8 absorbe la complejidad revelada en ejecución. |
| Desconexión entre Fase 1 (PMI) y Fase 2 (Scrum) | Los documentos producidos en la Fase 1 pueden volverse irrelevantes durante la ejecución ágil si el equipo los trata como artefactos de inicio y los abandona. | Los documentos PMI (riesgos, comunicaciones, EVM) se actualizan activamente durante la Fase 2. No son artefactos de inicio: son instrumentos vivos de gobernanza. |
| Cierre prematuro sin Acta firmada | El equipo puede considerar el proyecto terminado al entregar el MVP (H7) y no ejecutar correctamente la Fase 3 (Fall), dejando el proyecto sin cierre formal. | H7 y H8 son hitos distintos y explícitos. El SM tiene la responsabilidad de no declarar el proyecto cerrado hasta que el Acta de Cierre esté firmada por el Sponsor. |
| Pérdida de agilidad por exceso de gobernanza | Si el proceso de cambios (CR $\to$ CCB) se aplica también a ajustes menores de la implementación técnica interna (refactors, mejoras de código), el equipo pierde velocidad sin beneficio real. | El proceso de CR aplica únicamente a cambios de alcance externo (funcionalidades comprometidas con el Sponsor). Los cambios técnicos internos del equipo (deuda técnica, refactors) no requieren CR: son decisiones del equipo en el sprint. |
