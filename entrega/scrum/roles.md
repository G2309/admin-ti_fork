# Roles del equipo Scrum

## Marco 3-5-3 de Scrum

Scrum define su estructura mediante el marco 3-5-3: 3 roles (o "responsabilidades"), 5 eventos y 3 artefactos. Este documento cubre los 3 roles del equipo Scrum del proyecto.

Los 3 roles son:

- **Product Owner** — responsable del qué y del valor del producto
- **Scrum Master** — responsable del cómo y de la adopción del proceso
- **Developers** — responsables de construir el incremento

El equipo Scrum es autoorganizado, interfuncional y no tiene jerarquías internas entre los Developers. Scrum recomienda equipos de entre 4 y 6 personas para mantener comunicación fluida sin sobrecarga de coordinación. Este equipo cuenta con 5 miembros, dentro del rango recomendado.

## Composición del equipo

| Rol | Nombre | FTE |
|---|---|---|
| Product Owner | Josué Say | 0.7 interno / 1.0 facturado |
| Scrum Master | Mathew Cordero | — |
| Developer | Gustavo Cruz Bardales | — |
| Developer | Javier Chen Gonzalez | — |
| Developer | Pedro Guzmán Mayen | — |

El FTE del Product Owner refleja una dedicación parcial interna al proyecto (0.7), aunque para efectos de facturación se contabiliza como dedicación completa (1.0). Los Developers trabajan en dedicación definida por sprint.

## Product Owner: Josué Say

### Responsabilidades en este proyecto

- Definir, mantener y priorizar el Product Backlog de forma continua durante los sprints operativos (enero–abril 2027).
- Redactar y aprobar las historias de usuario en formato COMO / QUIERO / PARA antes de que ingresen al Sprint Planning.
- Validar que cada historia cumpla la Definition of Ready (DoR) antes de someterla a estimación.
- Garantizar que el Product Goal guíe las decisiones de priorización a lo largo de los 8 sprints.
- Participar en el Sprint Review para aceptar o rechazar el incremento entregado por el equipo.
- Representar los intereses de los stakeholders de UVG Campus Central ante el equipo técnico.
- Gestionar expectativas sobre el alcance del MVP frente a las características secundarias de EP05 y EP06.

### Autoridad del Product Owner

El Product Owner tiene la autoridad exclusiva sobre el orden del Product Backlog. Ningún miembro externo al equipo puede ordenar el trabajo de los Developers directamente; toda solicitud pasa por el PO.

## Scrum Master: Mathew Cordero

### Responsabilidades en este proyecto

- Facilitar los 4 eventos Scrum: Planning, Daily, Review y Retrospective.
- Proteger al equipo de interrupciones externas durante el sprint activo.
- Identificar y eliminar impedimentos que bloqueen el avance de los Developers.
- Asegurar que el equipo comprende y aplica correctamente el marco Scrum.
- Apoyar al Product Owner en la escritura de historias bien formadas y en el refinamiento del backlog.
- Garantizar que las ceremonias respetan su duración máxima (time-box).
- Facilitar las retrospectivas para que el equipo identifique mejoras concretas en el proceso.
- Coordinar con el PM del componente PMI (fase de planificación 2026 y cierre post-abril 2027) para que la transición Water-Scrum-Fall sea fluida.

### Rol del Scrum Master en Water-Scrum-Fall

Este proyecto sigue un modelo híbrido: PMI planifica (2026) + Scrum ejecuta (2027) + PMI cierra. El Scrum Master actúa como puente entre la fase de planificación PMI y la ejecución ágil, asegurando que los artefactos de entrada al primer sprint (backlog refinado, épicas aprobadas) estén listos al inicio de enero 2027.

## Developers: Cruz, Chen, Guzmán

### Responsabilidades en este proyecto

- Estimar en story points las historias presentadas por el PO durante el Sprint Planning.
- Descomponer las historias aceptadas en tareas técnicas dentro del Sprint Backlog.
- Construir el incremento del producto sprint a sprint, cumpliendo la Definition of Done.
- Actualizar diariamente el estado del trabajo en el Daily Scrum.
- Validar sus propios criterios de aceptación antes de presentar el incremento en el Sprint Review.
- Mantener la calidad técnica conforme a los criterios XP complementarios (TDD, CI/CD, deuda técnica cero deliberada).
- Autoorganizarse para decidir internamente cómo distribuir el trabajo de cada sprint.

### Distribución de la capacidad técnica

El equipo tiene una velocidad declarada de 20 story points por sprint. Esta velocidad fue acordada por los propios Developers en base a su conocimiento del alcance técnico del sistema de recomendación. Los 3 Developers son interfuncionales: cubren desarrollo frontend, backend y lógica del motor de recomendación sin depender de recursos externos.

## Interacción de los roles en los eventos

### Sprint Planning

El PO presenta las historias priorizadas en la parte superior del Product Backlog que cumplen el DoR. Los Developers estiman, negocian el alcance del sprint y crean el Sprint Backlog con sus tareas técnicas. El SM facilita la sesión. Al finalizar, el equipo acuerda el Sprint Goal.

### Daily Scrum

Los Developers coordinan su trabajo de las próximas 24 horas. El SM observa y elimina impedimentos identificados. El PO puede asistir como observador, no como participante activo.

### Sprint Review

El equipo presenta el incremento construido a los stakeholders de UVG. El PO decide formalmente qué se acepta. El backlog se ajusta según el feedback recibido. El SM facilita la sesión.

### Sprint Retrospective

El equipo completo (PO, SM y Developers) inspecciona su propio proceso. El SM facilita la retrospectiva. Se producen compromisos de mejora concretos para el siguiente sprint.
