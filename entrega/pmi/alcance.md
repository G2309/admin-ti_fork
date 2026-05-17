# Área 2 PMI: Gestión del Alcance

## Descripción del área

La Gestión del Alcance es el área del PMBOK responsable de definir, documentar y controlar todo lo que está incluido y excluido en el proyecto. Su propósito es garantizar que el equipo trabaje únicamente en lo que fue comprometido con el cliente y que cualquier trabajo adicional pase por un proceso formal de aprobación antes de ejecutarse.

En proyectos de software, el alcance no es solo un documento de inicio; es una defensa activa que debe mantenerse durante toda la ejecución. Sin gestión de alcance, el proyecto experimenta scope creep: la acumulación de pequeñas adiciones de funcionalidad no planificadas que consumen capacidad del equipo sin agregar valor al objetivo original.

## In Scope — épicas y desglose

| ID | Épica | Descripción | HU | SP | Tareas |
|---|---|---|---|---|---|
| EP01 | Registro y perfiles | Módulo de creación de cuenta, autenticación y gestión del perfil del aspirante. Permite la trazabilidad de cada usuario a lo largo del proceso. | 6 | 18 | 28 |
| EP02 | Encuesta vocacional | Formulario interactivo que captura intereses académicos, habilidades percibidas y preferencias vocacionales del aspirante de manera estandarizada. | 6 | 20 | 28 |
| EP03 | Carreras y pensum 2026 | Catálogo digital de las carreras de pregrado de UVG Campus Central con su pensum 2026, validado por la Dirección de Admisiones. | 7 | 19 | 30 |
| EP04 | Motor de recomendación | Algoritmo de afinidad que procesa el perfil del aspirante y las características de cada carrera para generar un ranking de compatibilidad. | 3 | 16 | 10 |
| EP05 | Análisis y clasificación de afinidad | Módulo que interpreta los resultados del motor y los clasifica en categorías comprensibles (alta afinidad, media afinidad, baja afinidad). | 4 | 26 | 15 |
| EP06 | Panel de resultados | Interfaz que presenta al aspirante el ranking de carreras recomendadas con información detallada de cada opción para apoyar la decisión. | 6 | 22 | 22 |
| **Total** | | | **32** | **121** | **133** |

## Out of Scope

- Integración directa con el sistema de admisiones o ERP institucional de UVG (el sistema informa pero no inscribe ni prematricula).
- Módulo de orientación psicológica o asesoría personalizada por profesional humano.
- Seguimiento post-admisión del desempeño académico del estudiante ya inscrito.
- Cobertura de campus o sedes de UVG distintos a Campus Central.
- Aplicación móvil nativa para iOS o Android (el entregable es una aplicación web responsiva).
- Autenticación federada con SSO institucional de UVG o integración con Active Directory de la institución.
- Recomendación de carreras técnicas, postgrados o programas fuera del pensum de pregrado 2026.
- Módulo administrativo de reportes estadísticos para la Dirección de Admisiones (fuera del MVP).
- Personalización del motor de recomendación por parte de la Dirección de Admisiones sin asistencia del equipo técnico.
- Soporte o mantenimiento post-cierre del proyecto (fuera del alcance del contrato académico 2026–2027).

## Declaración de alcance

El Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 es una aplicación web que permite a los aspirantes de diversificado completar un perfil vocacional y recibir un ranking personalizado de carreras de pregrado compatibles con sus intereses y habilidades, basado en el catálogo oficial UVG 2026. El sistema cubre el ciclo completo desde el registro del aspirante hasta la presentación de resultados, sin integración con sistemas de admisión, sin módulos de seguimiento académico y sin aplicación móvil nativa.

## WBS / EDT implícita en el backlog — 3 niveles

La WBS de este proyecto está materializada en la estructura del backlog ágil. Las épicas, historias de usuario y tareas técnicas cumplen la función estructural de los tres niveles de una WBS PMI formal:

| Nivel WBS | Elemento ágil equivalente | Descripción | Cantidad |
|---|---|---|---|
| Nivel 1 | Épica | Módulo funcional de alto nivel | 6 |
| Nivel 2 | Historia de usuario (HU) | Funcionalidad entregable desde la perspectiva del usuario | 32 |
| Nivel 3 | Tarea técnica | Unidad de trabajo ejecutable por un developer | 133 |

Esta equivalencia es reconocida en la gestión híbrida: cuando el backlog está correctamente estructurado con criterios de aceptación y estimaciones, cumple la función de una WBS de 3 niveles sin necesidad de un documento WBS paralelo.

### Trazabilidad épica $\to$ HU $\to$ tarea

