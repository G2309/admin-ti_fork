# Acta de Cierre del Proyecto: Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026

## Identificación del proyecto

| Campo | Valor |
|---|---|
| Nombre del proyecto | Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 |
| Sponsor / Catedrático | Erick Oswaldo Marroquín Zamora |
| Product Owner | Josué Say |
| Scrum Master | Mathew Cordero |
| Fecha de inicio de ejecución | 1 de enero de 2027 (H3) |
| Fecha de entrega del MVP | 22 de abril de 2027 (H7) |
| Fecha del Acta de Cierre | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] (H8) |
| Versión del acta | 1.0 |

## Alcance declarado vs alcance entregado

### Tabla por módulo

| ID | Módulo / Épica | Alcance declarado | Estado al cierre | Observaciones |
|---|---|---|---|---|
| EP01 | Registro y perfiles | 6 HU, 18 SP, 28 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprint 1 y parcial sprint 2 |
| EP02 | Encuesta vocacional | 6 HU, 20 SP, 28 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprint 2 y parcial sprint 3 |
| EP03 | Carreras y pensum 2026 | 7 HU, 19 SP, 30 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprint 3 y sprint 4 — validado en H4 |
| EP04 | Motor de recomendación | 3 HU, 16 SP, 10 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprint 5 — funcional en H5 |
| EP05 | Análisis y clasificación de afinidad | 4 HU, 26 SP, 15 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprint 6 y parcial sprint 7 |
| EP06 | Panel de resultados | 6 HU, 22 SP, 22 tareas | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Sprints 7 y 8 — prueba en H6 |
| **Total** | | **32 HU, 121 SP, 133 tareas** | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | |

## Exclusiones del alcance

Las siguientes funcionalidades estuvieron explícitamente fuera del alcance desde el Project Charter y se confirman como excluidas al cierre:

- Integración directa con el sistema de admisiones o ERP de UVG.
- Módulo de orientación psicológica o asesoría personalizada.
- Seguimiento post-admisión del desempeño académico.
- Cobertura de campus distintos a UVG Campus Central.
- Aplicación móvil nativa (iOS / Android).
- Autenticación federada con SSO institucional de UVG.
- Recomendación de postgrados o programas fuera del pregrado 2026.
- Módulo administrativo de reportes para Admisiones.
- Soporte o mantenimiento post-cierre.

## Cumplimiento del DoD al cierre

| # | Criterio del DoD | Estado al cierre | Observaciones |
|---|---|---|---|
| 1 | Código desarrollado y en repositorio | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar commit final en rama main |
| 2 | Tests unitarios escritos y pasando (TDD) | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar cobertura mínima acordada |
| 3 | Code Review completado para todas las HU | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar columna Code Review del tablero |
| 4 | CI sin errores en pipeline final | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar último build de staging y producción |
| 5 | Pruebas funcionales pasando (criterios de aceptación) | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Incluye resultados de H6 |
| 6 | Revisión de seguridad completada (EP01, EP02, EP06) | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar checklist de seguridad Developer Chen |
| 7 | Documentación técnica mínima actualizada | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | Verificar README y documentación de API |

## Lista de entregables del proyecto

### Entregables de planificación (Fase 1 — 2026)

- Project Charter firmado por el Sponsor.
- Registro de stakeholders con Matriz Poder-Interés.
- WBS/EDT de 3 niveles (épicas $\to$ HU $\to$ tareas).
- Plan de cronograma (Gantt macro H1–H8 + Gantt micro 8 sprints).
- Plan de riesgos R1–R9 con estrategias de respuesta.
- Plan de comunicaciones C1–C8.
- Plan de adquisiciones (SLA con proveedor cloud S10).
- Plan de calidad (DoR + DoD + criterios de aceptación).
- Plan de control de cambios (proceso CR + composición CCB).
- Plan de EVM para monitoreo de la Fase 2.
- Acta de Cierre (este documento).

### Entregables de ejecución (Fase 2 — 2027)

- Incrementos funcionales al cierre de cada sprint 1–8.
- Sistema de recomendación MVP con EP01–EP06 funcionando (H7).
- Acta de validación del catálogo de carreras firmada por Admisiones (H4).
- Informe de pruebas de usabilidad con resultados de H6.
- Informes quincenales C1 al Sponsor (8 informes).
- Registro de CRs del proyecto.
- Reporte EVM final con CPI y SPI del proyecto completo.

## Sección de costos

El detalle de costos del proyecto (presupuesto base, burn rate, reserva de contingencia, CPI y EAC finales) se documenta en `costos.md`. Este Acta de Cierre no incluye montos específicos para evitar duplicidad de información financiera.

