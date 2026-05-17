# Cuándo usar Kanban: análisis comparativo

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Tabla comparativa: Kanban vs Scrum vs Scrumban

| Dimensión | Kanban | Scrum | Scrumban |
|---|---|---|---|
| Tipo de trabajo | Continuo, flujo de solicitudes | Por iteraciones, alcance definido por sprint | Continuo con cadencia opcional de revisión |
| Planificación | Continua, prioridad por demanda | Al inicio de cada sprint (Sprint Planning) | Mixta: backlog continuo con puntos de revisión |
| Duración del ciclo | Sin ciclos fijos | Sprints de 1 a 4 semanas | Sin sprints fijos, o sprints opcionales |
| Roles | Sin roles prescritos | Scrum Master, Product Owner, Development Team | Sin roles prescritos Kanban; se pueden heredar roles Scrum |
| WIP | Límites explícitos por columna | No prescribe límites WIP formales | Límites WIP heredados de Kanban |
| Métricas principales | Lead Time, Cycle Time, Throughput | Velocidad por sprint, burndown | Combinación de ambas |
| Gestión de cambios | Alta: nuevas tareas entran al Backlog en cualquier momento | Baja dentro del sprint: los cambios esperan al siguiente sprint | Alta: cambios entran al backlog inmediatamente |
| Ceremonia de retrospectiva | No prescrita | Obligatoria al final de cada sprint | Opcional, cuando los datos lo justifican |
| Facturación típica | Mensual por servicio | Por sprint o por entregable | Mensual o por hito |
| Contexto ideal | Soporte, operaciones, mantenimiento, trabajo con alta variabilidad de solicitudes | Desarrollo de producto, features definidas, equipos que valoran la velocidad medida por sprint | Equipos en transición, proyectos mixtos de desarrollo y soporte |

## Por qué se evaluó Kanban para este proyecto

Kanban fue considerado como metodología de ejecución por cuatro razones concretas:

1. **Alcance técnico extenso y parcialmente incierto**: con 133 tareas técnicas, parte del alcance detallado emergería durante la ejecución. Kanban permite incorporar nuevas tareas al Backlog sin necesidad de esperar al próximo sprint.

2. **Equipo pequeño de 4 ejecutores activos**: equipos de menos de 5 personas pueden gestionar el flujo de forma visual sin la sobrecarga de ceremonias Scrum (planning, review, retrospectiva, daily standup formal).

3. **Cliente con posibles solicitudes de cambio frecuentes**: UVG Campus Central es una institución con múltiples stakeholders. La probabilidad de ajustes de prioridad durante el proyecto es alta.

4. **Modelo de servicio continuo**: el proyecto se concibe como un servicio de 11 meses, no como un producto que se lanza al final. Este modelo es más afín a Kanban que a Scrum.

## Por qué Scrum fue seleccionado como metodología de ejecución

A pesar de las razones anteriores, Scrum fue evaluado como la metodología con mejor relación entre capacidad del equipo y velocidad de entrega. Las razones de la selección son:

1. **Duración significativamente menor**: con Scrum, la duración estimada del proyecto es de aproximadamente 4.5 meses (considerando sprints de 2 semanas con el mismo equipo). Con Kanban, la duración estimada con buffer es de 11 meses. La diferencia es de más del doble.

2. **Velocidad medida por sprint**: Scrum permite comprometer un conjunto de tareas por sprint y medir si el equipo cumplió. Esto facilita la comunicación con el cliente sobre el progreso concreto.

3. **Ceremonias de retroalimentación integradas**: las retrospectivas de Scrum son un mecanismo formal para mejora continua que Kanban no prescribe. Para un proyecto de desarrollo de producto nuevo, estas sesiones ayudan a detectar problemas de comunicación y proceso temprano.

4. **Criterio académico**: el contexto del proyecto incluye una evaluación académica donde se comparan tres metodologías. Scrum fue seleccionado como la metodología de ejecución porque maximiza la entrega de valor en el menor tiempo posible dado el alcance y el equipo disponibles.

