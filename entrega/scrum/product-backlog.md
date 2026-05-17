# Product Backlog

## Definición y gestión por el Product Owner

El Product Backlog es una lista ordenada, emergente y única de todo el trabajo conocido necesario para alcanzar el Product Goal. No es un documento estático: el Product Owner lo refina continuamente a medida que el equipo aprende, los stakeholders aportan feedback y las condiciones del proyecto evolucionan.

La propiedad del Product Backlog recae exclusivamente en el Product Owner (Josué Say). Nadie más puede alterar el orden de los ítems ni añadir historias sin su aprobación. El PO es responsable de que el backlog sea transparente, visible para todo el equipo y de que las historias en la cima del backlog estén listas para entrar al siguiente Sprint Planning.

El Product Backlog se organiza en épicas que agrupan historias de usuario relacionadas por capacidad funcional. Las historias en la parte superior están más detalladas y estimadas; las de la parte inferior pueden ser incompletas hasta que el equipo se acerque a trabajarlas.

## Épicas del proyecto

| ID | Épica | Historias de usuario | Story Points | Tareas técnicas |
|---|---|---|---|---|
| EP01 | Registro y perfiles de usuario | 6 | 18 | 28 |
| EP02 | Gestión de encuesta vocacional | 6 | 20 | 28 |
| EP03 | Gestión de carreras y pensum 2026 | 7 | 19 | 30 |
| EP04 | Motor de recomendación | 3 | 16 | 10 |
| EP05 | Análisis y clasificación de afinidad | 4 | 26 | 15 |
| EP06 | Panel de resultados y visualización | 6 | 22 | 22 |
| **Total** | — | **32** | **121** | **133** |

## Historias de usuario de muestra

Las siguientes 5 historias representan distintas épicas y puntos de complejidad del backlog. Se presentan con su formato COMO / QUIERO / PARA y sus criterios de aceptación verificables.

### EP01-US01 — Registro de usuario (3 story points)

**Historia:**
COMO estudiante de diversificado
QUIERO poder registrarme con mis datos básicos
PARA crear una cuenta y acceder a las funcionalidades de orientación vocacional

**Criterios de aceptación:**

- El formulario solicita nombre completo, correo electrónico, contraseña y fecha de nacimiento
- El sistema valida que el correo no esté registrado previamente
- Al completar el registro exitosamente, el sistema muestra una confirmación
- Si falta algún campo obligatorio, el sistema muestra un mensaje de error identificando el campo

### EP02-US04 — Guardado automático de encuesta (5 story points)

**Historia:**
COMO estudiante registrado
QUIERO que mis respuestas queden guardadas automáticamente
PARA no perder mi progreso si abandono la encuesta temporalmente

**Criterios de aceptación:**

- Las respuestas se guardan automáticamente al avanzar entre secciones de la encuesta
- Si el estudiante regresa, el sistema retoma desde el último punto guardado
- Se muestra un indicador visual que confirma que el guardado fue exitoso
- Las respuestas de secciones anteriores no se pierden al continuar con secciones posteriores

### EP04-US01 — Motor de recomendación (8 story points)

**Historia:**
COMO estudiante registrado
QUIERO que el sistema cree un perfil estructurado basado en mis gustos
PARA que genere un listado de carreras afines a mis características

**Criterios de aceptación:**

- Las recomendaciones generadas son coherentes con el perfil completado por el estudiante
- El sistema presenta niveles de afinidad claramente diferenciados entre carreras
- Los tiempos de carga del ranking son aceptables para el usuario

### EP05-US01 — Ponderación por afinidad (8 story points)

**Historia:**
COMO estudiante registrado
QUIERO que el sistema pondere las carreras basado en el nivel de afinidad
PARA visualizar primero las opciones que mejor se ajustan a mi perfil

**Criterios de aceptación:**

- El listado de carreras se presenta ordenado de mayor a menor nivel de afinidad
- Dos estudiantes con perfiles idénticos reciben resultados idénticos, garantizando consistencia

### EP06-US02 — Justificación de recomendaciones (5 story points)

**Historia:**
COMO estudiante registrado
QUIERO ver por qué se me recomendaron estas carreras
PARA validar que las recomendaciones se alinean con mis vocaciones reales

**Criterios de aceptación:**

- El sistema muestra el motivo de selección para cada carrera recomendada
- Se explica el criterio que determina el orden del ranking presentado

## Criterio INVEST para historias de usuario

El Product Owner valida que cada historia del backlog cumpla el criterio INVEST antes de aprobarla para estimación:

| Letra | Criterio | Descripción aplicada al proyecto |
|---|---|---|
| I | Independent (Independiente) | La historia puede desarrollarse sin depender del desarrollo simultáneo de otra historia del mismo sprint. Las dependencias técnicas se resuelven en el ordering del backlog, no bloqueando dentro del mismo sprint. |
| N | Negotiable (Negociable) | Los detalles de implementación son negociables entre el PO y los Developers hasta el momento del Sprint Planning. El PO negocia el qué; los Developers negocian el cómo. |
| V | Valuable (Valiosa) | Cada historia aporta valor directamente al estudiante o al administrador de UVG. Historias puramente técnicas se expresan como tareas dentro del Sprint Backlog, no como historias de usuario. |
| E | Estimable (Estimable) | Los Developers pueden estimar la historia en story points. Si no pueden estimarla, la historia necesita más refinamiento antes de entrar al Planning. |
| S | Small (Pequeña) | La historia cabe dentro de un sprint de 10 días hábiles. Historias mayores a 8 SP se dividen antes del Planning. |
| T | Testable (Verificable) | Los criterios de aceptación son objetivos y verificables. No se admiten criterios subjetivos como "se ve bien" o "funciona rápido" sin métricas asociadas. |

## Cómo el Product Owner prioriza el backlog

El PO aplica los siguientes criterios de priorización, en orden de peso:

1. **Dependencias técnicas**: las épicas con dependencias hacia adelante (EP01 y EP02 son prerrequisito de EP04) se priorizan antes. No es posible construir el motor de recomendación sin usuarios ni datos de encuesta.

2. **Valor hacia el Product Goal**: las historias que acercan más directamente al ranking personalizado de carreras tienen prioridad sobre funcionalidades de visualización avanzada o reportes administrativos.

3. **Riesgo e incertidumbre**: EP04 y EP05 concentran la mayor incertidumbre técnica del proyecto. Se planifican en los sprints centrales (S5 y S6) para que el buffer del sprint S8 esté disponible si el equipo enfrenta problemas.

4. **MVP primero**: las historias críticas del MVP (EP01–EP04 completas y las historias core de EP05 y EP06) tienen prioridad sobre las características secundarias como métricas avanzadas de umbrales y analíticas de desempeño por carrera.

5. **Feedback del Sprint Review**: cada revisión puede reordenar el backlog. Si un stakeholder de UVG identifica un problema en la encuesta vocacional durante la revisión del sprint 3, el PO puede subir historias correctivas antes del sprint 4.
