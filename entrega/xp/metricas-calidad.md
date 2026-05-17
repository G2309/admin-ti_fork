# Métricas de calidad XP

## Propósito

Las métricas de calidad XP hacen visibles aspectos de la calidad técnica que los artefactos de Scrum (velocidad, burndown) no capturan. La velocidad de un sprint puede ser alta mientras la calidad técnica se deteriora: el equipo entrega puntos de historia rápido pero acumula deuda que reduce la velocidad de los sprints siguientes.

Las cuatro métricas del proyecto operan como señales de alerta temprana. No son métricas de performance individual: son métricas del equipo que informan decisiones de planificación técnica.

Las métricas aplican durante la Fase 2 (1 enero 2027 – 22 abril 2027) a lo largo de los 8 sprints de desarrollo.

## Las cuatro métricas de calidad

### Métrica 1: Cobertura de pruebas

**Definición.** Porcentaje de la lógica de negocio crítica (EP04, EP05) cubierta por pruebas unitarias que pasan en verde.

**Qué mide.** El grado en que el comportamiento del motor de recomendación y del modelo de ponderación está respaldado por pruebas automatizadas. Una cobertura baja en EP04/EP05 significa que el equipo no puede hacer refactoring ni modificar el algoritmo con confianza.

**Cómo se mide.** El pipeline CI genera un reporte de cobertura en cada ejecución. El reporte se revisa al cierre de cada sprint para las historias de EP04 y EP05. La cobertura se mide sobre la lógica de negocio (funciones de scoring, ranking y ponderación), no sobre el código total de la aplicación.

**Frecuencia de reporte.** Por sprint. Se revisa en la Retrospectiva del sprint y se incluye en el informe quincenal C1 cuando el sprint coincide con el período de reporte.

**Umbral.** No se adopta un porcentaje fijo de cobertura como objetivo (las métricas de cobertura por línea sobre todo el código base están fuera del alcance del curso). El criterio es funcional: los casos principales y los casos límite del algoritmo de recomendación deben estar cubiertos. El equipo define en el Sprint Planning qué casos son "los principales" para cada historia de EP04/EP05.

**Señal de alerta.** Si al cierre de un sprint que incluye historias de EP04 o EP05 la cobertura de las funciones de scoring y ranking es baja o nula, las historias no cumplen el DoD (XP-1) y no se cierran.

### Métrica 2: Defectos por sprint

**Definición.** Número de defectos identificados en el Sprint Review que no fueron detectados antes del merge al repositorio principal.

**Qué mide.** La efectividad de los mecanismos de detección temprana: TDD, Pair Programming y CI. Si el Sprint Review descubre defectos que TDD y CI debían haber detectado, es una señal de que esas prácticas no se están aplicando con rigor suficiente.

**Cómo se mide.** Durante el Sprint Review, el PO (Josué Say) o los stakeholders identifican comportamientos incorrectos del incremento. El SM (Mathew Cordero) registra estos defectos y verifica si estaban cubiertos por pruebas existentes o por el pipeline CI.

La distinción importante es entre:

- Defectos que las pruebas existentes debían haber detectado (señal de TDD deficiente o CI ignorado).
- Defectos en casos no contemplados previamente (señal de cobertura de criterios de aceptación insuficiente).

El primer tipo es el indicador relevante para esta métrica.

**Frecuencia de reporte.** Por sprint. El SM registra el número y tipo de defecto identificados en cada Review.

**Señal de alerta.** Un incremento sostenido de defectos del primer tipo (cubiertos por pruebas existentes pero no detectados) indica que el equipo está mergeando código con CI en rojo o sin aplicar TDD. Requiere intervención en la Retrospectiva siguiente.

### Métrica 3: Historias técnicas completadas vs planificadas

**Definición.** Ratio entre el número de historias técnicas (HT-01 a HT-07) completadas en el sprint y el número planificadas en el Sprint Planning para ese sprint.

