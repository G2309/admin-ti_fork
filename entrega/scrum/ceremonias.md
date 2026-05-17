# Ceremonias Scrum

## Marco de eventos

Scrum define 5 eventos formales: el Sprint (contenedor), el Sprint Planning, el Daily Scrum, el Sprint Review y la Sprint Retrospective. Los últimos 4 son los eventos de inspección y adaptación que ocurren dentro de cada sprint.

Todos los eventos tienen una duración máxima fija (time-box) que no debe excederse. Scrum no prohíbe terminar antes del time-box si el propósito del evento se ha cumplido. La duración máxima de los eventos para sprints de 10 días hábiles (2 semanas) es la que se documenta a continuación.

## Sprint Planning

### Descripción

El Sprint Planning da inicio formal al sprint. El equipo decide qué trabajo abordará y cómo lo organizará para cumplir el Sprint Goal acordado.

| Atributo | Detalle |
|---|---|
| Cuándo | Primer día del sprint, a las 9:00 |
| Duración | 4 horas (máximo para sprints de 2 semanas) |
| Modalidad | Presencial |
| Participantes | Product Owner, Scrum Master, Developers (todos los miembros del equipo) |

### Entradas

- Product Backlog ordenado y refinado por el PO
- Historias que cumplen la Definition of Ready
- Velocidad histórica del equipo (20 SP/sprint declarados)
- Incremento del sprint anterior
- Condiciones actuales del equipo (disponibilidad, impedimentos conocidos)

### Salidas

- Sprint Goal acordado por todo el equipo
- Sprint Backlog inicial con historias seleccionadas y tareas técnicas creadas por los Developers
- Compromiso del equipo con el Sprint Goal

### Dinámica en este proyecto

El PO (Josué Say) presenta las historias priorizadas de la parte superior del backlog. Los Developers (Cruz, Chen, Guzmán) estiman si las historias son alcanzables y las descomponen en tareas. El SM (Mathew Cordero) facilita la sesión y gestiona el time-box. Al finalizar las 4 horas, el equipo tiene un Sprint Goal público y un Sprint Backlog de trabajo.

## Daily Scrum

### Descripción

El Daily Scrum es una sincronización diaria de 15 minutos para que los Developers inspeccionen su progreso hacia el Sprint Goal y adapten el Sprint Backlog si es necesario. No es una reunión de reporte de estado: es una planificación táctica de las próximas 24 horas de trabajo.

| Atributo | Detalle |
|---|---|
| Cuándo | Lunes a viernes, a las 9:00 |
| Duración | 15 minutos (time-box estricto) |
| Modalidad | Remoto via Microsoft Teams |
| Participantes principales | Developers (Cruz, Chen, Guzmán) |
| Participantes opcionales | Scrum Master (facilita si es necesario), Product Owner (como observador) |

### Entradas

- Sprint Backlog actualizado
- Estado del Sprint Goal al día anterior
- Impedimentos identificados

### Salidas

- Plan de trabajo para las próximas 24 horas
- Lista de impedimentos a escalar al SM
- Sprint Backlog actualizado si el plan cambió

### Dinámica en este proyecto

Los 3 Developers se conectan por Teams a las 9:00. Cada Developer comunica qué completó, qué hará hoy y si hay algo que le impide avanzar. El SM identifica impedimentos que escalar fuera del Daily. El PO no participa activamente; si necesita comunicar algo urgente al equipo, lo hace fuera del Daily para no extender el tiempo.

## Sprint Review

### Descripción

El Sprint Review es la inspección del incremento producido durante el sprint. El equipo presenta al Product Owner y a los stakeholders lo que se construyó. El resultado principal es un Product Backlog ajustado basado en el feedback recibido.

| Atributo | Detalle |
|---|---|
| Cuándo | Último día del sprint, a las 9:00 |
| Duración | 2 horas (time-box para sprints de 2 semanas) |
| Modalidad | Presencial |
| Participantes | Todo el equipo (PO, SM, Developers) + stakeholders de UVG Campus Central |

