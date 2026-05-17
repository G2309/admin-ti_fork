# Sprint Backlog

## Definición

El Sprint Backlog es el plan del equipo para el sprint actual. Contiene el Sprint Goal, las historias de usuario seleccionadas del Product Backlog para el sprint y el plan de tareas técnicas que los Developers crean para cumplirlas. A diferencia del Product Backlog, el Sprint Backlog pertenece exclusivamente a los Developers: solo ellos pueden añadir, modificar o eliminar trabajo de él durante el sprint.

El Sprint Backlog es un artefacto vivo. Los Developers lo actualizan diariamente a medida que aprenden más sobre el trabajo necesario para cumplir el Sprint Goal.

## Velocidad declarada

La velocidad del equipo es de **20 story points por sprint**. Esta velocidad fue declarada por los Developers considerando el alcance técnico del sistema de recomendación y la composición del equipo de 3 developers. Es la base para proyectar cuánto trabajo puede comprometerse en cada Sprint Planning.

El total del proyecto es 121 SP distribuidos en 8 sprints. Los sprints operativos (S1–S7) cargan entre 13 y 16 SP por sprint, por debajo del tope de 20 SP, lo que mantiene el margen de velocidad disponible para absorber imprevistos dentro del sprint. El sprint S8 es de holgura con 19 SP (absorbe el rol de holgura y MVP/Acta de Cierre).

## Tabla de sprints

| Sprint | Fecha inicio | Fecha fin | Story Points | Épicas cubiertas | Sprint Goal |
|---|---|---|---|---|---|
| S1 | 1 ene 2027 | 14 ene 2027 | 13 | EP01 | Diseñar e implementar la plataforma web base con registro de usuarios y perfiles vocacionales |
| S2 | 15 ene 2027 | 28 ene 2027 | 15 | EP01, EP02 | Desarrollar el módulo de encuesta vocacional con recolección de datos |
| S3 | 29 ene 2027 | 11 feb 2027 | 16 | EP02, EP03 | Implementar la interfaz para gestión de carreras y pensum |
| S4 | 12 feb 2027 | 25 feb 2027 | 13 | EP03 | Continuar gestión de carreras; completar EP03 |
| S5 | 26 feb 2027 | 11 mar 2027 | 16 | EP04 | Construir e implementar el motor de recomendación híbrido |
| S6 | 12 mar 2027 | 25 mar 2027 | 13 | EP05 | Incorporar el sistema de análisis y clasificación de afinidad |
| S7 | 26 mar 2027 | 8 abr 2027 | 16 | EP05, EP06 | Diseñar e implementar el panel de resultados inicial |
| S8 | 9 abr 2027 | 22 abr 2027 | 19 | EP06 (holgura + MVP) | Completar panel de resultados, consolidar funcionalidades, validación integral y estabilización del producto |
| **Total** | — | — | **121** | — | — |

Cada sprint tiene 10 días hábiles. El período completo abarca del 1 de enero al 22 de abril de 2027.

## Sprint de holgura: S8

El sprint S8 constituye el buffer de holgura del 10% del plan. Con 19 SP de capacidad en 10 días hábiles adicionales al final del calendario, absorbe el rol de holgura y MVP/Acta de Cierre.

### Propósito del buffer

El buffer de holgura no es tiempo libre ni un sprint opcional; es capacidad planificada para absorber las siguientes situaciones sin comprometer el Product Goal:

- **Retrasos acumulados**: si alguno de los sprints S1–S7 no completó todas sus historias comprometidas, S8 reabsorbe las historias pendientes, comenzando por las de mayor valor.
- **Deuda técnica emergente**: problemas de integración entre el motor de recomendación (EP04) y el sistema de ponderación (EP05) que requieran retrabajo.
- **Feedback tardío de stakeholders**: si el Sprint Review de S7 genera ajustes sustanciales al panel de resultados (EP06), S8 los implementa sin afectar el calendario de entrega.
- **Estabilización y validación integral**: S8 está orientado a validación de extremo a extremo del sistema completo, pruebas funcionales y corrección de defectos identificados durante los sprints previos.

### Qué no absorbe S8

El buffer no está diseñado para absorber scope creep no aprobado por el PO ni para implementar características secundarias que el PO decidió posponer. Si al llegar a S8 el equipo está al día, el Sprint Goal de S8 prioriza completar EP06 con calidad antes de añadir funcionalidades adicionales.

## Cómo se construye el Sprint Backlog en el Sprint Planning

El Sprint Planning sigue dos partes:

### Parte 1: El qué

El Product Owner presenta las historias de la parte superior del Product Backlog que cumplen la Definition of Ready. El equipo completo discute el propósito del sprint y acuerda el Sprint Goal. Este objetivo guiará las decisiones del equipo cuando enfrenten imprevistos durante el sprint.

### Parte 2: El cómo

Los Developers toman las historias aceptadas y las descomponen en tareas técnicas concretas dentro del Sprint Backlog. Cada tarea tiene un responsable, aunque el Sprint Backlog en su conjunto es propiedad colectiva del equipo. Los Developers estiman el esfuerzo de las tareas para confirmar que el conjunto de historias es alcanzable en los 10 días hábiles del sprint.

### Resultado del Planning

Al terminar el Sprint Planning, el equipo cuenta con:

- Un Sprint Goal acordado y visible
- Un Sprint Backlog con historias y tareas técnicas
- Una proyección realista de que el Sprint Goal es alcanzable con la velocidad declarada de 20 SP/sprint
