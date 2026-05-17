# Área 3 PMI: Gestión del Cronograma

## Descripción del área

La Gestión del Cronograma es el área del PMBOK responsable de planificar, desarrollar, gestionar y controlar el tiempo del proyecto. Su propósito es establecer una línea base de cronograma que permita medir el avance real contra lo planificado y tomar decisiones informadas cuando hay desviaciones.

En este proyecto, el cronograma opera en dos niveles: un Gantt macro de hitos PMI (H1–H8) que abarca todo el ciclo de vida del proyecto, y un Gantt micro de sprints (1–8) que detalla la ejecución ágil de la Fase 2. Ambos niveles son complementarios: el macro es el compromiso con el Sponsor; el micro es el plan de ejecución del equipo.

## Gantt macro — hitos PMI

| ID | Hito | Fecha | Fase | Responsable |
|---|---|---|---|---|
| H1 | Inicio de planificación | 10 mar 2026 | Fase 1 — Planificación | PO Say |
| H2 | Entrega documentos de planificación | 10 mar 2026 | Fase 1 — Planificación | PO Say |
| H3 | Inicio ejecución — Sprint 1 | 1 ene 2027 | Fase 2 — Ejecución | SM Cordero |
| H4 | Validación catálogo carreras (Admisiones) | 11 feb 2027 | Fase 2 — Sprint 3 | PO Say + S3 Admisiones |
| H5 | Motor de recomendación funcional | 25 feb 2027 | Fase 2 — Sprint 4 | Developer Cruz |
| H6 | Pruebas de usabilidad con usuarios reales | 8 abr 2027 | Fase 2 — Sprint 7 | PO Say + S8 Estudiantes |
| H7 | Entrega MVP — cierre técnico | 22 abr 2027 | Fase 2 — Sprint 8 | PO Say |
| H8 | Firma del Acta de Cierre | [POR CONFIRMAR CON SPONSOR] | Fase 3 — Cierre | PO Say + S1 Marroquín |

## Gantt micro — 8 sprints de ejecución

| Sprint | Período | Días hábiles | Story Points | Épicas cubiertas |
|---|---|---|---|---|
| Sprint 1 | 1 ene – 14 ene 2027 | 10 | 13 SP | EP01 (completa) |
| Sprint 2 | 15 ene – 28 ene 2027 | 10 | 15 SP | EP01 (cierre) + EP02 (inicio) |
| Sprint 3 | 29 ene – 11 feb 2027 | 10 | 16 SP | EP02 (cierre) + EP03 (inicio) — H4 al cierre |
| Sprint 4 | 12 feb – 25 feb 2027 | 10 | 13 SP | EP03 (completa) — H5 al cierre |
| Sprint 5 | 26 feb – 11 mar 2027 | 10 | 16 SP | EP04 (completa) |
| Sprint 6 | 12 mar – 25 mar 2027 | 10 | 13 SP | EP05 (inicio) |
| Sprint 7 | 26 mar – 8 abr 2027 | 10 | 16 SP | EP05 (cierre) + EP06 (inicio) — H6 al cierre |
| Sprint 8 | 9 abr – 22 abr 2027 | 10 | 19 SP | EP06 (holgura + MVP) — H7 al cierre |
| **Total** | **1 ene – 22 abr 2027** | **80** | **121 SP** | **EP01 – EP06** |

### Distribución de story points por sprint

| Sprint | SP planificados | % del total |
|---|---|---|
| Sprint 1 | 13 | 10.7% |
| Sprint 2 | 15 | 12.4% |
| Sprint 3 | 16 | 13.2% |
| Sprint 4 | 13 | 10.7% |
| Sprint 5 | 16 | 13.2% |
| Sprint 6 | 13 | 10.7% |
| Sprint 7 | 16 | 13.2% |
| Sprint 8 | 19 | 15.7% |
| **Total** | **121** | **100%** |

## El buffer del 25% como parte del cronograma planificado

El sprint 8 funciona como sprint de holgura planificada. Esta reserva de capacidad equivale aproximadamente al 10% del tiempo total de ejecución (1 sprint de 8 planificados con capacidad ampliada de 19 SP, absorbiendo el rol de holgura y MVP/Acta de Cierre).

**El buffer es parte del cronograma, no un error de estimación.** Se incluye deliberadamente para absorber desviaciones previsibles identificadas durante la planificación de riesgos.

### Qué absorben los sprints de holgura

| Riesgo | Descripción | Cómo lo absorbe el buffer |
|---|---|---|
| R1 | Cambios de requerimientos (probabilidad media) | Si el cliente solicita ajustes al catálogo o a las reglas del motor tras la validación de H4, el buffer permite incorporarlos sin sacrificar las épicas core. |
| R2 | Retraso técnico cloud (probabilidad media) | Si el entorno cloud tiene problemas de configuración o disponibilidad durante EP04–EP05, el buffer permite continuar con trabajo offline y sincronizar sin comprometer H7. |
| R7 | Baja adopción de usuarios (probabilidad media) | Las pruebas de usabilidad en H6 (sprint 7) pueden revelar ajustes de UX necesarios. El sprint 8 tiene capacidad para incorporar correcciones de usabilidad antes del cierre. |

## Principio del cronograma en planificación

Como establece el criterio académico del curso: "El Gantt en la planeación es una estimación, no un compromiso al minuto."

Este principio tiene implicaciones prácticas para este proyecto:

