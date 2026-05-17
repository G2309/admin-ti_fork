# Área 1 PMI: Gestión de la Integración — Project Charter

## Identificación del documento

| Campo | Valor |
|---|---|
| Nombre del proyecto | Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 |
| Código de documento | SITPS-PMI-2026-01 |
| Sponsor / Catedrático | Erick Oswaldo Marroquín Zamora |
| Product Owner | Josué Say |
| Scrum Master | Mathew Cordero |
| Versión del Charter | 1.0 |
| Fecha de emisión | 10 de marzo de 2026 (H1) |
| Estado | Aprobado — firma del Sponsor requerida en H2 |

## Resumen ejecutivo

Los aspirantes a UVG Campus Central carecen de un sistema estructurado que oriente su elección de carrera con base en datos objetivos. La incertidumbre vocacional produce inscripciones en carreras con baja afinidad real, deserción temprana y subutilización de recursos institucionales.

El Sistema de Recomendación de Carrera Universitaria resuelve este problema mediante un motor de afinidad que procesa el perfil del aspirante contra el catálogo de pregrado UVG 2026 y genera un ranking de compatibilidad personalizado. El sistema se entrega como aplicación web funcional el 6 de mayo de 2027 (H7), desarrollado en 9 sprints bajo el modelo Water-Scrum-Fall.

| Campo | Valor |
|---|---|
| Problema central | Ausencia de orientación vocacional estructurada y digitalizada para aspirantes a UVG Campus Central |
| Solución propuesta | Aplicación web de recomendación de carrera basada en encuesta vocacional y motor de afinidad |
| Beneficio principal | Reducción de la incertidumbre en la elección de carrera para aspirantes de diversificado |
| Alcance del MVP | EP01–EP06: 6 épicas, 32 historias de usuario, 121 story points, 133 tareas técnicas, 9 sprints |
| Fecha de entrega técnica | 6 de mayo de 2027 (H7) |
| Fecha de cierre formal | Por confirmar con Sponsor post-sprint 9 (H8) |
| Presupuesto total (BAC) | Ver `costos-consolidados.md` |

## Caso de negocio

### Situación actual

La Dirección de Admisiones de UVG Campus Central no dispone de un mecanismo digital estandarizado para orientar a los aspirantes en la selección de carrera. La orientación vocacional actual depende de charlas presenciales, materiales impresos y consultas individuales no sistematizadas, lo que genera heterogeneidad en la calidad de la orientación recibida y no escala ante el volumen de aspirantes por ciclo académico.

### Oportunidad identificada

El perfil del aspirante de diversificado guatemalteco incluye intereses, habilidades percibidas y preferencias vocacionales que pueden capturarse mediante encuesta estructurada. Estos datos, procesados contra el catálogo de carreras 2026 con un motor de afinidad, permiten generar recomendaciones objetivas y reproducibles sin intervención humana directa. La implementación como aplicación web garantiza acceso desde cualquier dispositivo con navegador sin costo adicional para el aspirante.

### Beneficios esperados

| Beneficio | Indicador de éxito | Cómo se mide |
|---|---|---|
| Orientación vocacional disponible digitalmente | MVP funcional entregado en H7 | Todas las HU de EP01–EP06 en estado Done según DoD al cierre del sprint 9 |
| Catálogo de carreras UVG 2026 validado y digitalizado | Acta de validación firmada por Admisiones | Hito H4 completado con firma de S3 al cierre del sprint 3 |
| Experiencia de usuario aceptable | Pruebas de usabilidad aprobadas en H6 | $\geq$ 70% de participantes completan el flujo sin asistencia en sprint 8 |
| Gobernanza del proyecto documentada | Conjunto de documentos PMI entregado al Sponsor | Documentos de planificación completados en H2 y presentados a S1 |
| Sistema replicable para otros ciclos | Arquitectura modular con catálogo actualizable | Documentación técnica entregada con el código fuente en H7 |

### Justificación de la inversión