## Contextos donde Kanban hubiera sido preferible

Si el proyecto tuviera características diferentes, Kanban habría sido la elección más adecuada:

- Si el equipo estuviera operando un sistema ya construido y las tareas fueran principalmente de soporte, corrección de errores y mejoras menores con alta variabilidad de llegada.
- Si el cliente presentara solicitudes sin un backlog predefinido, y las tareas llegaran de forma irregular en lugar de estar definidas desde el inicio.
- Si la prioridad del cliente fuera estabilidad operativa del servicio sobre velocidad de entrega de nuevas funcionalidades.
- Si el equipo tuviera miembros con disponibilidad parcial o variable que hicieran difícil comprometerse a una velocidad por sprint estable.

## Ventajas de Kanban para este tipo de proyecto

- **Flexibilidad de prioridad**: cualquier cambio de alcance entra al Backlog sin interrumpir el trabajo activo. No hay que esperar al próximo sprint.
- **Sin sobrecarga de ceremonias**: no hay Sprint Planning, Sprint Review ni Retrospectiva obligatorias. El equipo se enfoca en el flujo.
- **Visibilidad del cuello de botella**: los límites WIP hacen visible inmediatamente dónde se acumula el trabajo, sin necesidad de analizar un burndown chart.
- **Modelo de servicio alineado con el SLA**: el cliente recibe entregas de forma continua, no en paquetes de dos semanas.
- **Escalable a equipos grandes**: si el equipo creciera de 4 a 8 ejecutores, solo se ajustan los límites WIP. No hay que redefinir la estructura de sprints.

## Desventajas de Kanban para este tipo de proyecto

- **Sin compromisos de sprint**: el cliente no recibe una lista de funcionalidades comprometidas por período. Esto puede generar incertidumbre sobre qué estará disponible y cuándo.
- **Duración total mayor**: el Throughput de 0.78 tareas por día implica 11 meses para procesar las 133 tareas. Scrum logra el mismo resultado en aproximadamente 4.5 meses porque las tareas se trabajan en paralelo dentro de un sprint con una estructura de compromisos más densa.
- **Métricas más difíciles de comunicar**: Lead Time, Cycle Time y Throughput son menos intuitivos para un cliente no técnico que un burndown chart de sprint.
- **Sin retrospectiva obligatoria**: la mejora del proceso depende de la disciplina del equipo para revisar métricas y actuar. Sin la estructura de Scrum, esto puede no ocurrir con la frecuencia necesaria.

## Reflexión: Kanban como la metodología más costosa en tiempo de este proyecto

Kanban es la metodología con mayor duración estimada para este proyecto. Procesando las 133 tareas técnicas a un Throughput de 0.78 tareas por día en flujo continuo, la duración sin buffer es de 9 meses; con buffer del 25%, son 11 meses. Scrum, con sprints de 2 semanas y el mismo equipo de 4 ejecutores, completa el proyecto en aproximadamente 4.5 meses.

La diferencia no se debe a que Kanban sea menos eficiente como método, sino a que el Throughput de 0.78 tareas por día refleja el comportamiento secuencial del sistema con WIP de In Progress igual a 4 y Cycle Time promedio de 5.13 días. En Scrum, el equipo puede comprometer más tareas por sprint porque la estructura de planificación permite optimizar la distribución del trabajo de forma diferente.

Para este proyecto en particular — desarrollo de un sistema de recomendación de carrera universitaria con alcance técnico definido, equipo pequeño y fecha de entrega comprometida — el tiempo adicional que implica Kanban (6.5 meses adicionales respecto a Scrum) no se justifica con las ventajas de flexibilidad que ofrece. Por eso Scrum fue seleccionado como metodología de ejecución.

Kanban permanece como referencia metodológica válida para la fase de soporte y mantenimiento del sistema una vez que esté en producción, donde el tipo de trabajo cambia de desarrollo de nuevas funcionalidades a operación continua.
