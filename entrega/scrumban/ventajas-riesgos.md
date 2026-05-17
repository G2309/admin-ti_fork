# Ventajas y Riesgos de Scrumban

## Cuándo Scrumban es preferible a Scrum puro o Kanban puro

Scrumban es la elección adecuada cuando se cumplen simultáneamente las siguientes condiciones:

- El proyecto tiene una dimensión de desarrollo iterativo planificado que se beneficia de la cadencia, el Sprint Goal y las ceremonias de revisión de Scrum.
- El proyecto también tiene una dimensión de trabajo no planificado recurrente que Scrum puro no puede absorber sin romper el sprint o generar fricciones con el cliente.
- El equipo necesita visibilidad del flujo y control de carga de trabajo (WIP) que Scrum puro no provee de forma nativa.
- El cliente o los stakeholders requieren compromisos de entrega periódicos (revisiones por sprint) y al mismo tiempo necesitan un canal de respuesta a urgencias.

Scrum puro es preferible cuando el alcance es completamente estable, el trabajo no planificado es prácticamente inexistente y el equipo no necesita métricas de flujo continuo.

Kanban puro es preferible cuando no hay un horizonte de entrega definido, el trabajo llega de forma continua y sin agrupación en iteraciones, y las revisiones periódicas con stakeholders no son necesarias.

## Ventajas de Scrumban para este proyecto

### Ventaja 1: Absorción de trabajo no planificado sin romper el sprint

Las épicas EP04 (Motor de recomendación) y EP05 (Análisis de afinidad) concentran la mayor incertidumbre técnica del proyecto. Es previsible que durante los sprints 5 y 6 surjan ajustes no planificados derivados de los resultados del motor de recomendación. Scrumban provee el canal ROM para absorber esos ajustes sin cancelar el sprint ni renegociar el alcance completo.

### Ventaja 2: Visibilidad del flujo en tiempo real

El tablero Kanban con límites WIP permite al Facilitador detectar cuellos de botella antes de que afecten la velocidad del sprint. En Scrum puro, un bloqueo en Testing no es visible hasta el Daily o la Review. En Scrumban, el límite WIP de Testing lo hace visible inmediatamente al llenarse la columna.

### Ventaja 3: Predictibilidad para el cliente (UVG)

Las ceremonias de Scrum (Planning, Review) dan a UVG una cadencia clara de revisión y aceptación de entregables. Kanban puro no ofrece esta estructura. UVG puede planificar demostraciones internas o reportes académicos alineados con el calendario de sprints.

### Ventaja 4: SLA con componente de servicio

La cláusula ROM del SLA formaliza contractualmente la capacidad del equipo para responder a solicitudes no planificadas dentro de un umbral definido. Esto convierte lo que en Scrum puro sería una negociación ad hoc en cada urgencia, en un mecanismo preestablecido con condiciones claras para el cliente.

### Ventaja 5: Métricas combinadas para decisiones informadas

Las seis métricas de Scrumban ofrecen una visión más completa que cualquiera de los dos marcos por separado. El PO puede usar la velocidad y el burndown para decisiones de alcance (Scrum), y usar el Cycle Time y el Throughput para decisiones de proceso y flujo (Kanban). La combinación reduce la dependencia de percepciones subjetivas del equipo sobre su propio desempeño.

## Riesgos propios de Scrumban

### Riesgo 1: Confusión entre Scrumban y "Scrum con tablero"

Si el equipo no comprende la diferencia entre operar Scrumban genuino y simplemente agregar un tablero visual a Scrum, los límites WIP no se respetan, el canal ROM no se usa con disciplina y el resultado es un proceso disfuncional que no aprovecha ninguno de los dos marcos.

**Mitigación en el proyecto:** el Facilitador tiene la responsabilidad explícita de gestionar el flujo del tablero. Los límites WIP son vinculantes, no referenciales. Si un Developer intenta exceder el límite WIP de In Progress, el Facilitador interviene y redirige al Developer a revisar tareas bloqueadas en Testing o Review.

### Riesgo 2: Abuso del canal ROM

Si el cliente (UVG) percibe que el canal ROM es un mecanismo para agregar alcance sin costo adicional, el equipo puede verse inundado de solicitudes no planificadas que superan el umbral repetidamente. Esto destruye la predictibilidad del sprint y aumenta el estrés del equipo.

**Mitigación en el proyecto:** el SLA define explícitamente el umbral ROM incluido (20%, $\approx 4$ SP por sprint) y el cargo por exceder ese umbral. El PO tiene la autoridad y la responsabilidad de rechazar solicitudes ROM que superen el umbral sin acuerdo contractual previo.

### Riesgo 3: Exceso de ceremonias sin valor

Scrumban combina las ceremonias de Scrum con la revisión de métricas de flujo. Si las ceremonias se alargan o se convierten en reuniones de reporte sin toma de decisiones, el equipo pierde tiempo de desarrollo y percibe las ceremonias como carga.

**Mitigación en el proyecto:** cada ceremonia tiene duración fija y agenda definida. El Facilitador es responsable de mantener el tiempo. Si la revisión de métricas de flujo en la Retrospectiva no genera acciones concretas, se reduce el tiempo dedicado a esa revisión en el siguiente sprint.

### Riesgo 4: Estimación incorrecta de la proporción BID/ROM

Si el 20% ROM resulta insuficiente para el volumen real de trabajo no planificado en los sprints con mayor incertidumbre técnica (S5, S6), el equipo deberá rechazar trabajo ROM frecuentemente o absorberlo a expensas del BID comprometido, afectando la velocidad del sprint.

**Mitigación en el proyecto:** el Facilitador monitorea el ratio BID/ROM real en cada sprint. Si en dos sprints consecutivos el ROM real supera el 20%, el equipo y el PO revisan si ajustar la proporción a 70/30 para los sprints restantes o si las solicitudes ROM corresponden en realidad a expansión de alcance (que no debe entrar por el canal ROM).

### Riesgo 5: Dependencia en el Facilitador como punto único de fallo

La gestión del flujo del tablero, el cálculo de métricas y el registro de interrupciones ROM recaen principalmente en el Facilitador. Si Mathew Cordero no está disponible por varios días, el proceso de monitoreo del flujo se detiene.

**Mitigación en el proyecto:** el Facilitador documenta en el tablero el estado de todas las métricas con frecuencia diaria. Josué Say como PO puede asumir temporalmente la revisión del tablero si el Facilitador no está disponible. Esta es una contingencia, no un esquema permanente.