- Las fechas del Gantt micro son proyecciones basadas en la velocidad estimada del equipo. La velocidad real se medirá sprint a sprint y los ajustes se incorporan en la Retrospectiva.
- El Gantt macro (hitos H1–H8) tiene mayor rigidez porque representa compromisos con el Sponsor. Las fechas de los hitos son las que no deben deslizarse sin un CR aprobado.
- El buffer del sprint 8 convierte una estimación (Gantt micro) en un plan con resiliencia: el equipo puede absorber variaciones sin invalidar el compromiso con el Sponsor (Gantt macro, H7 = 22 abr 2027).

## Monitoreo del cronograma durante la ejecución

El desempeño del cronograma se monitorea con el índice SPI (Schedule Performance Index) de EVM:

- SPI = EV / PV
- SPI > 1.0: el equipo está adelantado respecto al plan.
- SPI = 1.0: el equipo está exactamente en el plan.
- SPI < 1.0: el equipo está retrasado respecto al plan.

Si el SPI cae por debajo de 0.90 durante dos sprints consecutivos, se activa el protocolo de escalamiento al Sponsor según el canal C1 del plan de comunicaciones. Ver EVM completo en `evm.md`.

## Ruta crítica del proyecto

La ruta crítica es la secuencia de hitos interdependientes cuyo retraso impacta directamente la fecha de entrega H7. No existe margen de holgura en ninguno de estos hitos sin comprometer H7.

```
H1 (Inicio planificación) -> H2 (Entrega documentos) -> H3 (Inicio sprint 1) -> H4 (Validación catálogo, sprint 3) -> H5 (Motor funcional, sprint 4) -> H6 (Pruebas usabilidad, sprint 7) -> H7 (Entrega MVP, sprint 8)
```

Cada hito de la ruta crítica tiene un responsable de verificación y una dependencia lógica con el anterior:

| Hito | Dependencia previa | Dependencia siguiente | Por qué es crítico |
|---|---|---|---|
| H3 | H2 completo + SLA cloud firmado | Sprint 1 inicia | Sin H3 no hay Fase 2. Retraso directo en todo lo demás. |
| H4 | Sprint 3 completado, EP03 en curso | EP04 puede comenzar con datos validados | EP04 y EP05 dependen del catálogo validado. Sin H4, el motor no tiene datos confiables. |
| H5 | Sprint 4 completado, EP03 funcional | EP04 puede comenzar con datos validados | EP04 y EP05 dependen de un catálogo validado. Sin H5, los módulos de recomendación y análisis quedan sin base de datos confiable. |
| H6 | Sprint 7 completado, EP06 en estado demostrable | Sprint 8 tiene insumos de usabilidad | Los resultados de H6 determinan los ajustes de UX del sprint 8. Sin H6, el sprint 8 opera sin retroalimentación real. |
| H7 | Sprint 8 completado, todas las HU Done según DoD | H8 puede planificarse | Es la fecha fija de entrega académica. Sin H7 no existe entregable para el Sponsor. |

## Supuestos del cronograma

| # | Supuesto | Impacto si no se cumple |
|---|---|---|
| SCH-SA-1 | El equipo puede sostener una velocidad de 13–16 SP por sprint durante los 7 sprints de carga completa (S1–S7). | Si la velocidad baja a menos de 10 SP/sprint de forma sostenida, el buffer del sprint 8 se consume antes de H7, comprometiendo la entrega. |
| SCH-SA-2 | No existen interrupciones de más de 2 días hábiles continuos por festividades, licencias o eventos académicos durante los 8 sprints (1 ene – 22 abr 2027). | El Gantt micro asume 10 días hábiles por sprint. Cualquier día hábil perdido no recuperado reduce la capacidad efectiva del sprint. |
| SCH-SA-3 | El SLA con el proveedor cloud (S10) garantiza disponibilidad del entorno de staging desde el H3. Si el entorno no está listo para el sprint 1, los developers pueden trabajar localmente (Docker) sin pérdida de sprint completo. | Activación de R2. El sprint 1 opera en modo degradado local; la integración se completa cuando el entorno cloud esté disponible. |
| SCH-SA-4 | La Dirección de Admisiones (S3) puede asignar un validador disponible para la revisión del catálogo EP03 antes del 11 de febrero de 2027 (H4). | Si H4 se pospone más de 5 días hábiles, EP04 inicia con el catálogo provisional, y la validación formal se registra como CR menor. |

## Restricciones temporales

| # | Restricción | Fuente | Flexible |
|---|---|---|---|
| RT-1 | H7 (entrega del MVP) el 22 de abril de 2027 es una fecha fija determinada por el calendario académico del Sponsor. No es negociable sin aprobación del CCB ampliado. | Contrato académico — S1 Marroquín | No |
| RT-2 | Los 8 sprints deben caber entre el 1 de enero y el 22 de abril de 2027 (80 días hábiles máximos). No es posible agregar un sprint 9 sin modificar H7. | Capacidad del equipo y fecha fija H7 | No |
| RT-3 | La validación del catálogo (H4) debe completarse al cierre del sprint 3 (11 feb 2027) para que EP04 pueda iniciarse en el sprint 4 con datos válidos. | Dependencia lógica EP03 $\to$ EP04 | Parcial — se puede posponer hasta inicio S5 con CR |
| RT-4 | Las pruebas de usabilidad (H6) deben ejecutarse durante el sprint 7 (26 mar–8 abr 2027) para que el sprint 8 tenga tiempo de incorporar ajustes. No pueden posponerse al sprint 8. | Dependencia lógica H6 $\to$ ajustes sprint 8 | No |
