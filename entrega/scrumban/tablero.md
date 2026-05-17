# Tablero Kanban en Scrumban

## Naturaleza del tablero híbrido

En Scrumban el tablero no es un tablero Kanban puro ni un tablero de tareas de Scrum. Es una herramienta que cumple dos funciones simultáneas: visualizar el flujo de trabajo de la iteración actual (función Scrum) y controlar la carga de trabajo mediante límites WIP activos (función Kanban).

El sprint define el horizonte de compromiso: qué tareas BID se han comprometido para la iteración. El tablero controla el flujo: cómo esas tareas avanzan a través de las etapas de desarrollo, y a qué ritmo puede entrar trabajo nuevo (ROM) durante el sprint.

## Columnas y límites WIP

| Columna | Límite WIP | Justificación |
| :--- | :--- | :--- |
| Backlog | Sin límite | Cola de entrada; contiene tareas BID comprometidas del sprint y ROM aprobadas pendientes de iniciar. No afecta el flujo activo. |
| To Do | 8 | Calculado como $2 \times 4$ ejecutores activos. Representa el horizonte inmediato de trabajo listo para iniciar. |
| In Progress | 4 | Una tarea activa por ejecutor. Límite estricto para evitar multitarea y mantener el foco. |
| Testing | 4 | Paridad con In Progress. Las tareas en testing provienen directamente de In Progress; si Testing se llena, In Progress se bloquea, lo que señala un cuello de botella. |
| Review | 2 | Cuello de botella controlado. La revisión final concentra criterio del PO o par técnico. Mantenerlo en 2 evita acumulación pero genera señal visible de bloqueo si supera el límite. |
| Done | Sin límite | No afecta el flujo. Las tareas en Done han completado todos los criterios del DoD. |

**Nota sobre los límites WIP:** estos valores son cálculos internos del proyecto, derivados de los 4 ejecutores activos (Gustavo Cruz, Javier Chen, Pedro Guzmán y el Facilitador Mathew Cordero cuando actúa como ejecutor). No son valores prescriptivos universales de Scrumban; son la configuración específica de este equipo y proyecto.

## Flujo de trabajo en el tablero

Una tarea recorre el tablero en el siguiente orden:

1. **Backlog** — la tarea existe en el Product Backlog o llega como solicitud ROM aprobada. Aún no está activa.
2. **To Do** — el equipo la selecciona durante el Planning o el PO la aprueba como ROM. Está lista para iniciar; tiene criterios de aceptación claros.
3. **In Progress** — un ejecutor la toma y comienza el desarrollo. Solo puede haber una tarea por ejecutor en esta columna.
4. **Testing** — el ejecutor termina el desarrollo y mueve la tarea a Testing. Otro miembro (o el mismo, si el equipo es pequeño) ejecuta pruebas de aceptación.
5. **Review** — la tarea pasó Testing sin observaciones pendientes. El PO o un par técnico hace la revisión final antes de aceptarla como Done.
6. **Done** — la tarea cumple los 8 criterios del DoD, incluido el criterio de flujo: completó Testing y Review sin observaciones pendientes.

Si una tarea en Testing o Review tiene observaciones, regresa a In Progress. El movimiento de retroceso es visible en el tablero y el Facilitador lo registra como dato de calidad para la Retrospectiva.

## Cómo el sprint define el horizonte y el tablero controla el flujo

Al inicio del sprint, el Sprint Planning llena el Backlog del tablero con las tareas BID comprometidas (80% de la capacidad) y deja vacío el espacio ROM (20% de la capacidad). Estas tareas BID no se mueven masivamente a To Do: se van moviendo conforme el equipo avanza y hay capacidad disponible en To Do (respetando el límite de 8).

El tablero no reproduce el Sprint Backlog de Scrum como lista estática: es un sistema dinámico donde el avance de tareas hacia Done libera capacidad en columnas anteriores y permite que nuevas tareas entren al flujo activo. El sprint define qué puede estar en el Backlog; el tablero decide cuándo y cómo fluye.

## Gestión de trabajo ROM en el tablero

Cuando llega una solicitud de trabajo no planificado durante el sprint, el proceso es el siguiente:

1. El Facilitador registra la solicitud con fecha, origen y estimación de esfuerzo (en SP o en días).
2. El PO evalúa si la solicitud entra dentro del umbral ROM del sprint (hasta 20% de la capacidad, equivalente a 4 SP en este proyecto).
3. Si el PO aprueba:
   - La tarea ingresa directamente a la columna Backlog del tablero, marcada visualmente como ROM (por ejemplo, con etiqueta de color diferenciada).
   - Solo puede avanzar a To Do cuando el límite WIP de To Do lo permite.
   - Sigue el mismo flujo que cualquier otra tarea: To Do $\to$ In Progress $\to$ Testing $\to$ Review $\to$ Done.
4. Si el PO rechaza o la solicitud excede el umbral:
   - La solicitud se registra como fuera del umbral ROM y se escala al proceso de cargo adicional según el SLA.
   - No ingresa al tablero hasta que haya un acuerdo formal.

El Facilitador lleva un conteo de tareas ROM ingresadas al sprint. Si el total supera el umbral durante la iteración, alerta al PO antes de aceptar una nueva solicitud ROM.

## Nota: columna adicional para prácticas XP

Si el proyecto incorpora prácticas de Extreme Programming (XP), se agrega una columna **Code Review** entre Testing y Review. Esta columna materializa la revisión técnica por pares (pair review), que es una práctica XP específica distinta de la revisión de aceptación del PO.

La incorporación de Code Review tiene el siguiente efecto en el flujo:

- Añade aproximadamente $+1$ día hábil al Cycle Time de cada tarea.
- Requiere ajustar el límite WIP de Code Review (se recomienda paridad con Testing: límite de 4).
- Las tareas en Code Review con observaciones técnicas regresan a In Progress, no a Testing.

Esta columna no es parte de la configuración base del proyecto. Se documenta aquí para dejar registro de la decisión de diseño en caso de que el equipo adopte XP en sprints posteriores.