### Entradas

- Incremento completado durante el sprint
- Sprint Goal del sprint que cierra
- Product Backlog actual
- Información sobre el contexto externo del proyecto (avances del campus, cambios en el pensum, etc.)

### Salidas

- Feedback documentado de los stakeholders
- Product Backlog actualizado y reordenado por el PO
- Decisiones sobre el alcance de los siguientes sprints
- Incremento formalmente aceptado o rechazado por el PO

### Dinámica en este proyecto

El equipo demuestra las funcionalidades completadas que cumplen la Definition of Done. El PO (Josué Say) acepta o rechaza formalmente cada historia. Los stakeholders de UVG interactúan con el sistema y proporcionan retroalimentación. Si hay historias incompletas, el PO decide si las devuelve al backlog o las descarta. La sesión termina con el backlog ajustado listo para el siguiente Planning.

## Sprint Retrospective

### Descripción

La Sprint Retrospective es la inspección del equipo sobre sí mismo: el proceso, las interacciones, las herramientas y la forma de trabajar. Su propósito es identificar mejoras concretas que el equipo implementará en el siguiente sprint.

| Atributo | Detalle |
|---|---|
| Cuándo | Último día del sprint, a las 11:30 (inmediatamente después del Sprint Review) |
| Duración | 1.5 horas (time-box) |
| Modalidad | Presencial |
| Participantes | Todo el equipo: Product Owner, Scrum Master, Developers |

### Entradas

- Observaciones del Sprint Review
- Impedimentos registrados durante el sprint
- Compromisos de mejora del sprint anterior
- Percepción del equipo sobre el proceso vivido

### Salidas

- Lista de aspectos que funcionaron bien y deben mantenerse
- Lista de aspectos a mejorar con propietario y criterio de verificación
- Al menos un compromiso concreto de mejora para el siguiente sprint
- Actualización del proceso del equipo si aplica

### Dinámica en este proyecto

El SM (Mathew Cordero) facilita la retrospectiva con una estructura que permite a todos los miembros participar por igual. La retrospectiva no es una sesión de quejas: termina con compromisos accionables. Por ejemplo, si durante los primeros sprints el equipo identifica que el refinamiento de historias consume tiempo del Planning, puede comprometerse a dedicar 30 minutos por semana a refinamiento durante el sprint. Ese compromiso se verifica en la retrospectiva del sprint siguiente.

## Calendario de ceremonias por sprint

| Sprint | Planning | Daily (período) | Review | Retrospective |
|---|---|---|---|---|
| S1 | 1 ene 2027, 9:00–13:00 | 2–13 ene 2027 | 14 ene 2027, 9:00–11:00 | 14 ene 2027, 11:30–13:00 |
| S2 | 15 ene 2027, 9:00–13:00 | 16–27 ene 2027 | 28 ene 2027, 9:00–11:00 | 28 ene 2027, 11:30–13:00 |
| S3 | 29 ene 2027, 9:00–13:00 | 1–10 feb 2027 | 11 feb 2027, 9:00–11:00 | 11 feb 2027, 11:30–13:00 |
| S4 | 12 feb 2027, 9:00–13:00 | 13–24 feb 2027 | 25 feb 2027, 9:00–11:00 | 25 feb 2027, 11:30–13:00 |
| S5 | 26 feb 2027, 9:00–13:00 | 1–10 mar 2027 | 11 mar 2027, 9:00–11:00 | 11 mar 2027, 11:30–13:00 |
| S6 | 12 mar 2027, 9:00–13:00 | 13–24 mar 2027 | 25 mar 2027, 9:00–11:00 | 25 mar 2027, 11:30–13:00 |
| S7 | 26 mar 2027, 9:00–13:00 | 27 mar–7 abr 2027 | 8 abr 2027, 9:00–11:00 | 8 abr 2027, 11:30–13:00 |
| S8 | 9 abr 2027, 9:00–13:00 | 10–21 abr 2027 | 22 abr 2027, 9:00–11:00 | 22 abr 2027, 11:30–13:00 |