**Qué mide.** Si el equipo está cumpliendo el compromiso de reservar capacidad para trabajo técnico. Un ratio bajo sprint tras sprint indica que las historias técnicas se están postergando sistemáticamente bajo presión de funcionalidad, lo que predice acumulación de deuda técnica.

**Cómo se mide.** Al cierre de cada sprint, el SM compara las historias técnicas incluidas en el Sprint Backlog con las marcadas como Done al final del sprint. Las historias que se devolvieron al backlog o quedaron sin completar se registran con la razón de la no-completud.

**Frecuencia de reporte.** Por sprint. Se incluye en la Retrospectiva como ítem de discusión cuando el ratio es inferior a 1.0 (alguna historia técnica planificada no se completó).

**Señal de alerta.** Si dos sprints consecutivos terminan con historias técnicas planificadas sin completar, es una señal de que la capacidad reservada para trabajo técnico (20 %) no está siendo respetada en la práctica. El SM lleva este dato a la Retrospectiva para que el equipo decida si ajustar la planificación o el criterio de selección de historias técnicas para el próximo sprint.

### Métrica 4: Deuda técnica documentada

**Definición.** Número de ítems de deuda técnica identificados y registrados en el backlog al cierre de cada sprint.

**Qué mide.** La transparencia del equipo sobre la deuda técnica existente y la efectividad del criterio XP-3 (sin deuda técnica deliberada). Un número creciente de ítems de deuda documentada es mejor que deuda enterrada en el código: al menos es visible y puede priorizarse.

El indicador preocupante no es que existan ítems de deuda documentada, sino que existan ítems de deuda documentada que no son atendidos sprint tras sprint.

**Cómo se mide.** Al cierre de cada sprint, el equipo revisa en la Retrospectiva los ítems de deuda técnica identificados durante el desarrollo. Los ítems se registran en el backlog con:

- Descripción del problema técnico.
- Módulo o historia afectada.
- Estimación de esfuerzo para resolverlo.
- Sprint en que fue identificado.

Los ítems resueltos se cierran. Los no resueltos se priorizan para el próximo sprint junto con las historias funcionales.

**Frecuencia de reporte.** Por sprint. El SM incluye el número de ítems abiertos de deuda técnica en el informe quincenal C1.

**Señal de alerta.** Si hay ítems de deuda técnica en EP04 o EP05 que llevan más de dos sprints sin atenderse, el SM alerta al equipo y al PO. La deuda técnica en el motor de recomendación no puede postergarse indefinidamente: es el componente central del sistema.

## Cómo se reportan las métricas

**Retrospectiva del sprint.** Las cuatro métricas se revisan en la Retrospectiva al cierre de cada sprint. El SM presenta los datos; el equipo discute las causas y decide acciones concretas para el próximo sprint.

**Informe quincenal C1.** Las métricas se incluyen en el informe quincenal que el equipo entrega a los stakeholders de UVG. El formato es un resumen ejecutivo: estado de cada métrica (dentro de rango / fuera de rango), tendencia respecto al sprint anterior y acciones planificadas si alguna métrica está en alerta.

**Visibilidad en el tablero.** El número de ítems de deuda técnica abiertos y el estado del pipeline CI (verde/rojo) son visibles en el tablero del proyecto en todo momento, no solo en los momentos de reporte formal.

## Por qué no se adoptan métricas de observabilidad avanzada

Las métricas de observabilidad avanzada (trazas distribuidas, métricas de latencia en percentiles, alertas de disponibilidad, dashboards de error rate en producción) están fuera del alcance del curso y del proyecto.

El sistema de recomendación de carrera universitaria de UVG Campus Central no tiene requerimientos de SLA de alta disponibilidad ni de monitoreo en tiempo real que justifiquen esa inversión. Las cuatro métricas XP cubren los aspectos de calidad técnica relevantes para el contexto del proyecto: disciplina de pruebas, efectividad de la detección temprana de defectos, cumplimiento del trabajo técnico planificado y transparencia sobre la deuda acumulada.