El costo del proyecto (ver `costos-consolidados.md`) es asumido como inversión académica por el Sponsor. El retorno esperado no es financiero directo sino institucional: UVG Campus Central obtiene un sistema replicable de orientación vocacional basado en datos, actualizable para ciclos posteriores, que reduce la carga de orientación presencial sobre el personal de Admisiones.

## Descripción del proyecto

### Alcance incluido (In Scope)

| ID | Épica | Descripción | HU | SP |
|---|---|---|---|---|
| EP01 | Registro y perfiles | Creación de cuenta, autenticación y gestión del perfil del aspirante | 6 | 18 |
| EP02 | Encuesta vocacional | Formulario interactivo que captura intereses, habilidades y preferencias vocacionales del aspirante | 6 | 20 |
| EP03 | Carreras y pensum 2026 | Catálogo digital de carreras de pregrado UVG Campus Central validado por Admisiones | 7 | 19 |
| EP04 | Motor de recomendación | Algoritmo de afinidad que genera un ranking de compatibilidad entre el perfil del aspirante y las carreras | 3 | 16 |
| EP05 | Análisis y clasificación de afinidad | Módulo que interpreta y clasifica los resultados del motor (alta, media, baja afinidad) | 4 | 26 |
| EP06 | Panel de resultados | Interfaz que presenta el ranking de carreras recomendadas con información detallada de cada opción | 6 | 22 |
| **Total** | | | **32 HU** | **121 SP** |

### Alcance excluido (Out of Scope)

- Integración directa con el sistema de admisiones o ERP institucional de UVG.
- Módulo de orientación psicológica o asesoría personalizada por profesional humano.
- Seguimiento post-admisión del desempeño académico del estudiante inscrito.
- Cobertura de campus o sedes de UVG distintos a Campus Central.
- Aplicación móvil nativa para iOS o Android.
- Autenticación federada con SSO institucional de UVG o Active Directory.
- Recomendación de carreras técnicas, postgrados o programas fuera del pregrado 2026.
- Módulo administrativo de reportes estadísticos para la Dirección de Admisiones.
- Soporte o mantenimiento post-cierre del proyecto.

### Declaración de alcance

El Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 es una aplicación web que permite a los aspirantes de diversificado completar un perfil vocacional y recibir un ranking personalizado de carreras de pregrado compatibles con sus intereses y habilidades, basado en el catálogo oficial UVG 2026. El sistema cubre el ciclo completo desde el registro del aspirante hasta la presentación de resultados, sin integración con sistemas de admisión, sin módulos de seguimiento académico y sin aplicación móvil nativa.

### Criterios de éxito del proyecto

| # | Criterio | Métrica | Verificación |
|---|---|---|---|
| CE-1 | MVP entregado en fecha comprometida | H7 completado el 6 de mayo de 2027 o antes | Fecha real vs fecha planificada al cierre del sprint 9 |
| CE-2 | Todas las épicas EP01–EP06 funcionales | 32 HU en estado Done según DoD | Reporte de DoD al cierre del sprint 9 |
| CE-3 | Catálogo validado por Admisiones | Acta firmada por S3 en H4 | Documento de validación en el archivo del proyecto |
| CE-4 | Usabilidad aceptable para aspirantes | $\geq$ 70% de participantes completan el flujo sin asistencia | Resultados de las sesiones de usabilidad H6 |
| CE-5 | Desempeño dentro del presupuesto | CPI final $\geq$ 0.90 al cierre del sprint 9 | Reporte EVM sprint 9 — ver `evm.md` |
| CE-6 | Cierre formal completado | Acta de Cierre firmada por el Sponsor (H8) | Firma del Acta en `acta-cierre.md` |

### Necesidades de los stakeholders

