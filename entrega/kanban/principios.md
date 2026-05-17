# Principios Kanban aplicados al proyecto

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Referencia

Los seis principios descritos en este documento corresponden a la base teórica del método Kanban y se presentan con su aplicación concreta en el tablero y el flujo del proyecto.

## Principio 1: Visualizar el flujo de trabajo

### Definición

Hacer visible todo el trabajo pendiente, activo y completado en un tablero compartido que el equipo pueda consultar en cualquier momento. La visibilidad elimina el trabajo oculto y los compromisos implícitos.

### Aplicación en el proyecto

El tablero del proyecto cuenta con seis columnas: Backlog, To Do, In Progress, Testing, Review y Done. Las 133 tareas técnicas del proyecto se distribuyen en estas columnas según su estado real. Cualquier miembro del equipo — PM Josué Say, Líder Técnico Mathew Cordero, y los tres developers Gustavo Cruz Bardales, Javier Chen Gonzalez y Pedro Guzmán Mayen — puede ver en tiempo real cuántas tareas están activas, cuáles están bloqueadas, cuáles están en validación y cuáles están completadas.

El tablero también hace visible el cuello de botella: si la columna Review acumula tareas por encima de su límite WIP de 2, el equipo sabe que debe detener el avance desde In Progress y priorizar la revisión antes de continuar.

## Principio 2: Limitar el trabajo en progreso (WIP)

### Definición

Establecer un techo explícito al número de tareas que pueden estar activas simultáneamente en cada etapa del flujo. Los límites WIP evitan la multitarea, reducen el tiempo de espera y aumentan el enfoque.

### Aplicación en el proyecto

Los límites WIP del tablero se calculan a partir de los cuatro ejecutores activos del flujo: Mathew Cordero, Gustavo Cruz Bardales, Javier Chen Gonzalez y Pedro Guzmán Mayen.

- In Progress tiene WIP de 4: una tarea activa por ejecutor. Nadie debe comenzar una tarea nueva si ya tiene una en curso.
- To Do tiene WIP de 8: el doble de los ejecutores activos, para mantener siempre trabajo preparado sin saturar la cola inmediata.
- Testing tiene WIP de 4: paridad con In Progress para que las pruebas no generen una cola de espera mayor al ritmo de producción.
- Review tiene WIP de 2: es el cuello de botella controlado. Dos tareas en revisión simultánea son suficientes dado que la validación funcional contra criterios de aceptación requiere atención concentrada.

## Principio 3: Gestionar el flujo

### Definición

Monitorear y optimizar el movimiento de las tareas a través del sistema. El objetivo no es mantener a las personas ocupadas, sino mantener el trabajo fluyendo de manera predecible.

### Aplicación en el proyecto

El PM monitorea semanalmente tres métricas de flujo: Cycle Time (tiempo activo por tarea), Throughput (tareas completadas por período) y Lead Time (tiempo total desde solicitud hasta entrega). El Throughput diario esperado es de 0.78 tareas por día, lo que equivale a 15.60 tareas por mes.

Si el Throughput real cae por debajo de 0.78 tareas por día de forma sostenida, es señal de que hay un cuello de botella activo o que el Cycle Time se está extendiendo más allá del límite máximo de 10 días. En ese caso el PM convoca una revisión del flujo para identificar la causa: tarea bloqueada, deuda técnica no contabilizada, o falta de claridad en los criterios de aceptación.

## Principio 4: Hacer explícitas las políticas del proceso

### Definición

Documentar las reglas que gobiernan cómo se maneja el trabajo: cuándo una tarea puede avanzar de columna, quién tiene autoridad para moverla, qué significa "Done" y cómo se manejan los bloqueos.

### Aplicación en el proyecto

Las políticas explícitas del tablero incluyen:

- Una tarea solo puede pasar de In Progress a Testing cuando el developer ha terminado la implementación y la ha probado localmente.
- Una tarea solo puede pasar de Testing a Review cuando todas las pruebas técnicas han pasado. Si falla alguna prueba, la tarea regresa a In Progress con observaciones documentadas en el ítem.
- Una tarea se marca Done únicamente cuando el Líder Técnico o el PM ha validado que cumple los criterios de aceptación definidos en el Backlog.
- Si una tarea en In Progress está bloqueada por dependencia externa, se etiqueta como "bloqueada" y no cuenta contra el WIP, pero sí se registra su causa para análisis posterior.
- El PM es el único rol autorizado para priorizar el orden de las tareas en To Do.

## Principio 5: Implementar ciclos de retroalimentación

### Definición

Establecer puntos recurrentes donde el equipo revisa el estado del sistema, las métricas de flujo y los acuerdos de nivel de servicio para tomar decisiones de mejora.

### Aplicación en el proyecto

El proyecto incorpora dos ciclos de retroalimentación:

- **Revisión semanal de métricas**: el PM revisa Throughput, Cycle Time y Lead Time acumulado. Si algún indicador se desvía del valor esperado, se documenta la causa y se ajusta la priorización del Backlog.
- **Revisión del SLA mensual**: al cierre de cada mes, el equipo contrasta el Throughput real contra el comprometido en el SLA (3 a 4 tareas por semana). Si hay desvío, se identifican las causas y se aplican ajustes antes del siguiente ciclo de pago.

El ciclo de retroalimentación no tiene una duración fija como en Scrum. La frecuencia se adapta a la necesidad: semanal para métricas operativas, mensual para el SLA.

## Principio 6: Mejorar colaborativamente y evolucionar experimentalmente

### Definición

Los cambios al proceso se proponen con base en datos reales del flujo, se implementan de forma incremental y se evalúan antes de consolidarse. El equipo completo participa en la identificación de mejoras.

### Aplicación en el proyecto

Si el análisis semanal de métricas muestra que el Cycle Time promedio está por encima de 7 días de forma consistente, el equipo analiza en qué columna se concentra el tiempo excesivo. Un cambio posible sería aumentar el WIP de Review de 2 a 3 de forma experimental durante dos semanas y medir si el Lead Time total disminuye.

Otro ejemplo: si se decide incorporar prácticas de revisión técnica por pares (provenientes de XP), se puede agregar una columna "Code Review" entre Testing y Review. Este cambio experimental agrega aproximadamente un día al Cycle Time promedio (de 5.13 a ~6.13 días), pero reduce la tasa de regreso desde Review a In Progress. La decisión de mantenerlo o revertirlo se basa en los datos acumulados del mes, no en preferencias individuales.
