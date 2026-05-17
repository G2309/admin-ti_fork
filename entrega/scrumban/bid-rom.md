# BID y ROM en Scrumban

## Definición de BID y ROM

### BID — Build / Trabajo planificado

BID (Build, Innovation and Disruptive) es el trabajo planificado que el equipo compromete en el Sprint Planning. Corresponde al desarrollo de nuevas funcionalidades, épicas e historias de usuario que están priorizadas en el Product Backlog antes del inicio del sprint. El BID es predecible, estimable y forma el núcleo del Sprint Goal.

Características del trabajo BID:

- Está definido antes del inicio del sprint.
- Tiene criterios de aceptación acordados con el PO en el Planning.
- Se estima en Story Points durante el Planning.
- Forma el 80% de la capacidad comprometida del sprint en este proyecto.

### ROM — Run / Trabajo no planificado

ROM (Run, Operate and Maintain) es el trabajo que no estaba planificado al inicio del sprint y que surge durante la iteración. Puede ser una corrección de defecto descubierto en producción o en testing, un ajuste solicitado por el cliente, una urgencia técnica no anticipada o una tarea de configuración o soporte que emerge durante el sprint.

Características del trabajo ROM:

- No estaba en el Sprint Backlog al inicio del sprint.
- Surge durante la iteración y requiere atención en el sprint actual.
- Requiere aprobación explícita del PO antes de ingresar al tablero.
- Debe ingresar dentro de los límites WIP disponibles.
- Forma el umbral del 20% de capacidad reservada del sprint en este proyecto.

## Distribución declarada para el proyecto

| Tipo | Porcentaje de la capacidad del sprint | SP por sprint (base 20 SP) |
| :--- | :--- | :--- |
| BID | 80% | 16 SP |
| ROM (umbral incluido) | 20% | 4 SP |
| Total | 100% | 20 SP |

## Justificación del 80/20 para este proyecto

La proporción típica que enseña el curso es 70/30 (70% BID, 30% ROM). Para este proyecto se adopta 80/20. Esta decisión tiene cuatro justificaciones específicas al contexto:

### Justificación 1: Sistema desarrollado desde cero sin deuda técnica heredada

El Sistema de Recomendación de Carrera Universitaria para UVG se construye desde cero. No hay base de código preexistente, no hay integraciones legacy heredadas y no hay deuda técnica acumulada de un sistema anterior. El equipo controla el alcance completo desde el inicio.

En proyectos con sistemas existentes, la deuda técnica y los defectos del sistema en operación generan un volumen de trabajo ROM constante y difícilmente controlable. En este proyecto, ese componente es mínimo porque no hay sistema en producción al que dar soporte durante el desarrollo.

### Justificación 2: Cliente institucional con requerimientos documentados y estables

El cliente es la propia institución educativa (UVG) con el pensum 2026 ya definido y los requerimientos del sistema documentados antes del inicio del proyecto. UVG no es un cliente externo con cambios frecuentes de prioridad ni urgencias externas recurrentes derivadas de dinámicas de mercado.

La estabilidad de los requerimientos reduce la probabilidad de solicitudes ROM de alto impacto durante el sprint. Las solicitudes que puedan llegar son ajustes de detalle o clarificaciones, no cambios de alcance que generen trabajo de varios SP.

### Justificación 3: Incertidumbre técnica concentrada y no distribuida

Las épicas EP04 (Motor de recomendación) y EP05 (Análisis de afinidad) concentran las tareas de mayor duración estimada del proyecto (hasta 10 días por tarea) y la mayor incertidumbre técnica. El trabajo no planificado derivado de esta incertidumbre se concentra en los sprints S5 y S6, no se distribuye uniformemente a lo largo de los 8 sprints.

Adoptar 70/30 durante todos los sprints sacrificaría 2 SP adicionales de BID por sprint en iteraciones (S1, S2, S3, S4) donde la probabilidad de trabajo ROM es baja. El 80/20 es más eficiente: los sprints con baja incertidumbre operan a plena capacidad BID; si los sprints de alta incertidumbre necesitan más ROM, el PO puede activar el proceso de cargo adicional.

### Justificación 4: Componente de soporte mínimo durante el desarrollo

