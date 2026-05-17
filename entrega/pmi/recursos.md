# Área 6 PMI: Gestión de los Recursos

## Descripción del área

La Gestión de los Recursos es el área del PMBOK responsable de identificar, adquirir, gestionar y liberar los recursos humanos y materiales necesarios para el proyecto. En proyectos de software, el recurso dominante es el equipo humano: su disponibilidad, sus roles y su carga de trabajo determinan la capacidad real del proyecto.

En este proyecto, el equipo está compuesto por 5 personas con roles definidos y FTE declarados. La gestión de recursos se materializa en la tabla de equipo, el factor de carga organizacional y la matriz RACI.

## Tabla del equipo

| Rol | Nombre | FTE interno | FTE facturado | Responsabilidades principales |
|---|---|---|---|---|
| Product Owner (PO) | Josué Say | 0.7 | 1.0 | Definición y priorización del backlog, representación del cliente, gestión de stakeholders, control de cambios, informes C1 al Sponsor |
| Scrum Master (SM) | Mathew Cordero | 1.0 | 1.0 | Facilitación de ceremonies, eliminación de impedimentos, protección del equipo del scope creep, gestión de canales de comunicación interna (C3) |
| Developer líder técnico | Gustavo Cruz Bardales | 1.0 | 1.0 | Arquitectura técnica, coordinación con Área TI UVG (C4), gestión del entorno cloud, liderazgo técnico en EP03 y EP04 |
| Developer seguridad | Javier Chen Gonzalez | 1.0 | 1.0 | Implementación de cifrado y controles de seguridad, revisión de vulnerabilidades (R8), coordinación con proveedor cloud ante incidencias (C7) |
| Developer | Pedro Guzmán Mayen | 1.0 | 1.0 | Desarrollo de funcionalidades asignadas en backlog, participación en pair programming (XP), code review |

## Explicación del FTE 0.7 del PO

El Product Owner Josué Say tiene un FTE interno de 0.7, lo que significa que dedica el 70% de su tiempo disponible al proyecto. El 30% restante corresponde a responsabilidades organizacionales externas al proyecto (carga docente, reuniones institucionales u otras obligaciones académicas).

Sin embargo, el FTE facturado al cliente es 1.0. Esta distinción es una simplificación de facturación: el modelo de precios presenta al PO como recurso a tiempo completo para uniformidad del contrato. Los costos indirectos (herramientas, infraestructura, energía) se incluyen explícitamente en la partida de Costos adicionales del presupuesto, no se agregan como porcentaje sobre el salario.

Esta distinción es importante para la planificación:

- La capacidad real del PO para tareas de backlog, reuniones y respuesta a stakeholders es del 70%, no del 100%.
- Los sprints deben planificarse considerando que el PO no tiene disponibilidad completa para refinement, meetings y gestión de CRs en simultáneo.
- El SM debe proteger al equipo de demandas que excedan la disponibilidad real del PO durante los sprints.

## Factor de carga organizacional (alpha)

Algunos modelos de costos de proyectos de software incluyen un factor alpha para representar costos indirectos organizacionales (prestaciones, overhead administrativo, tiempo no productivo). En este proyecto, el factor alpha no se aplica al burn rate del equipo. Los costos indirectos se registran explícitamente en la partida de Costos adicionales (licencias, hardware, infraestructura cloud, energía eléctrica), lo que hace el presupuesto más transparente y trazable que un porcentaje genérico sobre salarios.

Para la planificación de capacidad: la distinción relevante es el FTE interno del PO (0.7), que determina su disponibilidad real para tareas de backlog, refinement y gestión de stakeholders. Los demás miembros del equipo tienen FTE interno = 1.0.

## RACI — Matriz de responsabilidades simplificada

La RACI (Responsible, Accountable, Consulted, Informed) define quién hace qué en las actividades clave del proyecto.

| Actividad | PO Say | SM Cordero | Dev Cruz | Dev Chen | Dev Guzmán |
|---|---|---|---|---|---|
| Priorización del backlog | A/R | C | C | C | C |
| Sprint Planning | A | R | C | C | C |
| Daily Scrum | I | R | R | R | R |
| Desarrollo de funcionalidades | I | I | R | R | R |
| Code Review | I | I | A/R | R | R |
| Integración y despliegue | I | I | A/R | R | I |
| Pruebas funcionales | R | A | C | C | C |
| Revisión de seguridad (R8) | A | I | C | R | I |
| Control de cambios (CCB) | A/R | R | C | C | C |
| Informe quincenal Sponsor (C1) | A/R | C | I | I | I |
| Comunicación con Admisiones (C2) | A/R | I | I | I | I |
| Coordinación con TI UVG (C4) | I | I | A/R | C | I |
| Coordinación con proveedor cloud (C7) | A | I | C | R | I |
| Sprint Review | R | A/R | R | R | R |
| Sprint Retrospective | C | A/R | R | R | R |

**Leyenda:** R = Responsible (ejecuta), A = Accountable (rinde cuentas), C = Consulted (consultado), I = Informed (informado)

## Nota: SAFe y Skills Matrix no aplican

**SAFe (Scaled Agile Framework):** No aplica a este proyecto. SAFe es un framework de escalamiento ágil diseñado para organizaciones con múltiples equipos coordinados (mínimo 3 equipos ART — Agile Release Train). Este proyecto tiene un solo equipo de 5 personas con roles claramente definidos. Aplicar SAFe sería sobredimensionamiento metodológico injustificado que añadiría overhead de coordinación sin ningún beneficio. Ver declaración completa en `safe.md`.

**Skills Matrix:** No aplica a este proyecto. La Skills Matrix es una herramienta de gestión de recursos diseñada para organizaciones con múltiples equipos que comparten un pool de talento. Con 5 personas y roles fijos durante toda la Fase 2, la asignación de responsabilidades se gestiona completamente con la RACI declarada arriba. Una Skills Matrix para 5 personas con roles estables añadiría documentación sin valor operativo.

## Plan de liberación del equipo

Al cierre del proyecto (post H7, durante la Fase 3), el equipo se libera de forma ordenada:

| Fase | Actividad | Responsable | Momento |
|---|---|---|---|
| Cierre técnico | Entrega del código fuente y documentación técnica al cliente (UVG / Admisiones). El repositorio Git con el historial completo es el artefacto de transferencia. | Developer Cruz (líder técnico) | Sprint 8 + post-sprint |
| Cierre de adquisiciones | Cierre del contrato cloud con S10 o transferencia de titularidad al cliente. | PO Say + Developer Chen | Post H7 — ver `adquisiciones.md` |
| Cierre de gobernanza | Entrega del archivo del proyecto: documentos PMI, registro de CRs, informes C1, actas H4/H5/H6, reporte EVM final. | PO Say | Post H7 — antes de H8 |
| Firma del Acta de Cierre | H8: el PO obtiene la firma del Sponsor. El proyecto queda formalmente cerrado. | PO Say | Post H7 |
| Liberación de recursos humanos | Los 5 miembros del equipo quedan disponibles para reasignación tras H8. No existen obligaciones de mantenimiento post-cierre en el alcance de este contrato. | PO Say | Post H8 |

**Nota sobre mantenimiento:** El soporte y mantenimiento post-cierre del sistema están explícitamente fuera del alcance del contrato académico 2026–2027 (ver Out of Scope en `alcance.md`). Si UVG desea continuar operando el sistema, deberá contratar un nuevo proyecto o acuerdo de soporte con el equipo o con un proveedor distinto.
