# Definición de Done en Scrumban

## Propósito del DoD en Scrumban

La Definición de Done (DoD) en Scrumban establece los criterios que una tarea debe cumplir para ser considerada completada y poder moverse a la columna Done del tablero. En Scrum puro, el DoD protege la calidad del incremento. En Scrumban, el DoD también protege la integridad del flujo: una tarea no es Done solo porque el código esté escrito, sino porque completó el recorrido completo por el sistema de flujo del tablero sin observaciones pendientes.

## Los ocho criterios del DoD

Los primeros siete criterios son los criterios estándar de Scrum adaptados al contexto del proyecto. El octavo criterio es el criterio de flujo propio de Scrumban.

### Criterio 1: Funcionalidad implementada

El código que implementa la funcionalidad descrita en la tarea está escrito, integrado al branch correspondiente y no rompe la compilación del proyecto.

### Criterio 2: Criterios de aceptación cumplidos

Todos los criterios de aceptación definidos en el Sprint Planning para esta tarea han sido verificados y cumplen con lo acordado con el PO.

### Criterio 3: Pruebas ejecutadas

Las pruebas unitarias y de integración asociadas a la funcionalidad han sido ejecutadas y pasan sin errores. Si la tarea no requiere pruebas automatizadas (por ser configuración, documentación técnica, etc.), esto se declara explícitamente en la tarea.

### Criterio 4: Código revisado

El código fue revisado por al menos un miembro del equipo diferente al autor antes de pasar a Testing. La revisión verifica coherencia con el estándar de código del proyecto, no solo funcionalidad.

### Criterio 5: Documentación actualizada

Si la tarea genera, modifica o elimina interfaces, servicios o componentes documentados, la documentación técnica correspondiente fue actualizada.

### Criterio 6: Sin deuda técnica conocida no registrada

Si durante el desarrollo se identificó deuda técnica que no se resuelve en esta tarea, fue registrada como ítem en el Product Backlog con descripción y estimación. La tarea no puede ser Done si hay deuda técnica no registrada.

### Criterio 7: Incremento integrable

La funcionalidad completada se integra con el resto del sistema sin conflictos de merge sin resolver y sin degradar funcionalidades existentes.

### Criterio 8: Criterio de flujo Scrumban

**La tarea completó el recorrido por las columnas Testing y Review del tablero sin observaciones pendientes antes de moverse a Done.**

Este criterio es específico de Scrumban y no existe en el DoD de Scrum puro.

## Por qué se agrega el criterio de flujo

En Scrum puro, el DoD se enfoca en el estado del artefacto (el código, la funcionalidad, la documentación). No tiene opinión sobre el recorrido del proceso.

En Scrumban, el tablero Kanban es parte del sistema de control de calidad: las columnas Testing y Review no son fases decorativas, son checkpoints formales del proceso. Si una tarea se mueve a Done sin haber pasado por ambas columnas —o si se mueve con observaciones pendientes en cualquiera de las dos— el tablero ha perdido su función de control de flujo y el DoD pierde su significado como garantía de calidad.

El criterio de flujo garantiza que el tablero opera como un sistema real de control, no como un panel de estado visual. Una tarea con observaciones pendientes en Testing que se mueve a Done para "cerrar el sprint" no cumple el DoD; es deuda técnica disfrazada de completitud.

## Relación con el tablero Kanban

El criterio 8 es la conexión directa entre el DoD y el tablero. Operativamente:

- Una tarea puede llegar a la columna Review solo si salió de Testing sin observaciones pendientes. Si Testing detectó problemas, la tarea regresa a In Progress.
- Una tarea puede llegar a la columna Done solo si el revisor en Review la aceptó sin observaciones pendientes. Si Review detectó problemas, la tarea regresa a In Progress (no a Testing).
- El Facilitador es responsable de verificar que ninguna tarea se mueva a Done si tiene observaciones sin resolver en Testing o Review.

Si el equipo necesita cerrar el sprint y hay tareas en Testing o Review con observaciones pendientes, esas tareas no van a Done: se documentan como trabajo en proceso y se evalúa si continúan en el siguiente sprint o si su estado afecta el Sprint Goal. Esta es una decisión del PO, no del equipo de desarrollo.

## Declaración de aplicación

Este DoD aplica a todas las tareas del proyecto, tanto BID como ROM. No hay criterios diferenciados por tipo de trabajo: una corrección urgente ROM que ingresó al sprint sigue el mismo DoD que una funcionalidad BID planificada. La calidad del proceso no se negocia por urgencia.