| ID | Stakeholder | Necesidad principal | Cómo la cubre el sistema |
|---|---|---|---|
| S1 | Marroquín (Sponsor) | Proyecto documentado, gobernado y entregado a tiempo | Plan PMI completo + informes C1 quincenales + H7 y H8 |
| S2 | UVG institución | Sistema replicable que mejore la orientación vocacional institucional | MVP documentado y con arquitectura de catálogo actualizable |
| S3 | Dirección de Admisiones | Catálogo de carreras digitalizado y validado, presentado sin errores | EP03 con proceso de validación formal en H4 |
| S4 | Área de TI UVG | Sistema desplegable sin conflictos con la infraestructura institucional | Coordinación técnica C4 y SLA con proveedor cloud externo |
| S8 | Aspirantes de diversificado | Herramienta que los ayude a elegir carrera con confianza | EP01–EP06: flujo completo de recomendación basado en su perfil real |
| S9 | Catedráticos de carreras | Que su carrera esté descrita correctamente en el catálogo | C6: validación de descripción de carreras en EP03 |

Ver registro completo en `stakeholders.md`.

### Entregables del proyecto

| ID | Entregable | Fase | Hito de entrega |
|---|---|---|---|
| E-01 | Project Charter firmado | Fase 1 | H2 — 10 mar 2026 |
| E-02 | Registro de stakeholders con Matriz Poder-Interés | Fase 1 | H2 |
| E-03 | WBS/EDT de 3 niveles (épicas $\to$ HU $\to$ tareas) | Fase 1 | H2 |
| E-04 | Plan de cronograma (Gantt macro H1–H8 + micro 9 sprints) | Fase 1 | H2 |
| E-05 | Plan de riesgos R1–R9 con estrategias de respuesta | Fase 1 | H2 |
| E-06 | Plan de comunicaciones C1–C8 | Fase 1 | H2 |
| E-07 | Plan de adquisiciones con SLA cloud | Fase 1 | H2 |
| E-08 | Plan de calidad (DoR + DoD + criterios de aceptación) | Fase 1 | H2 |
| E-09 | Plan de control de cambios (proceso CR + CCB) | Fase 1 | H2 |
| E-10 | Plan de EVM para monitoreo de la Fase 2 | Fase 1 | H2 |
| E-11 | Sistema web MVP con EP01–EP06 funcionales | Fase 2 | H7 — 6 may 2027 |
| E-12 | Acta de validación del catálogo firmada por Admisiones | Fase 2 | H4 — 11 feb 2027 |
| E-13 | Informe de pruebas de usabilidad con resultados H6 | Fase 2 | H6 — 22 abr 2027 |
| E-14 | Informes C1 al Sponsor (9 informes quincenales) | Fase 2 | Cada cierre de sprint |
| E-15 | Reporte EVM final con CPI y SPI del proyecto completo | Fase 3 | Post sprint 9 |
| E-16 | Acta de Cierre firmada por el Sponsor | Fase 3 | H8 — por confirmar |

### Supuestos

| # | Supuesto | Implicación si no se cumple |
|---|---|---|
| SA-1 | El catálogo de pregrado UVG 2026 es estable. Admisiones no modificará carreras ni pensa después de la validación en H4. | Si cambia post-H4, se activa R9 y se gestiona como CR menor. |
| SA-2 | El Sponsor está disponible para revisiones quincenales C1 durante toda la Fase 2. | Si la disponibilidad falla, se activa R4 y el protocolo de escalamiento. |
| SA-3 | El equipo de 5 personas mantiene la disponibilidad declarada en FTE durante los 9 sprints. | Si hay rotación, se activa R5 y el protocolo de pair programming y documentación. |
| SA-4 | La infraestructura cloud (S10) estará operativa antes del H3 (1 ene 2027). | Si no, se activa R2 y el entorno local/Docker de contingencia. |
| SA-5 | Los aspirantes de diversificado tienen acceso a dispositivo con navegador web moderno. | Si no, el sistema requiere ajustes de compatibilidad fuera del alcance comprometido. |

### Restricciones

