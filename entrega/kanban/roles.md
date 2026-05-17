# Roles del equipo en el flujo Kanban

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Kanban no prescribe roles fijos

A diferencia de Scrum, el método Kanban no define roles obligatorios. No existe un equivalente directo al Scrum Master, al Product Owner ni al Development Team como categorías formales. Kanban parte del principio de que el equipo adopta sus roles existentes y los adapta al flujo del tablero, sin imponer una estructura de responsabilidades predefinida.

Esto significa que los títulos del equipo provienen de la organización o del proyecto, no del método. Kanban solo exige que el trabajo sea visible, que los límites WIP se respeten y que las políticas del proceso sean explícitas para todos.

## Equipo del proyecto

| Nombre | Rol en el proyecto | Participación en el flujo |
|---|---|---|
| Josué Say | Project Manager (PM) | Priorización y comunicación |
| Mathew Cordero | Líder Técnico | Ejecutor activo + validación técnica |
| Gustavo Cruz Bardales | Developer | Ejecutor activo |
| Javier Chen Gonzalez | Developer | Ejecutor activo |
| Pedro Guzmán Mayen | Developer | Ejecutor activo |

**Ejecutores activos del flujo: 4** (Mathew Cordero + 3 Developers)

El PM no cuenta como ejecutor activo porque no toma tareas técnicas en In Progress. Su función en el flujo es garantizar que el Backlog esté priorizado correctamente y que los impedimentos de comunicación o de alcance se resuelvan antes de que bloqueen el trabajo técnico.

## Responsabilidades de cada rol en el flujo Kanban

### Project Manager — Josué Say

- Prioriza el orden de las tareas en la columna To Do según valor para el cliente e impacto operativo.
- Es el único rol autorizado para reordenar el Backlog o escalar tareas de prioridad.
- Monitorea semanalmente las métricas de flujo: Cycle Time, Throughput y Lead Time.
- Gestiona la comunicación con el cliente (UVG Campus Central) y actualiza el estado del flujo en las revisiones mensuales del SLA.
- No mueve tareas dentro del tablero, salvo para actualizar el estado de prioridad en el Backlog.
- Cuando el Throughput real cae por debajo de 0.78 tareas por día de forma sostenida, convoca una revisión del flujo.

### Líder Técnico — Mathew Cordero

- Toma tareas desde To Do y las mueve a In Progress como cualquier ejecutor activo.
- Tiene autoridad para validar que una tarea cumple los criterios de aceptación antes de moverla a Done.
- En columna Review, es el responsable principal de la validación funcional cuando se requiere criterio técnico especializado.
- Documenta las observaciones cuando una tarea regresa de Testing o Review a In Progress.
- Coordina con los developers la resolución de bloqueos técnicos sin necesidad de escalar al PM.
- Puede proponer cambios experimentales al flujo (por ejemplo: agregar una columna Code Review si se incorporan prácticas XP) y los presenta al equipo con datos de respaldo.

### Developers — Cruz Bardales, Chen Gonzalez, Guzmán Mayen

- Cada developer trabaja en una tarea activa a la vez. No pueden iniciar una nueva tarea si ya tienen una en In Progress.
- Son responsables de mover su tarea de In Progress a Testing cuando la implementación está terminada y probada localmente.
- Si una tarea falla en Testing, la regresan a In Progress y documentan las observaciones en el ítem del tablero antes de reanudar el trabajo.
- Respetan el límite WIP de la columna To Do (máximo 8): no pueden "reservar" tareas informalmente fuera del tablero.
- Notifican al Líder Técnico o al PM cuando una tarea está bloqueada por dependencia externa para que se etiquete correctamente y no distorsione las métricas de flujo.

## Diferencia respecto a los roles en Scrum

| Dimensión | Scrum | Kanban (este proyecto) |
|---|---|---|
| Roles prescritos | Sí: Scrum Master, Product Owner, Development Team | No: los roles se toman de la estructura existente del proyecto |
| Quién prioriza el backlog | Product Owner | PM (Josué Say) — rol equivalente funcional, sin título formal Kanban |
| Quién elimina impedimentos | Scrum Master | PM y Líder Técnico de forma compartida |
| Quién ejecuta el trabajo | Development Team | Los 4 ejecutores activos (Líder Técnico + 3 Developers) |
| Iteraciones fijas | Sí: sprints de duración fija | No: flujo continuo sin iteraciones |
| Planificación | Al inicio de cada sprint | Continua, por prioridad en el Backlog |
| Retrospectiva formal | Sí, al final de cada sprint | No prescrita; la mejora ocurre en la revisión semanal de métricas |
| Facturación del servicio | Por sprint o por entregable | Mensual, independiente del número de tareas completadas |

La diferencia más importante en la práctica es que en Kanban no existe el Scrum Master como rol dedicado a facilitar ceremonias. Las responsabilidades que en Scrum corresponden a ese rol se distribuyen entre el PM (priorización, comunicación, impedimentos de negocio) y el Líder Técnico (coordinación técnica, validación, bloqueos técnicos).
