# Sprint Backlog en Scrumban

## Estructura del sprint en Scrumban

El sprint en Scrumban mantiene la misma estructura que en Scrum: una iteración de duración fija con un objetivo comprometido, un backlog planificado al inicio y una revisión al cierre. La diferencia estructural está en la gestión de la capacidad.

En Scrum puro, el equipo compromete el 100% de su capacidad estimada en tareas BID durante el Planning. En Scrumban, el equipo compromete explícitamente solo el 80% de la capacidad en tareas BID planificadas, y reserva el 20% restante como capacidad ROM disponible para absorber trabajo no planificado durante el sprint.

Esta reserva no es tiempo libre ni holgura: es capacidad intencionalmente no comprometida con BID, que el PO puede activar durante el sprint para trabajo no planificado sin necesidad de cancelar el sprint ni renegociar el Sprint Goal.

## Tabla de sprints del proyecto

| Sprint | Épicas | Fecha inicio | Fecha cierre | SP comprometidos | Tipo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| S1 | EP01 | 1 ene 2027 | 14 ene 2027 | 13 SP | Operativo |
| S2 | EP01, EP02 | 15 ene 2027 | 28 ene 2027 | 15 SP | Operativo |
| S3 | EP02, EP03 | 29 ene 2027 | 11 feb 2027 | 16 SP | Operativo |
| S4 | EP03 | 12 feb 2027 | 25 feb 2027 | 13 SP | Operativo |
| S5 | EP04 | 26 feb 2027 | 11 mar 2027 | 16 SP | Operativo |
| S6 | EP05 | 12 mar 2027 | 25 mar 2027 | 13 SP | Operativo |
| S7 | EP05, EP06 | 26 mar 2027 | 8 abr 2027 | 16 SP | Operativo |
| S8 | EP06 (holgura + MVP) | 9 abr 2027 | 22 abr 2027 | 19 SP | Holgura |

- Velocidad comprometida por sprint: 20 SP
- Duración de cada sprint: 10 días hábiles
- Total de sprints: 8 (7 operativos + 1 de holgura)
- Período total del proyecto: 1 enero 2027 — 22 abril 2027
- Total de tareas técnicas (dimensión Kanban): 133 tareas

Nota: los SP comprometidos por sprint son los SP BID planificados al inicio. La capacidad ROM (hasta 4 SP por sprint) no se registra en esta tabla como SP comprometidos, porque no está planificada; se registra retrospectivamente al cierre del sprint.

## Cómo se reserva la capacidad ROM en el Planning

Durante el Sprint Planning, el equipo ejecuta los siguientes pasos en orden:

1. Se estima la velocidad del sprint: 20 SP para este proyecto.
2. Se calcula la capacidad BID: $20 \times 0.8 = 16$ SP disponibles para trabajo planificado.
3. Se calcula la capacidad ROM reservada: $20 \times 0.2 = 4$ SP como umbral de trabajo no planificado.
4. El equipo selecciona tareas del Product Backlog hasta completar los SP BID disponibles. Estas tareas entran al Backlog del tablero Kanban.
5. Se documenta explícitamente en el tablero que hay 4 SP de capacidad ROM reservada. Esta reserva no aparece como tareas en el tablero; es un espacio disponible que el PO puede activar durante el sprint.

La reserva ROM se hace pública en el Planning para que todos los stakeholders sepan que el equipo tiene un mecanismo de absorción de trabajo no planificado ya incorporado en la planificación del sprint.

## Diferencia respecto al Sprint Backlog de Scrum puro

| Aspecto | Scrum puro | Scrumban |
| :--- | :--- | :--- |
| Porcentaje comprometido en el Planning | 100% de la capacidad estimada | 80% en BID; 20% reservado como ROM |
| Modificación del backlog durante el sprint | No permitida | Permitida para ROM con aprobación del PO y dentro del umbral |
| Visibilidad de la capacidad no planificada | No existe | Explícita en el Planning y visible en el tablero |
| Registro de trabajo ROM | No aplica | Se registra como ROM en el tablero con etiqueta diferenciada |
| Cierre del sprint | Sprint Backlog cerrado; lo no terminado va al siguiente sprint | Sprint Backlog BID cerrado; ROM puede entrar durante el sprint |
| Reporte al cierre | Velocidad y burndown | Velocidad, burndown, ratio BID/ROM real vs planificado |

## Sprint de holgura (S8)

El sprint S8 es el sprint de holgura planificado. Su función es absorber el trabajo acumulado de épicas anteriores que no se completó en los sprints operativos, y consolidar el producto antes de la entrega final del 22 de abril de 2027.

En sprints de holgura, la proporción BID/ROM puede ajustarse: si no hay deuda técnica acumulada significativa, el PO puede reducir la reserva ROM por debajo del 20% y dedicar más capacidad a la integración y ajuste fino del sistema. Esta decisión es del PO y debe declararse explícitamente en el Planning de esos sprints.
