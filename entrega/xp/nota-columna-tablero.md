# Columna Code Review en el tablero

## Contexto

El tablero Kanban/Scrumban del proyecto define el flujo de trabajo de cada historia de usuario desde que se toma en un sprint hasta que se marca como Done. Cuando se incorporan prácticas XP al flujo, el tablero adquiere una columna adicional que no existe en un tablero Scrum o Kanban sin XP: la columna "Code Review".

Este documento justifica la existencia de esa columna, explica su efecto cuantificable en el Cycle Time y argumenta por qué ese efecto es aceptable y deseable.

## Por qué se agrega la columna Code Review

La columna "Code Review" se ubica entre Testing y Review (del PO). Su función es materializar el paso de revisión técnica por pares que XP introduce a través de Pair Programming.

Sin XP, el flujo de una historia es:

`To Do -> In Progress -> Testing -> Review -> Done`

Con XP, el flujo es:

`To Do -> In Progress -> Testing -> Code Review -> Review -> Done`

La columna no es un paso burocrático adicional: es la representación visible de un control de calidad técnica que ya ocurre —o debería ocurrir— en cualquier proyecto de software de calidad. La diferencia es que sin la columna, ese control queda implícito o se omite bajo presión de velocidad. Con la columna, es un paso explícito del flujo que no puede saltarse sin que el tablero lo haga visible.

**Qué ocurre en Code Review.** Un developer distinto al que implementó la historia revisa el código antes de que la historia avance a la revisión del PO. La revisión verifica:

- Que el código cumple los estándares de codificación (HT-02).
- Que las pruebas TDD son significativas (cubren casos reales, no solo el camino feliz).
- Que no hay deuda técnica deliberada introducida en esta historia.
- Que el pipeline CI está en verde para este código.

La revisión en Code Review es complementaria a las verificaciones automáticas de CI (XP-2) y TDD (XP-1): CI y TDD verifican comportamiento; Code Review verifica estructura, legibilidad y coherencia con los estándares del equipo.

## Relación con Pair Programming y Collective Ownership

Pair Programming reduce la necesidad de una revisión de código separada porque la revisión ocurre en tiempo real mientras se escribe el código. En las historias donde se aplica Pair Programming (EP04-US01, EP05-US01, módulos de seguridad EP01), el Code Review es más corto porque gran parte de la revisión ya ocurrió durante la implementación.

En las historias donde Pair Programming no se aplica (historias de menor criticidad), Code Review es el mecanismo formal de revisión técnica antes del merge. Collective Ownership hace que cualquier developer del equipo pueda realizar esta revisión de forma informada, independientemente de si trabajó en el módulo original.

## Relación con los criterios XP-1 y XP-2

La columna Code Review es el punto de verificación manual que complementa las verificaciones automáticas:

- **XP-1 (TDD verde)**: el pipeline CI verifica que las pruebas pasan. Code Review verifica que las pruebas son significativas: que cubren los casos que importan, no solo los triviales.
- **XP-2 (CI verde)**: el pipeline verifica compilación y pruebas. Code Review verifica que el código que pasa el CI tiene una estructura sostenible.

Las tres verificaciones son complementarias. Un código que pasa XP-1 y XP-2 automáticamente puede aún tener problemas de legibilidad, duplicación o violación de estándares que solo la revisión humana detecta. Code Review es esa revisión humana hecha de forma estructurada y visible en el flujo.

## Efecto cuantificable en el Cycle Time

La adición de la columna Code Review tiene un efecto real en el tiempo promedio que tarda una historia en completarse (Cycle Time):

- Cycle Time sin columna Code Review: aproximadamente 5.13 días promedio por historia.
- Cycle Time con columna Code Review: aproximadamente 6.13 días promedio por historia.
- Incremento: +1 día promedio por historia.

Este incremento es el costo visible de la revisión técnica. Es visible porque la columna hace explícito que las historias pasan tiempo en revisión de pares antes de avanzar al PO.

## Por qué el incremento de +1 día es aceptable y deseable

El argumento para aceptar el incremento de Cycle Time se apoya en la comparación de costos entre detectar defectos en revisión y detectarlos después del merge.

Un defecto detectado en Code Review (antes del merge al repositorio principal) tiene un costo de resolución bajo: el developer que revisó el código tiene el contexto fresco, el cambio está aislado y las pruebas de regresión verifican que la corrección no rompe nada.

Un defecto que no detecta Code Review y llega al Sprint Review tiene costos adicionales:

- El PO identifica el problema públicamente.
- La historia vuelve al Sprint Backlog o al Product Backlog.
- El contexto técnico del developer se ha enfriado si pasaron días desde la implementación.
- Otros developers pueden haber construido sobre el código defectuoso, ampliando el impacto de la corrección.

Un defecto que no detecta Code Review y llega a producción (o al uso real con estudiantes de UVG) tiene el costo más alto: retrabajo urgente que consume capacidad del sprint siguiente, posible pérdida de confianza del usuario final y riesgo de datos incorrectos en el sistema.

El +1 día de Code Review no es un costo puro: es una inversión con retorno en calidad del incremento. El proyecto acepta deliberadamente este incremento de Cycle Time porque el costo de no revisar es mayor que el costo de revisar.

## Lo que la columna hace visible que sin XP queda implícito

Sin la columna Code Review en el tablero, la revisión técnica de código puede ocurrir (si el equipo tiene cultura de revisión) o puede no ocurrir (si hay presión de velocidad). No hay forma de saber desde el tablero si la revisión ocurrió o no para una historia dada.

Con la columna, el tablero muestra:

- Cuántas historias están en espera de revisión técnica (Work In Progress en Code Review).
- Cuánto tiempo pasan las historias en revisión (Cycle Time de la columna).
- Si las historias se están acumulando en Code Review (indicador de que las revisiones no fluyen).

Esta visibilidad permite que el SM (Coach) detecte cuando la revisión técnica está siendo omitida bajo presión de velocidad. Si historias pasan de Testing directamente a Review sin pasar por Code Review, el tablero lo hace visible. Sin la columna, esa omisión sería invisible.

En proyectos con presión de tiempo —y este proyecto tiene una fecha de entrega fija el 22 de abril 2027— la presión de velocidad puede hacer que los equipos omitan controles de calidad que consideran opcionales. La columna Code Review convierte ese control en obligatorio al nivel del flujo del tablero.
