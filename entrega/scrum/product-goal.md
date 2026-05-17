# Product Goal

## Definición

El Product Goal es el objetivo a largo plazo del equipo Scrum. Describe el estado futuro del producto y sirve como norte para todas las decisiones de priorización del backlog. Según la Guía Scrum 2020, el Product Goal es parte del Product Backlog y el equipo debe cumplirlo o abandonarlo antes de asumir un nuevo objetivo.

El Product Goal responde a la pregunta: ¿para qué existe este producto y qué problema resuelve?

## Product Goal del proyecto

> "Implementar una plataforma web basada en análisis de datos que evalúe integralmente las habilidades, intereses y personalidad de los estudiantes, generando un ranking personalizado de carreras alineadas al pensum 2026 del Campus Central de la UVG para facilitar una toma de decisiones informada."

### Componentes del Product Goal

| Componente | Descripción |
|---|---|
| Sujeto beneficiado | Estudiantes de diversificado que evalúan opciones universitarias en UVG Campus Central |
| Mecanismo | Análisis de datos: evaluación de habilidades, intereses y personalidad |
| Resultado | Ranking personalizado de carreras ordenado por afinidad |
| Restricción de dominio | Pensum 2026, Campus Central de la UVG |
| Resultado esperado | Toma de decisiones informada sobre la elección de carrera universitaria |

## Relación del Product Goal con las 6 épicas

El Product Goal se descompone en épicas que representan las capacidades del sistema necesarias para cumplirlo. Cada épica aporta un bloque funcional indispensable:

| Épica | Contribución al Product Goal |
|---|---|
| EP01 — Registro y perfiles de usuario | Permite que los estudiantes tengan identidad en el sistema; sin registro no hay evaluación individual |
| EP02 — Gestión de encuesta vocacional | Recolecta los datos de habilidades, intereses y personalidad que alimentan el motor |
| EP03 — Gestión de carreras y pensum 2026 | Construye el catálogo de opciones contra el cual se compara el perfil del estudiante |
| EP04 — Motor de recomendación | Ejecuta el análisis de datos y genera el ranking personalizado |
| EP05 — Análisis y clasificación de afinidad | Refina la ponderación del ranking con niveles de afinidad diferenciados |
| EP06 — Panel de resultados y visualización | Presenta el ranking de forma comprensible, con justificaciones y reportes |

Las épicas EP01 a EP04, junto con los elementos críticos de EP05 y EP06, conforman el MVP. Las métricas avanzadas de EP05 (umbrales de afinidad) y las analíticas de desempeño por carrera de EP06 son características secundarias que no bloquean la utilidad central del sistema.

## Cómo el Product Goal guía la priorización del backlog

El Product Owner ordena el Product Backlog de forma que las historias más cercanas al núcleo del Product Goal se desarrollen primero. La lógica de priorización aplicada en este proyecto es:

1. **Dependencias técnicas**: el motor de recomendación (EP04) requiere que existan usuarios registrados (EP01), datos de encuesta (EP02) y un catálogo de carreras (EP03). Por eso los sprints 1 al 4 construyen las bases antes de abordar EP04 en el sprint 5.
2. **Valor hacia el Product Goal**: las historias que acercan al sistema a generar el ranking personalizado tienen prioridad sobre las historias de visualización avanzada.
3. **Riesgo técnico**: el motor de recomendación (EP04, 16 SP) y la ponderación por afinidad (EP05, 26 SP) concentran la mayor incertidumbre técnica y se abordan en sprints centrales (S5–S6) para detectar problemas con tiempo de holgura disponible.
4. **Buffer de holgura**: el sprint S8 absorbe retrasos sin comprometer el Product Goal al 22 de abril de 2027.

Cuando el PO recibe solicitudes de nuevas funcionalidades externas al alcance, evalúa si contribuyen al Product Goal antes de añadirlas al backlog. Aquello que no lo hace se rechaza o pospone.

## Diferencia entre Product Goal y Sprint Goal

| Dimensión | Product Goal | Sprint Goal |
|---|---|---|
| Horizonte temporal | Todo el proyecto (enero–abril 2027) | Un sprint de 10 días hábiles |
| Alcance | El producto completo y su propósito | El incremento de un sprint específico |
| Quién lo define | Product Owner, con input del equipo | Todo el equipo en el Sprint Planning |
| Cuántas veces cambia | Una vez por ciclo de vida del producto | Cada sprint |
| Ejemplo en este proyecto | "Ranking personalizado de carreras…" | S5: "Construir e implementar el motor de recomendación híbrido" |
| Qué mide | Éxito del producto ante el problema del usuario | Éxito del equipo en el sprint |

El Sprint Goal no es una suma de historias; es el propósito unificador del sprint. Si el equipo completa el Sprint Goal pero no todas las historias comprometidas, el sprint es considerado exitoso. Si el Sprint Goal no se cumple, el sprint falló independientemente de las historias cerradas.

El Product Goal se cumple cuando el sistema puede generar rankings personalizados de carreras basados en perfiles vocacionales completos de estudiantes de UVG Campus Central, utilizando el pensum 2026.
