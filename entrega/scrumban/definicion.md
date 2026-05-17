# Definición de Scrumban

## Qué es Scrumban

Scrumban es una metodología híbrida que integra genuinamente los marcos Scrum y Kanban. No es Scrum al que se le agrega un tablero visual, ni Kanban al que se le añaden reuniones periódicas: es una integración donde ambos marcos operan simultáneamente y se complementan estructuralmente.

En Scrumban, Scrum aporta la cadencia, las ceremonias y el compromiso iterativo. Kanban aporta la visualización del flujo, los límites WIP (Work In Progress) y las métricas de flujo continuo. Ambas dimensiones coexisten activas en todo momento.

**Principio rector:** Scrumban no es la unión de lo peor de Scrum y Kanban, sino de lo mejor de ambos. Si se adopta la rigidez del Sprint Backlog cerrado de Scrum y al mismo tiempo se ignoran los límites WIP de Kanban, el resultado es un proceso disfuncional. La integración genuina requiere respetar los mecanismos de control de cada marco.

## Las cuatro razones por las que emerge Scrumban

El curso identifica cuatro situaciones que justifican adoptar Scrumban en lugar de Scrum puro o Kanban puro:

1. El equipo usa Scrum pero necesita manejar trabajo no planificado sin romper el sprint. Scrum puro cierra el Sprint Backlog al inicio y no permite modificaciones durante la iteración; esto genera fricciones cuando surgen urgencias reales que no pueden esperar al siguiente sprint.

2. El equipo usa Kanban pero quiere cadencia y ceremonia para planificación y revisión. Kanban puro fluye libremente sin iteraciones, lo que dificulta la predictibilidad y la sincronización con clientes o stakeholders que necesitan revisiones periódicas.

3. El equipo quiere combinar la predictibilidad de Scrum con la flexibilidad de Kanban. Ninguno de los dos marcos aislado ofrece ambas propiedades al mismo tiempo; Scrumban las entrega de forma integrada.

4. El proyecto tiene dos tipos de trabajo diferenciados: desarrollo nuevo (Build/BID) y soporte o mantenimiento (Run/ROM). Cuando ambos tipos coexisten, ningún marco puro los gestiona bien de manera simultánea.

## Diferencia con Scrum puro y Kanban puro

| Característica | Scrum puro | Kanban puro | Scrumban |
| :--- | :--- | :--- | :--- |
| Iteraciones | Sprint cerrado con backlog fijo | Sin iteraciones, flujo continuo | Sprint con capacidad ROM reservada |
| Modificación durante el sprint | No permitida | No aplica | Permitida con aprobación del PO y dentro del WIP |
| Visualización del flujo | Opcional (tablero de tareas) | Tablero Kanban obligatorio con WIP | Tablero híbrido con columnas y límites WIP activos |
| Límites WIP | No existen | Obligatorios por columna | Obligatorios, definidos por el equipo |
| Métricas | Velocidad y burndown | Cycle Time, Lead Time, Throughput | Las seis métricas combinadas de ambos marcos |
| Ceremonias | Planning, Daily, Review, Retro | No formales | Las cuatro ceremonias Scrum con extensiones Kanban |
| Trabajo no planificado | Espera al siguiente sprint | Entra al flujo en cualquier momento | Entra al sprint con aprobación del PO si el WIP lo permite |
| Compromiso | Por sprint (todos los ítems) | Por tarea individual | Por sprint con clasificación BID/ROM explícita |

## Por qué Scrumban se evalúa para este proyecto

El Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 presenta las condiciones que justifican Scrumban:

- El proyecto desarrolla funcionalidades nuevas desde cero (épicas EP01 a EP06), lo que genera una dimensión BID dominante que se gestiona bien con la cadencia de Scrum.
- Las épicas EP04 (Motor de recomendación) y EP05 (Análisis de afinidad) concentran alta incertidumbre técnica. Aunque el equipo planifica con Scrum, es previsible que surjan ajustes no planificados durante esos sprints que necesitan un canal de entrada controlado, no el bloqueo total del sprint.
- El cliente es la propia institución (UVG), con requerimientos documentados y relativamente estables, pero con posibilidad de solicitudes de ajuste puntuales durante el desarrollo. Scrumban ofrece el canal ROM para absorber esas solicitudes sin replanificar el sprint.
- El equipo de 5 personas con roles diferenciados (PO, Facilitador, 4 ejecutores) se beneficia de las ceremonias de Scrum para coordinación, y de los límites WIP de Kanban para evitar sobrecarga.

## Aclaración conceptual importante

La diferencia fundamental respecto a Scrum puro radica en el tratamiento del trabajo durante el sprint:

- Scrum puro: el Sprint Backlog se cierra al inicio del sprint. Nada entra durante la iteración; si hay una urgencia, espera al siguiente sprint o se cancela el sprint actual.
- Scrumban: se cierra el BID (trabajo planificado) al inicio, pero se reserva explícitamente una fracción de la capacidad (ROM, 20%) para absorber trabajo no planificado durante el sprint, con aprobación del PO y sin exceder los límites WIP del tablero.

Esta diferencia no es cosmética: cambia la forma en que el equipo planifica, el tipo de compromisos que adquiere y los contratos de servicio que puede ofrecer.