Al cierre, el PO debe incorporar en esta acta una referencia al CPI final calculado en el reporte EVM del sprint 8.

## Cronograma final vs planificado

| ID | Hito | Fecha planificada | Fecha real | Varianza | Estado |
|---|---|---|---|---|---|
| H1 | Inicio planificación | 10 mar 2026 | 10 mar 2026 | 0 días | Cumplido |
| H2 | Entrega documentos planificación | 10 mar 2026 | 10 mar 2026 | 0 días | Cumplido |
| H3 | Inicio ejecución sprint 1 | 1 ene 2027 | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |
| H4 | Validación catálogo Admisiones | 11 feb 2027 | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |
| H5 | Motor de recomendación funcional | 25 feb 2027 | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |
| H6 | Pruebas usabilidad con usuarios | 8 abr 2027 | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |
| H7 | Entrega MVP — cierre técnico | 22 abr 2027 | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |
| H8 | Firma Acta de Cierre | [Por confirmar con Sponsor] | [POR CONFIRMAR] | — | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |

## Lecciones aprendidas

### Lección 1 — Validación temprana del catálogo con stakeholders externos

**Causa raíz identificada en planificación:** Los stakeholders externos con poder sobre entregables críticos (S3 Dirección de Admisiones para EP03) pueden generar retrasos si su disponibilidad no está garantizada con anticipación.

**Acción correctiva:** El hito H4 (validación del catálogo, sprint 3) fue coordinado con Admisiones desde la Fase 1 para garantizar disponibilidad del validador externo. En futuros proyectos con dependencias externas, la coordinación con el stakeholder validador debe iniciarse en la Fase 1, no al inicio del sprint donde se necesita la validación.

**Estado al cierre:** [POR CONFIRMAR AL CIERRE DEL SPRINT 9 — verificar si H4 requirió ajuste]

### Lección 2 — Valor del buffer de holgura planificado vs buffer improvisado

**Causa raíz identificada en planificación:** Los proyectos de software con dependencias externas (proveedores, stakeholders validadores) invariablemente experimentan retrasos puntuales. Un buffer planificado desde el inicio (sprints 8 y 9) es cualitativamente diferente a un buffer improvisado al final: el buffer planificado está en el Gantt, el improvisado es deuda con el Sponsor.

**Acción correctiva:** El sprint 8 se diseñó explícitamente como holgura planificada (10% del tiempo total). En futuros proyectos, el buffer debe estar explícito en el contrato con el Sponsor desde el Project Charter, no ocultarse como "sprints normales" que serán reutilizados si hay retrasos.

**Estado al cierre:** [POR CONFIRMAR AL CIERRE DEL SPRINT 9 — verificar qué absorbió el buffer]

### Lección 3 — El control de cambios protege al equipo, no solo al contrato

**Causa raíz identificada en planificación:** Los developers bajo presión de velocidad tienden a aceptar "pequeñas mejoras" de stakeholders de manera informal, sin pasar por el PO. Esto genera scope creep invisible que consume capacidad del equipo sin ser registrado en el EVM.

**Acción correctiva:** La instrucción explícita a los developers de redirigir toda solicitud al PO (sin comprometerse a implementarla) fue establecida como norma del equipo desde el inicio de la Fase 2. En futuros proyectos, esta norma debe incluirse en el kickoff del sprint 1 y reforzarse en las Retrospectivas.

**Estado al cierre:** [POR CONFIRMAR AL CIERRE DEL SPRINT 9 — verificar si hubo CRs originados en solicitudes directas a developers]

## Riesgos materializados

| ID | Descripción | Se materializó | Impacto real | Respuesta ejecutada | Observaciones |
|---|---|---|---|---|---|
| R1 | Cambios de requerimientos | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar CRs aprobados en el registro |
| R2 | Retraso técnico cloud | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar tickets de soporte C7 |
| R3 | Falta comunicación stakeholders | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar actas de reunión C1 y C2 |
| R4 | Falta involucramiento cliente en validaciones | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar cumplimiento de hitos H4, H5, H6 |
| R5 | Rotación de personal | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar disponibilidad del equipo durante los 8 sprints |
| R6 | Falla proveedor cloud | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar incidencias de disponibilidad cloud |
| R7 | Baja adopción usuarios | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar resultados pruebas usabilidad H6 |
| R8 | Exposición datos personales | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar incidentes de seguridad |
| R9 | Cambios pensum UVG 2026 | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] | [POR CONFIRMAR] | [POR CONFIRMAR] | Verificar actualizaciones post-H4 |

## Declaración de conformidad del cliente