La proporción 70/30 es típica para proyectos que desarrollan software nuevo al mismo tiempo que mantienen un sistema existente en producción. En ese contexto, el 30% ROM refleja el soporte activo al sistema en operación.

En este proyecto no hay sistema en producción durante la fase de desarrollo. El componente de soporte es mínimo y no justifica reservar el 30% de la capacidad como umbral ROM en todos los sprints. El 20% es suficiente para absorber los ajustes no planificados esperados.

## Cuándo usar 70/30 vs 80/20

| Condición del proyecto | Proporción recomendada |
| :--- | :--- |
| Sistema existente en producción con soporte activo durante el desarrollo | 70/30 |
| Alta frecuencia de cambios de prioridad por parte del cliente | 70/30 |
| Deuda técnica heredada significativa | 70/30 |
| Múltiples clientes externos con urgencias no coordinadas | 70/30 |
| Sistema desarrollado desde cero sin base de código preexistente | 80/20 |
| Cliente institucional con requerimientos documentados y estables | 80/20 |
| Incertidumbre técnica concentrada en sprints específicos, no distribuida | 80/20 |
| Sin sistema en producción durante la fase de desarrollo | 80/20 |

La decisión de 70/30 vs 80/20 no es ideológica: es una calibración basada en el volumen real esperado de trabajo no planificado. Si durante el proyecto el ROM real supera consistentemente el 20%, el equipo y el PO revisan la proporción y pueden ajustarla a 70/30 para los sprints restantes.

## Cómo opera el umbral ROM en la práctica

### Qué entra como ROM

- Defectos descubiertos en testing de un sprint anterior que no fueron identificados en el DoD.
- Ajustes técnicos necesarios para que una funcionalidad BID ya desarrollada funcione correctamente con otra parte del sistema.
- Solicitudes de clarificación que requieren trabajo técnico concreto (no solo responder una pregunta).
- Tareas de configuración de entorno o infraestructura que surgieron durante el sprint y bloquean trabajo BID.
- Correcciones de datos o configuración solicitadas por UVG relacionadas con el sistema en desarrollo.

### Qué no entra como ROM

- Expansión de alcance: funcionalidades nuevas que el cliente quiere agregar durante el sprint. Estas van al Product Backlog y se priorizan para el siguiente sprint. No son trabajo ROM; son BID diferido.
- Nuevas épicas o historias de usuario que no estaban en el alcance original del proyecto. Estas requieren negociación de alcance y no pueden absorberse por el canal ROM.
- Trabajo que debería haberse planificado en el Sprint Planning pero se olvidó. Si la tarea era predecible al inicio del sprint, no es ROM; es una falla de planificación que se resuelve en la Retrospectiva.
- Requerimientos que cambian de forma fundamental la arquitectura del sistema. Estos requieren una decisión de alcance formal entre el PO y UVG.

## Clasificación de interrupciones: operativas ROM vs expansión de alcance

| Tipo de solicitud | Clasificación | Canal de entrada |
| :--- | :--- | :--- |
| Defecto encontrado en el sistema en desarrollo | ROM operativo | Canal ROM, aprobación del PO |
| Ajuste de funcionalidad ya desarrollada | ROM operativo | Canal ROM, aprobación del PO |
| Nueva funcionalidad solicitada durante el sprint | Expansión de alcance | Product Backlog; no entra como ROM |
| Cambio de requerimiento que afecta el diseño arquitectónico | Expansión de alcance | Negociación de alcance formal |
| Tarea de configuración técnica no anticipada | ROM operativo | Canal ROM, aprobación del PO |
| Historia de usuario nueva que el cliente quiere en el sprint actual | Expansión de alcance | Product Backlog; si es urgente, negociar remoción de BID |

La distinción es clave para proteger el canal ROM de un uso incorrecto: si cualquier solicitud del cliente se clasifica como ROM, el umbral se agota rápidamente con trabajo que no es operativo sino de alcance, y el equipo no tiene capacidad para responder a las verdaderas urgencias técnicas del sprint.

El PO es el responsable de hacer esta clasificación en el momento en que llega la solicitud. El Facilitador puede apoyar con la clasificación técnica, pero la decisión final es del PO.
