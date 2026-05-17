# SAFe y Skills Matrix: Declaración de No Aplicabilidad

## Declaración explícita: SAFe NO APLICA a este proyecto

SAFe (Scaled Agile Framework) no aplica al Sistema de Recomendación de Carrera Universitaria para UVG Campus Central 2026. Esta declaración es explícita e intencional: no es un olvido ni una omisión por desconocimiento del framework. Es una decisión metodológica justificada.

## Qué es SAFe y cuándo aplica

SAFe (Scaled Agile Framework) es un framework de escalamiento ágil diseñado para organizaciones que ejecutan múltiples proyectos de software de forma simultánea con equipos interdependientes. Sus características definitorias son:

- Está diseñado para coordinar **múltiples equipos ágiles** que trabajan en el mismo producto o programa simultáneamente.
- Introduce el concepto de **ART (Agile Release Train)**: un conjunto de entre 50 y 125 personas organizadas en múltiples equipos que planifican y entregan juntos en ciclos de PI (Program Increment) de 8–12 semanas.
- El **PI Planning** es la ceremonia central de SAFe: un evento de 2 días donde todos los equipos del ART sincronizan sus planes, identifican dependencias entre equipos y se comprometen con los objetivos del PI.
- SAFe tiene múltiples niveles de configuración: Essential SAFe (el mínimo), Large Solution SAFe, Portfolio SAFe y Full SAFe, cada uno añadiendo estructuras de gobernanza y coordinación adicionales.
- SAFe aplica cuando: la organización tiene 3 o más equipos ágiles interdependientes, hay problemas de alineación entre equipos, existe una cartera de productos que requiere gobernanza centralizada, o el alcance del programa supera lo que un solo equipo puede manejar.

## Por qué SAFe no aplica a este proyecto

### Razón 1 — Tamaño del equipo

Este proyecto tiene **5 personas** organizadas en un **único equipo** con roles definidos: PO, SM y 3 developers. SAFe está diseñado para ART de entre 50 y 125 personas. Aplicar SAFe a 5 personas sería el equivalente metodológico de usar una excavadora para plantar un árbol en un jardín.

### Razón 2 — Un solo equipo

SAFe resuelve el problema de **coordinación entre múltiples equipos**. Si hay un solo equipo, no existe el problema que SAFe resuelve. La coordinación entre los 5 integrantes de este equipo se gestiona con las ceremonies de Scrum (Daily, Sprint Planning, Sprint Review, Sprint Retrospective) y el tablero Kanban/Scrumban.

### Razón 3 — Alcance definido y acotado

Este proyecto tiene un alcance completamente definido: 6 épicas, 32 HU, 121 SP, 8 sprints. No hay múltiples productos ni múltiples programas que requieran coordinación de cartera. El Product Backlog de un solo equipo gestiona todo el alcance del proyecto.

### Razón 4 — Sobredimensionamiento metodológico injustificado

Adoptar SAFe agregaría:

- Un PI Planning bimestral que duraría 2 días para un equipo de 5 personas (overhead desproporcionado).
- Roles SAFe adicionales (RTE — Release Train Engineer, Product Manager, Business Owners) que duplicarían responsabilidades ya cubiertas por PO y SM.
- Artefactos de programa (PI Objectives, Program Board, Milestones de ART) que no añaden valor a un proyecto de alcance fijo.
- Complejidad organizacional que el equipo tendría que aprender y mantener sin ningún beneficio de coordinación.

### Herramienta equivalente usada en su lugar

Las necesidades de coordinación que SAFe resolvería en un contexto de múltiples equipos se resuelven en este proyecto con:

- **Matriz RACI**: define quién hace qué en las actividades clave del proyecto. Ver `recursos.md`.
- **Roles Scrum claramente definidos**: PO (priorización y representación del cliente), SM (facilitación y eliminación de impedimentos), Developers (implementación). No hay ambigüedad de roles que requiera la estructura de gobernanza de SAFe.
- **Ceremonies de Scrum**: Daily Scrum, Sprint Planning, Sprint Review y Sprint Retrospective proveen toda la coordinación necesaria para un equipo de 5 personas.

## Skills Matrix: Declaración de No Aplicabilidad

La Skills Matrix no aplica a este proyecto por la misma razón que SAFe.

### Qué es la Skills Matrix y cuándo aplica

La Skills Matrix es una herramienta de gestión de recursos humanos que mapea las habilidades de múltiples personas contra las competencias requeridas por múltiples proyectos o equipos. Permite a los gerentes de recursos identificar quién puede asumir qué rol en qué proyecto, detectar brechas de habilidades a nivel organizacional y planificar capacitaciones.

La Skills Matrix aplica cuando: hay un pool de recursos compartidos entre múltiples proyectos, los roles no están fijos y el mismo developer puede ser asignado a diferentes equipos, o cuando la organización necesita planificar la capacitación de su fuerza laboral en múltiples competencias.

### Por qué no aplica a este proyecto

- Los **5 integrantes del equipo tienen roles fijos** durante toda la Fase 2 (ene–abr 2027). No hay reasignación de personas entre equipos.
- No existe un **pool de recursos compartidos**: el developer Cruz no es prestado a otro proyecto en el sprint 4. Los 5 miembros del equipo están dedicados a este proyecto con sus FTE declarados.
- La **asignación de responsabilidades** ya está completamente resuelta con la RACI documentada en `recursos.md`. Saber que Developer Chen tiene habilidades en seguridad y Developer Cruz tiene habilidades en arquitectura cloud no requiere una Skills Matrix: está documentado en la RACI y en las responsabilidades de cada rol.

### Herramienta equivalente usada en su lugar

La asignación de responsabilidades técnicas se gestiona con la **Matriz RACI** documentada en `recursos.md`. La RACI provee exactamente lo que el proyecto necesita: quién es responsable, quién rinde cuentas, quién debe ser consultado y quién debe ser informado para cada actividad clave del proyecto.
