# MVP — Minimum Viable Product

## Definición de MVP

El Minimum Viable Product (MVP) es la versión del producto con el conjunto mínimo de funcionalidades que permite cumplir el Product Goal y entregar valor real al usuario final. No es un prototipo ni una demo: es un sistema funcional que puede ser usado por el público objetivo para resolver el problema que el proyecto aborda.

El MVP no es la versión más pequeña posible del sistema, sino la versión más pequeña que sea útil. Incluye exactamente lo necesario para que un estudiante de diversificado pueda registrarse, completar la evaluación vocacional y recibir un ranking personalizado de carreras del pensum 2026 de UVG Campus Central.

Lo que queda fuera del MVP son características que enriquecen la experiencia pero no bloquean la utilidad central del sistema.

## El MVP de este proyecto

### Qué incluye el MVP

El MVP comprende las historias críticas de las 6 épicas que habilitan el flujo completo de usuario de extremo a extremo:

**EP01 — Registro y perfiles de usuario (crítico para el MVP)**

- Registro de estudiante con datos básicos (nombre, correo, contraseña, fecha de nacimiento)
- Inicio de sesión y gestión de sesión
- Creación y edición del perfil vocacional del estudiante

**EP02 — Gestión de encuesta vocacional (crítico para el MVP)**

- Encuesta completa con todas las secciones de habilidades, intereses y personalidad
- Guardado automático del progreso para no perder respuestas
- Visualización del estado de completitud de la encuesta

**EP03 — Gestión de carreras y pensum 2026 (crítico para el MVP)**

- Catálogo completo de carreras del Campus Central de UVG con información del pensum 2026
- Visualización del detalle de cada carrera

**EP04 — Motor de recomendación (núcleo del MVP)**

- Generación del perfil estructurado del estudiante a partir de sus respuestas
- Ranking de carreras por afinidad basado en el perfil
- Presentación del listado de carreras recomendadas

**EP05 — Análisis y clasificación de afinidad (historias core del MVP)**

- Ponderación del ranking por nivel de afinidad (mayor afinidad aparece primero)
- Consistencia del resultado: perfiles idénticos generan rankings idénticos

**EP06 — Panel de resultados y visualización (historias core del MVP)**

- Visualización del ranking de carreras con su nivel de afinidad
- Justificación de por qué cada carrera fue recomendada al estudiante

### Qué NO incluye el MVP

Las siguientes características son secundarias y no bloquean la utilidad central del sistema:

- Métricas avanzadas de umbrales de afinidad (EP05): análisis estadístico de distribución de perfiles, umbrales de corte configurables por administrador
- Analíticas de desempeño por carrera (EP06): reportes administrativos sobre qué carreras reciben más recomendaciones, tendencias por período, comparativas entre cohortes
- Funcionalidades de administración avanzada de EP06 que van más allá de la experiencia directa del estudiante

Estas características están planificadas en el backlog y pueden desarrollarse en el sprint de holgura (S8) o en una fase posterior al MVP si el Product Owner así lo decide.

## Épicas del MVP versus épicas secundarias

| Épica | Rol en el MVP | Justificación |
|---|---|---|
| EP01 — Registro y perfiles | Crítica — completa en el MVP | Sin registro no hay usuario; sin perfil no hay evaluación |
| EP02 — Encuesta vocacional | Crítica — completa en el MVP | La encuesta es la fuente de datos que alimenta todo el sistema |
| EP03 — Carreras y pensum 2026 | Crítica — completa en el MVP | Sin catálogo de carreras no hay contra qué comparar el perfil |
| EP04 — Motor de recomendación | Crítica — completa en el MVP | Es el núcleo del Product Goal; sin él el sistema no tiene propósito |
| EP05 — Análisis y afinidad | Parcialmente en el MVP | Las historias de ponderación básica son críticas; los umbrales avanzados son secundarios |
| EP06 — Panel de resultados | Parcialmente en el MVP | La visualización del ranking y la justificación son críticas; los reportes administrativos son secundarios |

## Hito de entrega: 22 de abril de 2027

El MVP se entrega al finalizar el Sprint 8 el día 22 de abril de 2027. Esta fecha marca el cierre de la fase de ejecución Scrum del modelo Water-Scrum-Fall. A partir del 23 de abril de 2027, el proyecto entra en la fase de cierre PMI.

El Sprint 8 (9 de abril al 22 de abril de 2027) tiene como Sprint Goal explícito la consolidación, validación integral y estabilización del producto. Esto significa que S8 no solo completa funcionalidades pendientes sino que verifica que el sistema funciona de extremo a extremo con datos reales, corrige defectos identificados en los sprints anteriores y prepara el sistema para su revisión de cierre.

El hito del 22 de abril de 2027 es inamovible en el calendario académico. El sprint de holgura S8 existe precisamente para garantizar que el MVP esté completo en esa fecha aun si los sprints operativos S1–S7 tuvieron retrasos parciales.

## Relación del MVP con los criterios de éxito del proyecto

El MVP se considera exitoso si cumple los siguientes criterios al 22 de abril de 2027:

- Un estudiante puede completar el flujo completo: registro $\to$ encuesta $\to$ ranking $\to$ justificación de recomendaciones
- El ranking generado es coherente con el perfil del estudiante
- El sistema maneja perfiles distintos y genera rankings distintos de forma consistente
- Las carreras recomendadas corresponden al pensum 2026 del Campus Central de UVG
- La experiencia es usable en navegadores modernos sin asistencia técnica

El MVP no requiere que los reportes administrativos estén completos, ni que los umbrales de afinidad avanzados estén implementados. Requiere que el problema central del Product Goal esté resuelto: un estudiante puede obtener un ranking personalizado de carreras que le ayude a tomar una decisión informada sobre su carrera universitaria en UVG.