Cada tarea técnica (Nivel 3) pertenece a una historia de usuario específica (Nivel 2), que a su vez pertenece a una épica (Nivel 1). Esta trazabilidad permite:

- Medir el avance por épica al cierre de cada sprint.
- Identificar rápidamente qué épica se ve afectada si una tarea se bloquea.
- Generar el reporte de EVM por épica para el informe C1 al Sponsor.

## 4 defensas formales contra el scope creep

### Defensa 1 — Definition of Ready (DoR)

Una historia de usuario entra al sprint únicamente cuando cumple los 5 criterios del DoR. Una HU sin DoR no entra al Sprint Planning. Esto evita que funcionalidades vagamente definidas ingresen al backlog y luego crezcan durante el sprint sin control. Ver DoR completo en `calidad.md`.

### Defensa 2 — Definition of Done (DoD)

Una historia de usuario se considera completada únicamente cuando cumple los 7 criterios del DoD. Esto evita que el equipo "complete" historias sin criterios técnicos verificables y luego deba retrabajo que consume capacidad no planificada. Ver DoD completo en `calidad.md`.

### Defensa 3 — Control de Cambios formal

Cualquier solicitud de funcionalidad que no esté en el alcance comprometido sigue el proceso CR (solicitud $\to$ evaluación de impacto $\to$ decisión CCB $\to$ implementación/archivo). No existe "cambio verbal" en este proyecto. Ver proceso completo en `control-cambios.md`.

### Defensa 4 — Plan de Comunicaciones

El Plan de Comunicaciones (C1–C8) establece canales formales para cada stakeholder. Esto evita que stakeholders con poder (S2 UVG institución, S3 Admisiones, S4 TI) soliciten cambios directamente a los developers sin pasar por el PO. Todo pedido de alcance se canaliza formalmente y se evalúa antes de afectar el backlog.

## Protección del alcance durante la ejecución

Durante los 8 sprints de la Fase 2, el alcance se protege con los siguientes mecanismos operativos:

- El Product Backlog es propiedad del PO. Solo el PO puede agregar, modificar o eliminar ítems del backlog.
- El Sprint Backlog es inmutable durante el sprint (salvo excepciones menores aprobadas por el SM).
- Las solicitudes de stakeholders recibidas en Sprint Review o en canales informales se registran como CR potenciales, se evalúan y se incorporan al backlog siguiente solo si están aprobadas por el CCB.
- El SM es responsable de identificar y bloquear cualquier intento de scope creep que llegue directamente a los developers durante el sprint.

## Supuestos y restricciones del alcance

### Supuestos

| # | Supuesto | Área impactada si falla |
|---|---|---|
| SA-ALK-1 | El catálogo de carreras UVG 2026 (EP03) puede construirse con información pública y la colaboración de S3 Admisiones y S9 Catedráticos. No requiere acceso a sistemas internos de UVG. | EP03 — Hito H4 |
| SA-ALK-2 | Los 121 SP estimados para EP01–EP06 son suficientes para entregar todas las HU comprometidas con el DoD cumplido. | Cronograma y EVM |
| SA-ALK-3 | Las épicas EP04 y EP05 (motor y análisis de afinidad) pueden implementarse sin bibliotecas de IA externas de costo. La lógica de recomendación es implementable por el equipo con algoritmos de similitud estándar. | EP04, EP05 — Riesgo R2 |
| SA-ALK-4 | Los criterios de aceptación de cada HU pueden definirse completamente durante el refinement previo al sprint en que se implementa la HU. No se requieren consultas externas adicionales. | DoR criterio 2 |

### Restricciones

| # | Restricción | Fuente |
|---|---|---|
| RC-ALK-1 | El alcance está limitado a las 6 épicas y 32 HU del Product Backlog aprobado en el Project Charter. Cualquier HU adicional requiere CR aprobado por el CCB. | Project Charter |
| RC-ALK-2 | El sistema no puede integrarse con el ERP institucional de UVG ni con el sistema de admisiones existente. Esta restricción es técnica y de política institucional. | Out of Scope — alcance comprometido |
| RC-ALK-3 | Las pruebas de usabilidad (H6) se realizan con un grupo de estudiantes de diversificado disponibles para el sprint 7. El equipo no puede garantizar un número mínimo de participantes sin la colaboración de S3 Admisiones. | Hito H6 — Riesgo R7 |
| RC-ALK-4 | El entregable es una aplicación web responsiva. La compatibilidad móvil se logra mediante diseño responsivo, no mediante una aplicación nativa. | Out of Scope confirmado |
