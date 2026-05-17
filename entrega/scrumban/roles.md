# Roles en Scrumban

## Estructura de roles

Scrumban conserva los tres roles de Scrum —Product Owner, Facilitador y Developers— pero redefine el rol central de facilitación. En Scrum puro, el Scrum Master se enfoca en proteger al equipo y facilitar las ceremonias. En Scrumban, el Facilitador tiene una responsabilidad adicional: gestionar el flujo del tablero Kanban, monitorear los límites WIP y detectar cuellos de botella antes de que bloqueen el sprint.

## Asignación de personas

| Rol | Persona | Responsabilidad principal |
| :--- | :--- | :--- |
| Product Owner | Josué Say | Gestión del Product Backlog, priorización, aprobación de trabajo ROM durante el sprint |
| Facilitador | Mathew Cordero | Facilitación de ceremonias y gestión activa del flujo del tablero Kanban |
| Developer | Gustavo Cruz Bardales | Desarrollo de funcionalidades, tareas BID y ROM asignadas |
| Developer | Javier Chen Gonzalez | Desarrollo de funcionalidades, tareas BID y ROM asignadas |
| Developer | Pedro Guzmán Mayen | Desarrollo de funcionalidades, tareas BID y ROM asignadas |

Nota: el Facilitador Mathew Cordero también actúa como ejecutor técnico cuando la capacidad del sprint lo requiere. En ese caso, el equipo cuenta con 4 ejecutores activos, lo que fundamenta los límites WIP definidos para el tablero.

## Responsabilidades por rol

### Product Owner — Josué Say

- Mantener y priorizar el Product Backlog con criterios de valor para UVG.
- Definir el Sprint Goal al inicio de cada sprint, junto con el equipo.
- Participar en el Sprint Planning para confirmar el trabajo BID comprometido y la capacidad ROM reservada.
- Aprobar o rechazar explícitamente toda solicitud de trabajo ROM que llegue durante el sprint, verificando que no exceda el umbral del 20% de la capacidad.
- Participar en la Sprint Review para aceptar o rechazar el incremento producido.
- Decidir si una interrupción ROM supera el umbral incluido y activar el proceso de cargo adicional según el SLA.

### Facilitador — Mathew Cordero

- Facilitar las cuatro ceremonias del sprint: Planning, Daily Scrumban, Review y Retrospectiva.
- Monitorear diariamente el estado del tablero Kanban: detectar tarjetas bloqueadas, verificar que los límites WIP no se excedan y gestionar los cuellos de botella en las columnas Review y Testing.
- Registrar las interrupciones ROM que ingresen al sprint, con fecha y origen, para el reporte de la Sprint Review.
- Calcular y reportar las seis métricas Scrumban al cierre de cada sprint.
- Gestionar el flujo de trabajo entre columnas: asegurarse de que las tareas avancen sin estancarse, especialmente entre In Progress, Testing y Review.
- Identificar patrones de bloqueo recurrentes y proponer mejoras en la Retrospectiva.

**Diferencia respecto al Scrum Master de Scrum puro:** el Scrum Master en Scrum se enfoca en proteger al equipo de interferencias externas y facilitar las ceremonias. El Facilitador en Scrumban hace todo eso y, además, es el responsable explícito del flujo del tablero Kanban: monitorea WIP, detecta cuellos de botella, calcula métricas de flujo (Cycle Time, Throughput) y toma decisiones sobre la distribución del trabajo en el tablero. Es un rol que combina facilitación de proceso con operación del sistema de flujo.

### Developers — Gustavo Cruz Bardales, Javier Chen Gonzalez, Pedro Guzmán Mayen

- Participar en el Sprint Planning para estimar y comprometer las tareas BID del sprint.
- Mover sus propias tarjetas en el tablero Kanban conforme avanzan en el trabajo, respetando los límites WIP por columna.
- Reportar bloqueos en el Daily Scrumban para que el Facilitador pueda gestionar el flujo.
- Ejecutar tanto tareas BID como tareas ROM aprobadas por el PO, dentro de los límites WIP.
- Participar en la Sprint Review presentando el incremento desarrollado.
- Participar en la Retrospectiva con observaciones sobre el flujo de trabajo y la calidad del proceso.
- Asegurarse de que cada tarea completada cumple los 8 criterios del DoD antes de moverla a Done.

## Regla de operación del flujo

En Scrumban, cada Developer no puede tener más de una tarea activa en la columna In Progress simultáneamente. Este límite es parte del sistema de WIP del tablero y es responsabilidad de cada Developer respetarlo y del Facilitador verificarlo diariamente.