| # | Restricción | Fuente |
|---|---|---|
| RC-1 | H7 el 6 de mayo de 2027 es fecha fija por el calendario académico del Sponsor. No es negociable sin CCB ampliado. | Contrato académico — S1 |
| RC-2 | Equipo máximo de 5 personas. Sin contratación adicional sin aprobación del CCB ampliado. | Presupuesto del proyecto |
| RC-3 | El sistema cubre únicamente UVG Campus Central y el pregrado 2026. | Project Charter |
| RC-4 | Toda modificación al alcance comprometido requiere proceso formal CR $\to$ CCB. | Plan de control de cambios |
| RC-5 | Los datos personales de los aspirantes deben manejarse con cifrado en tránsito y en reposo. | Riesgo R8 |

### Riesgos de alto nivel

Los riesgos prioritarios identificados en la planificación son:

| ID | Descripción | Probabilidad | Estrategia |
|---|---|---|---|
| R1 | Cambios de requerimientos durante la ejecución | Media (0.40) | Mitigar — DoR + proceso CR |
| R2 | Retraso técnico del proveedor cloud | Media (0.40) | Mitigar — entorno Docker de contingencia |
| R6 | Falla grave del proveedor cloud en producción | Baja (0.20) | Transferir — SLA con penalidades |
| R7 | Baja adopción por parte de los usuarios | Media (0.40) | Mitigar — pruebas de usabilidad H6 |
| R8 | Exposición de datos personales de aspirantes | Baja (0.20) | Mitigar — cifrado + revisión de seguridad Developer Chen |

Ver registro completo de los 9 riesgos en `riesgos.md`.

## Costo, cronograma y recursos

### Costo

El presupuesto total del proyecto (BAC) se detalla en `costos-consolidados.md`. Incluye:

- Salarios del equipo (PO, SM, 3 developers) por el período de ejecución.
- Infraestructura cloud (S10) por el período 1 ene – 30 may 2027.
- Costos adicionales: licencias, hardware, energía, herramientas.
- Reserva de contingencia: $\sum$ EMV de los riesgos R1–R9.

### Cronograma e hitos

| ID | Hito | Fecha | Entregable |
|---|---|---|---|
| H1 | Inicio de planificación | 10 mar 2026 | Aprobación formal del proyecto |
| H2 | Entrega documentos de planificación | 10 mar 2026 | Conjunto completo de planes PMI (E-01 a E-10) |
| H3 | Inicio de ejecución — Sprint 1 | 1 ene 2027 | Entorno operativo + equipo listo |
| H4 | Validación catálogo de carreras | 11 feb 2027 | Acta firmada por Admisiones (E-12) |
| H5 | Motor de recomendación funcional | 11 mar 2027 | EP04 completado y desplegado en staging |
| H6 | Pruebas de usabilidad con usuarios reales | 22 abr 2027 | Informe de usabilidad con resultados (E-13) |
| H7 | Entrega del MVP — cierre técnico | 6 may 2027 | Sistema web EP01–EP06 funcional (E-11) |
| H8 | Firma del Acta de Cierre | Por confirmar con Sponsor | Acta firmada por S1 Marroquín (E-16) |

### Recursos planificados

| Rol | Nombre | FTE | Responsabilidad principal |
|---|---|---|---|
| Product Owner | Josué Say | 0.7 interno / 1.0 facturado | Backlog, stakeholders, control de cambios, informes C1 |
| Scrum Master | Mathew Cordero | 1.0 | Ceremonies, impedimentos, protección del equipo |
| Developer — Líder técnico | Gustavo Cruz Bardales | 1.0 | Arquitectura, cloud, EP03 y EP04, coordinación TI (C4) |
| Developer — Seguridad | Javier Chen Gonzalez | 1.0 | Cifrado, vulnerabilidades (R8), proveedor cloud (C7) |
| Developer | Pedro Guzmán Mayen | 1.0 | Funcionalidades backlog, pair programming, code review |

Ver RACI completo en `recursos.md`.

## Enfoque

### Metodología

