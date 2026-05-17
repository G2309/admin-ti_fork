# Definición del Proyecto: Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026

## Identificación del proyecto

| Campo | Valor |
|---|---|
| Nombre oficial | Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026 |
| Sponsor / Catedrático | Erick Oswaldo Marroquín Zamora |
| Product Owner | Josué Say |
| Scrum Master | Mathew Cordero |
| Fecha inicio planificación | 10 de marzo de 2026 |
| Fecha inicio ejecución | 1 de enero de 2027 |
| Fecha entrega MVP | 22 de abril de 2027 |
| Marco metodológico | Water-Scrum-Fall (PMI planifica + Scrum ejecuta + PMI cierra) |
| Estado actual | Planificación (Fase 1) |

## Equipo del proyecto

| Rol | Nombre | FTE interno | FTE facturado |
|---|---|---|---|
| Product Owner | Josué Say | 0.7 | 1.0 |
| Scrum Master | Mathew Cordero | 1.0 | 1.0 |
| Developer (líder técnico) | Gustavo Cruz Bardales | 1.0 | 1.0 |
| Developer (seguridad) | Javier Chen Gonzalez | 1.0 | 1.0 |
| Developer | Pedro Guzmán Mayen | 1.0 | 1.0 |

## Problema que resuelve

Los estudiantes de diversificado que aplican a UVG Campus Central 2026 carecen de un mecanismo estructurado, basado en datos, que los oriente en la selección de carrera universitaria. El proceso actual depende de orientación informal, ferias vocacionales esporádicas y autodiagnóstico sin soporte técnico. Esto genera decisiones de elección de carrera con bajo nivel de información, aumenta la probabilidad de cambios de carrera en primer año y reduce la retención estudiantil en las carreras afines al perfil del aspirante.

## Objetivo general

Desarrollar e implementar un sistema web de recomendación de carrera universitaria para UVG Campus Central, que mediante una encuesta vocacional estructurada y un motor de afinidad calcule y presente al aspirante las carreras del pensum 2026 más compatibles con sus intereses, habilidades y perfil académico.

## Objetivos específicos

1. Implementar un módulo de registro y gestión de perfiles de aspirantes que garantice la trazabilidad de cada usuario a lo largo del proceso de orientación.
2. Diseñar y desplegar una encuesta vocacional interactiva que capture intereses, habilidades percibidas y preferencias académicas del aspirante de manera estandarizada.
3. Construir y publicar el catálogo de carreras y pensum 2026 de UVG Campus Central, validado por la Dirección de Admisiones, como base de datos de referencia del sistema.
4. Desarrollar el motor de recomendación que aplica el algoritmo de afinidad entre el perfil del aspirante y el catálogo de carreras, produciendo un ranking ordenado de compatibilidad.
5. Implementar el módulo de análisis y clasificación de afinidad que interpreta los resultados del motor y los presenta en categorías comprensibles para el aspirante.
6. Entregar un panel de resultados accesible que permita al aspirante visualizar, comparar y explorar las carreras recomendadas con información suficiente para tomar una decisión informada.

## Alcance

### In Scope — por épica

| Épica | Descripción | Historias de usuario | Story Points | Tareas técnicas |
|---|---|---|---|---|
| EP01 | Registro y perfiles | 6 | 18 | 28 |
| EP02 | Encuesta vocacional | 6 | 20 | 28 |
| EP03 | Carreras y pensum 2026 | 7 | 19 | 30 |
| EP04 | Motor de recomendación | 3 | 16 | 10 |
| EP05 | Análisis y clasificación de afinidad | 4 | 26 | 15 |
| EP06 | Panel de resultados | 6 | 22 | 22 |
| **Total** | | **32** | **121** | **133** |

### Out of Scope

- Integración directa con el sistema de admisiones o ERP de UVG (el sistema no inscribe ni prematricula al aspirante).
- Orientación psicológica o asesoría personalizada por parte de un profesional humano.
- Módulo de seguimiento post-admisión (desempeño académico del estudiante ya inscrito).
- Cobertura de otros campus o sedes de UVG distintos a Campus Central.
- Aplicación móvil nativa (iOS / Android); el entregable es una aplicación web responsiva.
- Integración con plataformas de terceros para autenticación federada (SSO institucional de UVG).
- Recomendación de carreras técnicas, postgrados o programas fuera del pensum de pregrado 2026.
- Módulo administrativo de reportes estadísticos para la Dirección de Admisiones (fuera del MVP).

## Supuestos operativos

- La Dirección de Admisiones UVG entregará el catálogo oficial de carreras y pensum 2026 antes del sprint 3 (hito H4, 11 feb 2027).
- El proveedor de infraestructura cloud (S10) garantiza disponibilidad con SLA formal previo al inicio de la ejecución.
- El Catedrático/Sponsor (S1) dispondrá de tiempo para revisiones quincenales según C1 durante toda la fase de ejecución.
- Los desarrolladores tienen acceso continuo a los entornos de desarrollo y staging durante los 8 sprints.
- Los cambios de pensum UVG 2026 posteriores a la validación del sprint 3 serán tratados como solicitudes de cambio formal (CR) según el proceso de control de cambios.
- El equipo completo se mantiene disponible durante el período de ejecución (1 ene – 22 abr 2027).

## Restricciones

### Restricción de alcance

El sistema cubre exclusivamente las carreras de pregrado del pensum UVG Campus Central 2026. Cualquier adición de campus, sedes o programas fuera de este alcance requiere un CR aprobado por el CCB ampliado.

