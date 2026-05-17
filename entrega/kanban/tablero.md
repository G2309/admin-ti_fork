# Tablero Kanban del proyecto

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Descripción general

El tablero del proyecto tiene seis columnas que representan los estados posibles de una tarea técnica desde que ingresa al sistema hasta que se considera completada. Cada columna tiene un límite WIP explícito, salvo las columnas de entrada (Backlog) y de salida (Done), que son ilimitadas por diseño.

El tablero es la única fuente de verdad sobre el estado del trabajo. Ninguna tarea puede existir fuera de él.

## Columnas del tablero

| Columna | Límite WIP | Justificación |
|---|---|---|
| Backlog | Sin límite | Cola de entrada; contiene las 133 tareas del proyecto organizadas por épica. No restringe el flujo porque las tareas aquí no están siendo trabajadas activamente. |
| To Do | 8 | El doble de los ejecutores activos ($2 \times 4$). Mantiene siempre trabajo preparado y refinado esperando sin saturar la cola inmediata. |
| In Progress | 4 | Una tarea activa por ejecutor. Los 4 ejecutores activos son: Líder Técnico + 3 Developers. |
| Testing | 4 | Paridad con In Progress. Si Testing tuviera WIP menor, crearía una cola de espera entre la implementación y la validación técnica. |
| Review | 2 | Cuello de botella controlado. La validación funcional contra criterios de aceptación requiere atención concentrada; más de 2 tareas simultáneas en Review diluyen la calidad de la revisión. |
| Done | Sin límite | Tareas terminadas y validadas. No afectan el flujo activo; se registran para el cálculo de Throughput acumulado. |

### Nota sobre el cálculo de los límites WIP

Los valores de WIP anteriores no son prescripciones universales del método Kanban. Son valores específicos calculados para este equipo y este proyecto:

- **WIP In Progress = 4**: igual al número de ejecutores activos (uno por persona).
- **WIP To Do = 8**: factor de preparación de $2 \times$ ejecutores activos.
- **WIP Testing = 4**: paridad con In Progress para evitar acumulación entre etapas.
- **WIP Review = 2**: criterio de concentración en la etapa de cierre.

Si el equipo cambiara de tamaño o si el Cycle Time promedio variara significativamente, estos valores deberían recalcularse.

## Flujo de trabajo paso a paso

El siguiente flujo describe cómo avanza una tarea técnica desde el Backlog hasta Done.

### Paso 1: Backlog

Las 133 tareas técnicas del proyecto se cargan en el Backlog organizadas por épica. Cada tarea tiene un título, una descripción técnica y criterios de aceptación preliminares. En este estado, la tarea no ha sido comprometida para ningún período de tiempo específico.

### Paso 2: To Do

El PM (Josué Say) selecciona tareas del Backlog y las mueve a To Do según valor para el cliente e impacto operativo. To Do es la cola de trabajo preparado: las tareas aquí están refinadas, sus criterios de aceptación son claros y están listas para ser tomadas por cualquier ejecutor activo. El PM es el único rol autorizado para mover tareas del Backlog a To Do.

Límite activo: máximo 8 tareas en esta columna.

### Paso 3: In Progress

Un ejecutor activo toma la primera tarea disponible en To Do y la mueve a In Progress. Solo puede tomar una nueva tarea si no tiene ninguna activa en esta columna. La tarea permanece en In Progress mientras el ejecutor la trabaja. El Cycle Time de la tarea comienza a contar desde este momento.

Límite activo: máximo 4 tareas simultáneas.

### Paso 4: Testing

Cuando el ejecutor termina la implementación y la ha probado localmente, mueve la tarea a Testing. Aquí se ejecutan las pruebas técnicas formales: pruebas unitarias, de integración o de comportamiento según el tipo de tarea.

- Si las pruebas pasan: la tarea avanza a Review.
- Si alguna prueba falla: la tarea regresa a In Progress con observaciones documentadas en el ítem del tablero. El ejecutor original retoma la tarea y corrige antes de volver a enviarla a Testing.

Límite activo: máximo 4 tareas simultáneas.

### Paso 5: Review

El Líder Técnico (Mathew Cordero) o el PM validan que la tarea cumple los criterios de aceptación definidos en el Backlog. Esta no es una revisión técnica de código, sino una validación funcional: ¿la tarea entrega lo que se comprometió?

- Si la validación es satisfactoria: la tarea pasa a Done.
- Si hay observaciones: la tarea regresa a In Progress con las observaciones documentadas.

Límite activo: máximo 2 tareas simultáneas.

### Paso 6: Done

La tarea está completada, validada y cerrada. El Throughput acumulado del proyecto se incrementa en 1. El Lead Time total de la tarea (desde que ingresó al sistema hasta este momento) se registra para el análisis semanal de métricas.

## Señal de cuello de botella y acción correctiva

Un cuello de botella ocurre cuando una columna se llena hasta su límite WIP y las tareas upstream no pueden avanzar.

### Identificación

La señal es visual: si la columna Review tiene 2 tareas (su límite máximo) y ninguna puede avanzar porque el Líder Técnico o el PM no están disponibles para validar, las tareas en Testing que ya aprobaron sus pruebas no pueden moverse. Si Testing también llega a su límite de 4, los ejecutores con tareas finalizadas en In Progress no pueden moverlas a Testing.

El resultado es que el flujo se detiene aunque las personas sigan "ocupadas". Este es exactamente el problema que los límites WIP buscan hacer visible.

### Acción correctiva

Cuando se detecta que una columna está en su límite WIP y ninguna tarea puede avanzar:

1. El PM es notificado de inmediato.
2. Los ejecutores activos dejan de iniciar nuevas tareas desde To Do.
3. Se concentran los esfuerzos en desbloquear la columna saturada: si el cuello está en Review, el PM o el Líder Técnico priorizan la validación sobre cualquier otra actividad.
4. Si el bloqueo es por causa externa (por ejemplo, el cliente no ha entregado información necesaria para validar), la tarea se etiqueta como "bloqueada" y se registra la causa. Las métricas de Cycle Time no se detienen en este caso, pero el bloqueo se documenta para no distorsionar el análisis de capacidad del equipo.

## Extensión opcional: columna Code Review (integración con XP)

Si el equipo decide incorporar prácticas de Extreme Programming (XP), específicamente la revisión técnica por pares, se puede agregar una columna "Code Review" entre Testing y Review. El tablero quedaría con siete columnas:

Backlog $\to$ To Do $\to$ In Progress $\to$ Testing $\to$ Code Review $\to$ Review $\to$ Done

Esta columna materializa la revisión técnica del código de manera explícita. Sin ella, la revisión por pares puede quedar implícita o saltarse bajo presión de velocidad.

**Impacto en métricas**: agregar Code Review aumenta el Cycle Time promedio en aproximadamente 1 día (de 5.13 a ~6.13 días por tarea), porque añade una etapa activa al flujo. A cambio, se espera que la tasa de regreso desde Review a In Progress disminuya, porque los errores de implementación se detectan antes de llegar a la validación funcional.

La decisión de incorporar esta columna es experimental: se evalúa después de dos semanas comparando la tasa de regreso desde Review y el Cycle Time real antes y después del cambio.