El proyecto adopta el modelo **Water-Scrum-Fall**:

| Fase | Período | Marco | Objetivo |
|---|---|---|---|
| Fase 1 — Planificación | 10 mar 2026 – 31 dic 2026 | PMI (10 áreas) | Producir los documentos de gobernanza y el contrato de alcance con el Sponsor |
| Fase 2 — Ejecución | 1 ene 2027 – 6 may 2027 | Scrum + Kanban/Scrumban + XP | Desarrollar las 6 épicas en 9 sprints con ceremonias ágiles y prácticas técnicas XP |
| Fase 3 — Cierre | Mayo 2027 | PMI (procesos de cierre) | Validar el alcance entregado y obtener la firma del Acta de Cierre (H8) |

Ver justificación completa del modelo en `water-scrum-fall.md`.

### Gestión de cambios

Cualquier modificación al alcance, cronograma o recursos comprometidos en este Charter durante la Fase 2 debe seguir el proceso formal de control de cambios:

```bash
Solicitud CR -> Evaluación de impacto (5 días hábiles) -> Decisión CCB -> Implementación o archivo -> Comunicación al solicitante
```

- **CCB básico** (PO Say + SM Cordero): cambios menores ($\leq$ 5 SP adicionales, sin impacto en hitos macro).
- **CCB ampliado** (PO + SM + Sponsor Marroquín): cambios mayores que afecten hitos H1–H8 o el presupuesto total.

Ver proceso completo en `control-cambios.md`.

## Gobernanza

### Estructura de gobierno del proyecto

| Órgano | Integrantes | Función |
|---|---|---|
| Sponsor | Erick Oswaldo Marroquín Zamora | Autoriza el inicio, aprueba cambios mayores (CCB ampliado), firma el Acta de Cierre |
| CCB básico | PO Say + SM Cordero | Aprueba o rechaza cambios menores al alcance |
| CCB ampliado | PO + SM + Sponsor | Aprueba cambios que modifican hitos macro o el presupuesto |
| Product Owner | Josué Say | Propietario del backlog, representante del cliente ante el equipo, responsable de los informes C1 |
| Scrum Master | Mathew Cordero | Facilita las ceremonies, protege al equipo del scope creep, gestiona el canal C3 |

### Roles y responsabilidades

La matriz de responsabilidades completa (RACI) para las 16 actividades clave del proyecto está documentada en `recursos.md`.

### Autorización del proyecto

Por medio de este Project Charter, el Sponsor autoriza formalmente el inicio del proyecto y otorga al Product Owner la autoridad para aplicar los recursos organizacionales comprometidos durante las Fases 1, 2 y 3.

| Rol | Nombre | Firma | Fecha |
|---|---|---|---|
| Sponsor / Catedrático | Erick Oswaldo Marroquín Zamora | [FIRMA PENDIENTE — H2] | 10 mar 2026 |
| Product Owner | Josué Say | [FIRMA PENDIENTE — H2] | 10 mar 2026 |

## Referencia a documentos de soporte

Cada área de conocimiento PMI tiene su documento detallado en la carpeta `pmi/`:

| Área | Documento |
|---|---|
| Alcance (Área 2) | `alcance.md` |
| Cronograma (Área 3) | `tiempo.md` |
| Calidad (Área 5) | `calidad.md` |
| Recursos (Área 6) | `recursos.md` |
| Comunicaciones (Área 7) | `comunicaciones.md` |
| Riesgos (Área 8) | `riesgos.md` |
| Adquisiciones (Área 9) | `adquisiciones.md` |
| Stakeholders (Área 10) | `stakeholders.md` |
| Control de cambios | `control-cambios.md` |
| EVM — Monitoreo | `evm.md` |
| Marco metodológico | `water-scrum-fall.md` |
| SAFe y Skills Matrix | `safe.md` |
| Acta de Cierre | `acta-cierre.md` |
| Modelo financiero | `costos-consolidados.md` |