### Restricción de tiempo

La fecha de entrega del MVP es el 22 de abril de 2027 (H7), condicionada al calendario académico de UVG. La ejecución no puede extenderse más allá de esa fecha sin aprobación formal del Sponsor.

### Restricción de recursos

El equipo está compuesto por 5 personas con los FTE declarados. No se contempla incorporación de personal adicional ni contratistas externos fuera del proveedor cloud (S10).

### Restricción tecnológica

La infraestructura de producción depende del proveedor cloud externo (S10). El equipo no tiene control directo sobre la infraestructura de red de UVG; las coordinaciones con el Área de TI (S4) siguen el canal C4.

## Criterios de éxito

- El sistema pasa las pruebas de usabilidad con usuarios reales de diversificado en el sprint 8 (H6, 22 abr 2027) con una tasa de satisfacción aceptable definida con el Sponsor.
- El motor de recomendación produce resultados coherentes con el perfil de entrada en el 100% de los casos de prueba definidos en el DoD de EP04.
- El catálogo de carreras y pensum 2026 está validado y firmado por la Dirección de Admisiones antes del cierre del sprint 3.
- El MVP es entregado en la fecha H7 (22 abr 2027) con todas las épicas EP01–EP06 completas bajo el DoD.
- El Acta de Cierre es firmada por el Sponsor/Catedrático (H8) sin observaciones pendientes de alcance.
- La velocidad del equipo se mantiene dentro del rango planificado (no inferior a $SPI \geq 0.90$ por sprint sostenido).

## Marco metodológico integrado

### Modelo Water-Scrum-Fall

El proyecto adopta el modelo Water-Scrum-Fall porque combina la rigurosidad contractual de PMI (necesaria para un cliente institucional como UVG con un Sponsor formal) con la adaptabilidad de Scrum en la ejecución técnica. Ver documento detallado en `pmi/water-scrum-fall.md`.

### Capas metodológicas

| Capa | Marco | Cuándo aplica | Para qué |
|---|---|---|---|
| Planificación macro | PMI (10 áreas) | Fase 1 (mar–dic 2026) | Charter, WBS, plan de riesgos, comunicaciones, adquisiciones |
| Ejecución iterativa | Scrum | Fase 2 (ene–abr 2027) | Sprints, ceremonies, backlog, velocidad |
| Gestión de flujo diario | Kanban / Scrumban | Durante sprints | Tablero visual, WIP limits, cycle time |
| Calidad técnica | XP (prácticas seleccionadas) | Durante sprints | TDD, CI, Pair Programming, Code Review |
| Cierre formal | PMI | Fase 3 (abr–may 2027) | EVM, lecciones aprendidas, Acta de Cierre |

### Nota sobre la columna Code Review en el tablero Kanban/Scrumban

Cuando se incorporan prácticas XP (Pair Programming y TDD) en el tablero Kanban/Scrumban, se agrega una columna "Code Review" entre Testing y Review. Esta columna materializa el criterio XP de revisión por pares antes de que la tarea pase a validación funcional. El efecto es un aumento estimado de +1 día al Cycle Time por tarea (de 5.13 días promedio a ~6.13 días promedio). Esto no es un defecto del tablero sino un control de calidad explícito: la columna hace visible el paso de revisión técnica que sin XP quedaría implícito o se omitiría bajo presión de velocidad.

## WBS / EDT — 3 niveles

La descomposición del trabajo sigue tres niveles equivalentes a una WBS formal. En un proyecto con backlog ágil, las épicas, historias de usuario y tareas técnicas cumplen la función estructural de la WBS PMI.

| Nivel | Elemento | Cantidad |
|---|---|---|
| Nivel 1 | Épicas | 6 |
| Nivel 2 | Historias de usuario (por épica) | 32 |
| Nivel 3 | Tareas técnicas (por historia) | 133 |
| Referencia | Story points totales | 121 |
| Referencia | Días-tarea totales | 682 |

### Desglose por épica

| ID | Épica | HU (Nivel 2) | SP | Tareas (Nivel 3) |
|---|---|---|---|---|
| EP01 | Registro y perfiles | 6 | 18 | 28 |
| EP02 | Encuesta vocacional | 6 | 20 | 28 |
| EP03 | Carreras y pensum 2026 | 7 | 19 | 30 |
| EP04 | Motor de recomendación | 3 | 16 | 10 |
| EP05 | Análisis y clasificación de afinidad | 4 | 26 | 15 |
| EP06 | Panel de resultados | 6 | 22 | 22 |
| **Total** | | **32** | **121** | **133** |

## Stakeholders — resumen inicial

El proyecto identifica 10 stakeholders clasificados en la Matriz Poder-Interés. Ver documento completo en `pmi/stakeholders.md`.

| Cuadrante | Estrategia | Stakeholders principales |
|---|---|---|
| I — Alto Poder / Alto Interés | Gestionar de cerca | S1 Marroquín (Sponsor), S2 UVG institución, S3 Admisiones, S5 PO Say, S6 SM Cordero |
| II — Alto Poder / Bajo Interés | Mantener satisfecho | S4 Área de TI UVG |
| III — Bajo Poder / Alto Interés | Mantener informado | S7 Developers, S8 Estudiantes diversificado, S9 Catedráticos carreras |
| IV — Bajo Poder / Bajo Interés | Monitorear | S10 Proveedor cloud |
