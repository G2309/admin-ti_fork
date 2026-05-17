# Ceremonias en Scrumban

## Estructura de ceremonias

Scrumban conserva las cuatro ceremonias de Scrum. Cada una se extiende con elementos de Kanban que reflejan la dimensión de flujo del marco híbrido. Sin estas extensiones, el equipo estaría haciendo Scrum con tablero añadido, no Scrumban genuino.

## Sprint Planning

**Propósito:** comprometer el trabajo BID del sprint y reservar explícitamente la capacidad ROM.

**Formato:**

- Horario: 9:00 — 13:00
- Duración: 4 horas
- Participantes: todos (PO, Facilitador, 3 Developers)
- Frecuencia: inicio de cada sprint

**Agenda:**

1. El PO presenta las prioridades del Product Backlog y el Sprint Goal propuesto.
2. El equipo estima la velocidad del sprint: 20 SP.
3. Se calcula la capacidad BID disponible: $20 \times 0.8 = 16$ SP.
4. Se calcula y declara la capacidad ROM reservada: $20 \times 0.2 = 4$ SP. Esta reserva se hace pública en el Planning y se registra en el tablero.
5. El equipo selecciona tareas del Product Backlog hasta completar los 16 SP BID disponibles.
6. Las tareas seleccionadas se colocan en la columna Backlog del tablero Kanban con sus estimaciones.
7. Se definen los criterios de aceptación de cada tarea antes de cerrar el Planning.

**Diferencia respecto a Scrum puro:** en Scrum puro se compromete el 100% de la capacidad. En Scrumban, la reserva ROM es un paso explícito del Planning. Si no se declara, el equipo no tiene mecanismo formal para absorber trabajo no planificado sin romper el sprint.

## Daily Scrumban

**Propósito:** sincronizar el equipo, identificar bloqueos y verificar el estado del flujo en el tablero.

**Formato:**

- Duración: 15 minutos
- Participantes: todos
- Frecuencia: cada día hábil del sprint
- Horario: a definir por el equipo al inicio del proyecto

**Agenda:**

1. Cada Developer responde las tres preguntas estándar de Scrum:
   - ¿Qué hice ayer?
   - ¿Qué haré hoy?
   - ¿Hay algún bloqueo?
2. El Facilitador revisa el estado del tablero Kanban:
   - ¿Hay columnas que alcanzaron su límite WIP?
   - ¿Hay tarjetas bloqueadas o estancadas en Testing o Review?
   - ¿El Throughput del sprint va en línea con el comprometido (3–4 tareas por semana)?
3. Si hay cuellos de botella, el Facilitador propone una acción inmediata: reasignar revisor, dividir una tarea, o escalar al PO.

**Diferencia respecto a Scrum puro:** el Daily Scrum de Scrum puro se centra exclusivamente en las tres preguntas de sincronización del equipo. El Daily Scrumban incluye la revisión explícita del estado del tablero y los límites WIP. Sin esta revisión, el Facilitador no puede detectar cuellos de botella hasta que ya afectaron la velocidad del sprint.

## Sprint Review

**Propósito:** presentar el incremento desarrollado, aceptar o rechazar entregables y reportar el ratio BID/ROM real del sprint.

**Formato:**

- Duración: 2 horas (estimado estándar para este proyecto)
- Participantes: todos, más stakeholders de UVG si corresponde
- Frecuencia: cierre de cada sprint

**Agenda:**

1. El equipo presenta el incremento: funcionalidades completadas durante el sprint.
2. El PO acepta o rechaza cada ítem del incremento según los criterios de aceptación definidos en el Planning.
3. El Facilitador reporta el ratio BID/ROM real del sprint:
   - SP completados en tareas BID vs SP completados en tareas ROM.
   - Número de interrupciones ROM registradas durante el sprint.
   - Si el trabajo ROM superó el umbral del 20%, se reporta como alerta.
4. El PO ajusta el Product Backlog según el resultado de la Review.

**Diferencia respecto a Scrum puro:** la Sprint Review de Scrum puro se centra en el incremento. La Review de Scrumban incluye el reporte del ratio BID/ROM real, que es un dato contractual relevante para el SLA y para la facturación del sprint. Sin este reporte, no es posible verificar si el equipo operó dentro del umbral ROM acordado.

## Retrospectiva

**Propósito:** mejorar el proceso del equipo y revisar las métricas de flujo Kanban del sprint.

**Formato:**

- Duración: 1.5 horas (estimado estándar)
- Participantes: todos
- Frecuencia: cierre de cada sprint, después de la Review

**Agenda:**

1. Revisión estándar de Scrum: ¿qué funcionó bien?, ¿qué no funcionó?, ¿qué se cambia para el siguiente sprint?
2. Revisión de métricas de flujo Kanban del sprint:
   - Throughput real vs estimado: ¿se completaron 3–4 tareas por semana?
   - Cycle Time promedio de las tareas del sprint: ¿se mantuvieron dentro del límite de 10 días hábiles?
   - Cuellos de botella identificados: ¿en qué columna se acumularon las tarjetas más veces?
   - Número de tareas que retrocedieron de Testing o Review a In Progress.
3. El Facilitador propone ajustes al tablero, a los límites WIP o al proceso de Testing/Review si los datos lo justifican.
4. El equipo acuerda las acciones de mejora para el siguiente sprint.

**Diferencia respecto a Scrum puro:** la Retrospectiva de Scrum puro se centra en el proceso del equipo. La Retrospectiva de Scrumban incluye el análisis de métricas de flujo Kanban. Sin este análisis, el equipo no puede identificar si los cuellos de botella son sistémicos o episódicos, ni tomar decisiones fundamentadas sobre ajustes al tablero.