Por medio de la presente, el Sponsor y Catedrático del proyecto declara que los entregables del Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 han sido revisados y cumplen con el alcance comprometido en el Project Charter y con los criterios de aceptación definidos en el Plan de Calidad.

| Campo | Valor |
|---|---|
| Sponsor / Catedrático | Erick Oswaldo Marroquín Zamora |
| Firma | [FIRMA PENDIENTE — H8] |
| Fecha de firma | [POR CONFIRMAR CON SPONSOR] |
| Product Owner | Josué Say |
| Firma PO | [FIRMA PENDIENTE — H8] |
| Scrum Master | Mathew Cordero |
| Firma SM | [FIRMA PENDIENTE — H8] |
| Observaciones del Sponsor | [POR CONFIRMAR AL CIERRE DEL SPRINT 8] |

## Anti-patrones evitados

- Cierre verbal sin documentación: el proyecto no está cerrado hasta que el Acta de Cierre está firmada por el Sponsor. La entrega del MVP (H7) no es el cierre formal; es el hito técnico que precede al cierre.
- Acta de Cierre sin lecciones aprendidas: las 3 lecciones documentadas arriba son un insumo para futuros proyectos de la institución, no un formalismo vacío.
- Ignorar CRs al cierre: el registro de CRs es un artefacto de cierre que debe revisarse completo para confirmar que todos los cambios aprobados fueron implementados y los rechazados quedan documentados.
- Cierre sin verificación del DoD completo: todas las HU entregadas deben verificarse contra el DoD antes de declarar el MVP como completo. Una HU que no pasa el DoD no es un entregable válido.

## Principio rector

"Sin acta firmada, el proyecto no está cerrado."

La entrega técnica del sistema (H7) y el cierre formal del proyecto (H8) son dos eventos distintos. El MVP puede estar funcionando en producción, pero sin el Acta de Cierre firmada por el Sponsor, el proyecto está en un estado indefinido: técnicamente completo pero sin validación formal del cliente. El Acta de Cierre es el documento que transforma la entrega técnica en un compromiso cumplido formalmente reconocido por todas las partes.

## Repositorio de documentos del proyecto

Al momento del cierre formal (H8), el archivo del proyecto debe incluir los siguientes documentos en el repositorio Git del proyecto (rama `main`):

### Documentos de planificación (Fase 1 — 2026)

| Documento | Archivo | Estado al cierre |
|---|---|---|
| Gestión de la Integración (Project Charter) | `pmi/integracion.md` | Vigente |
| Gestión del Alcance (WBS/EDT) | `pmi/alcance.md` | Vigente |
| Gestión del Cronograma (Gantt macro + micro) | `pmi/tiempo.md` | Vigente con varianzas documentadas |
| Gestión de la Calidad (DoR + DoD) | `pmi/calidad.md` | Vigente |
| Gestión de los Recursos (equipo + RACI) | `pmi/recursos.md` | Vigente |
| Gestión de las Comunicaciones (C1–C8) | `pmi/comunicaciones.md` | Vigente |
| Gestión de los Riesgos (R1–R9) | `pmi/riesgos.md` | Vigente con estado de materialización al cierre |
| Gestión de las Adquisiciones (SLA cloud) | `pmi/adquisiciones.md` | Vigente |
| Gestión de los Stakeholders | `pmi/stakeholders.md` | Vigente |
| Control Integrado de Cambios | `pmi/control-cambios.md` | Vigente con registro de CRs del proyecto |
| EVM — Monitoreo de desempeño | `pmi/evm.md` | Vigente con reporte final sprint 8 |
| Marco metodológico Water-Scrum-Fall | `pmi/water-scrum-fall.md` | Vigente |
| SAFe y Skills Matrix (no aplica) | `pmi/safe.md` | Vigente |
| Acta de Cierre | `pmi/acta-cierre.md` | Este documento — firmado en H8 |

### Documentos de ejecución (Fase 2 — 2027)

| Documento | Ubicación | Estado al cierre |
|---|---|---|
| Registro de CRs del proyecto | Repositorio del proyecto / PM tool | Completo al cierre de sprint 8 |
| Informes C1 al Sponsor (8 sprints) | Repositorio del proyecto / carpeta informes | Archivados por sprint |
| Acta de validación H4 (Admisiones) | Repositorio del proyecto / hitos | Firmada por S3 |
| Informe de pruebas de usabilidad H6 | Repositorio del proyecto / hitos | Con resultados documentados |
| Reporte EVM final (sprint 8) | `pmi/evm.md` actualizado | Con CPI y SPI finales |
| Código fuente del sistema | Repositorio Git — rama `main` | Commit final etiquetado como v1.0 |
| Documentación técnica (API, README) | Repositorio Git | Actualizada al cierre del sprint 8 |
