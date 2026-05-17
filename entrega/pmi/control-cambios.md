# Control Integrado de Cambios

## Definición del proceso

El Control Integrado de Cambios es el proceso formal mediante el cual cualquier modificación al alcance, cronograma, recursos o documentos de planificación del proyecto debe ser evaluada, aprobada o rechazada antes de ser implementada. Es parte del Área 1 (Gestión de la Integración) del PMBOK porque un cambio en cualquier área afecta inevitablemente a las demás.

En este proyecto, el proceso de control de cambios garantiza que el alcance comprometido en el Project Charter no sea alterado informalmente durante la Fase 2 (ejecución ágil), sin que el Sponsor, el PO y el SM hayan evaluado el impacto de manera explícita y documentada.

## Por qué es necesario en Water-Scrum-Fall

El modelo Water-Scrum-Fall genera una tensión específica:

- La Fase 1 (PMI) produce un contrato de alcance fijo con el Sponsor: 6 épicas, 32 HU, fecha de entrega H7.
- La Fase 2 (Scrum) opera con un backlog adaptable que puede cambiar sprint a sprint.

Sin control de cambios, un stakeholder con poder (S1, S2, S3) podría solicitar durante la ejecución que se agregue una funcionalidad nueva, y el equipo podría incorporarla al backlog sin evaluar el impacto en el cronograma, en el costo y en los riesgos. Después de varios cambios así, el proyecto tiene más alcance del comprometido, el cronograma se deslizó y el Sponsor no tiene registro de por qué el proyecto no entregó en H7.

El control de cambios no impide que el proyecto evolucione: impide que evolucione sin registro, sin evaluación y sin aprobación del nivel correcto de autoridad.

## Proceso de 5 pasos

### Paso 1 — Solicitud formal (CR)

Cualquier persona (stakeholder interno o externo) puede solicitar un cambio al proyecto. La solicitud debe usar la plantilla CR estándar (ver sección siguiente). No existe cambio verbal: si no hay CR documentado, el cambio no existe formalmente y no puede ser implementado.

El PO es el receptor de todas las solicitudes de cambio. Las solicitudes que llegan a los developers directamente deben ser redirigidas al PO sin compromiso de implementación.

### Paso 2 — Evaluación de impacto

El PO y el SM evalúan el CR en conjunto dentro de los 5 días hábiles siguientes a su recepción. La evaluación incluye:

- Impacto en el alcance: ¿cuántas HU o tareas adicionales requiere?
- Impacto en el cronograma: ¿cuántos SP adicionales? ¿afecta el buffer de holgura (sprints 8–9)?
- Impacto en costos: ¿cuánto tiempo adicional del equipo? Ver análisis detallado en `costos.md`.
- Impacto en riesgos: ¿activa o amplifica alguno de los riesgos R1–R9?
- Prioridad: ¿el cambio es crítico para el éxito del proyecto o es una mejora opcional?

### Paso 3 — Decisión del CCB (Change Control Board)

La decisión sobre el CR depende de su magnitud:

- **CCB básico** (PO Say + SM Cordero): tiene competencia para cambios menores que no superan el umbral definido para el proyecto. Se reúne dentro de los 3 días hábiles siguientes a la evaluación de impacto.
- **CCB ampliado** (PO Say + SM Cordero + Sponsor Marroquín): tiene competencia para cambios mayores que superan el umbral del CCB básico o que modifican hitos del Gantt macro (H1–H8). Se convoca en reunión extraordinaria dentro de los 5 días hábiles siguientes.

Las decisiones posibles son: Aprobado, Rechazado, o Diferido (se pospone para evaluación en el siguiente ciclo de planificación).

### Paso 4 — Implementación o archivo con justificación

- Si el CR es **aprobado**: el PO incorpora las nuevas HU o modificaciones al Product Backlog con la prioridad asignada. El SM coordina la incorporación al siguiente sprint disponible o ajusta el sprint en curso según el impacto evaluado.
- Si el CR es **rechazado**: el PO documenta la justificación del rechazo y notifica al solicitante con la razón formal. El rechazo queda registrado en el log de CRs.
- Si el CR es **diferido**: se registra con estado "pendiente" y se reevalúa en la próxima reunión del CCB básico.

### Paso 5 — Comunicación al solicitante y reporte en C1

El PO notifica al solicitante del CR sobre la decisión dentro de los 2 días hábiles siguientes a la reunión del CCB. La decisión incluye la justificación.

Todos los CRs del período de sprint (aprobados, rechazados y diferidos) se reportan al Sponsor en el informe quincenal C1. Esto mantiene a S1 Marroquín informado de los cambios que afectan el alcance comprometido sin necesidad de que participe en todos los CRs.

## Composición del CCB y niveles de competencia

| CCB | Integrantes | Competencia | Tiempo de convocatoria |
|---|---|---|---|
| CCB básico | PO Josué Say + SM Mathew Cordero | Cambios menores al alcance que no superan el umbral definido para el proyecto y que no modifican hitos del Gantt macro | 3 días hábiles |
| CCB ampliado | PO Josué Say + SM Mathew Cordero + Sponsor Erick Marroquín | Cambios mayores que superan el umbral del CCB básico, modificaciones a hitos H1–H8, cambios que impactan el presupuesto total del proyecto | 5 días hábiles |

## Plantilla CR — Change Request

| Campo | Descripción | Valor en este CR |
|---|---|---|
| ID CR | Identificador único secuencial | CR-AAAA-NNN (ej: CR-2027-001) |
| Fecha de solicitud | Fecha en que se genera el CR | DD/MM/AAAA |
| Solicitante | Nombre y rol del solicitante | [Nombre] — [Rol / Stakeholder ID] |
| Descripción del cambio | Qué se solicita cambiar de forma específica | [Descripción clara del cambio] |
| Razón / Justificación | Por qué se solicita el cambio | [Razón de negocio o técnica] |
| Impacto en alcance | HU o funcionalidades afectadas | [HU agregadas, modificadas o eliminadas] |
| Impacto en cronograma | SP adicionales y efecto en hitos | [SP estimados + hitos afectados] |
| Impacto en costo | Efecto en el presupuesto (referencia a costos.md) | [Ver análisis en costos.md] |
| Impacto en riesgos | Riesgos R1–R9 activados o amplificados | [IDs de riesgos afectados] |
| Prioridad | Crítico / Alta / Media / Baja | [Prioridad del solicitante] |
| Decisión CCB | Aprobado / Rechazado / Diferido | [Decisión + fecha] |
| Justificación de la decisión | Por qué se aprueba, rechaza o difiere | [Justificación del CCB] |
| Sprint de implementación | Sprint en que se implementará si es aprobado | Sprint N (si aplica) |
| Firmado por | PO + SM (CCB básico) o PO + SM + Sponsor (CCB ampliado) | [Firmas] |

## Registro de CRs como artefacto vivo de ejecución

El registro de CRs es un documento vivo que se actualiza durante toda la Fase 2. Contiene todos los CRs generados (aprobados, rechazados y diferidos) con su plantilla completa. Este registro cumple varias funciones:

- Evidencia de gobernanza: demuestra que todos los cambios al alcance fueron evaluados formalmente.
- Trazabilidad: permite rastrear por qué el alcance final difiere del alcance original si hubo CRs aprobados.
- Insumo para el Acta de Cierre: el Acta de Cierre incluye un resumen de los CRs del proyecto.
- Insumo para lecciones aprendidas: los CRs rechazados o diferidos revelan patrones de solicitudes que el equipo debe gestionar mejor en proyectos futuros.

## Anti-patrón evitado

El anti-patrón más frecuente en proyectos de software es el cambio verbal: un stakeholder conversa con un developer en los pasillos, le pide "una pequeña mejora", el developer la implementa sin registro, el PO no lo sabe, el sprint termina con más trabajo del planificado y los SP completados no coinciden con el plan. Este patrón se repite hasta que el proyecto está completamente descargado y el Sponsor pregunta por qué el cronograma se deslizó.

La regla de este proyecto es simple: si no hay CR documentado, el cambio no existe. Los developers tienen instrucción explícita de redirigir cualquier solicitud de cambio al PO sin comprometerse a implementarla.

## Principio rector

"Sin control de cambios, el contrato es papel mojado."

El Project Charter y el plan del proyecto son compromisos formales con el Sponsor. El control de cambios es el mecanismo que garantiza que esos compromisos se respetan o se renegocian formalmente cuando la realidad lo requiere. Un proyecto sin control de cambios no gestiona cambios: los sufre.

## Umbral explícito de competencia del CCB

El "umbral" que separa la competencia del CCB básico de la del CCB ampliado se define en términos objetivos para evitar ambigüedades en el momento de evaluar un CR:

| Criterio | CCB básico (PO + SM) | CCB ampliado (PO + SM + Sponsor) |
|---|---|---|
| Story points adicionales | $\leq$ 5 SP en total (no excede la capacidad de medio sprint) | $>$ 5 SP adicionales |
| Hitos del Gantt macro afectados | Ninguno — el cambio cabe en el buffer de sprints 8–9 sin desplazar H4, H5, H6, H7 | Cualquier hito H4–H8 se desplaza o se modifica |
| Costo adicional | Cubierto por la reserva de contingencia sin agotarla | Requiere activar parte significativa de la reserva de contingencia o ampliar el presupuesto |
| Riesgos activados | Ningún riesgo nuevo o riesgo existente dentro de su umbral de probabilidad | Activa o amplifica riesgo nuevo no identificado, o R1 con impacto mayor al estimado |
| Alcance comprometido en Charter | No modifica épicas EP01–EP06 ni las HU comprometidas | Agrega o elimina HU de alguna épica, o modifica el scope statement del Charter |

**Ejemplo de aplicación:** Si Admisiones solicita agregar una funcionalidad de "comparación de dos carreras" no contemplada en EP06, el CR implica aproximadamente 3–4 HU adicionales ($\approx$ 8–12 SP). Este CR supera el umbral de 5 SP y modifica EP06, por lo que requiere CCB ampliado con la participación del Sponsor.

## Gestión de la configuración

La gestión de la configuración (Configuration Management) es el proceso complementario al control de cambios que garantiza que los documentos y artefactos del proyecto estén bajo control de versión y que los cambios queden registrados con trazabilidad completa.

En este proyecto, la gestión de la configuración opera en dos niveles:

### Documentos de planificación (Fase 1)

- Los documentos PMI (este archivo y los demás de `pmi/`) están bajo control de versión en el repositorio Git del proyecto.
- Cualquier modificación a un documento de planificación (por ejemplo, actualización de la matriz de riesgos tras la materialización de un riesgo) se realiza mediante un commit documentado con la referencia al CR que lo originó.
- La versión vigente de cada documento es la que está en la rama `main` del repositorio. No existen versiones "en borrador" paralelas no versionadas.

### Artefactos de ejecución (Fase 2)

- El código fuente está bajo control de versión Git con la política de ramas definida por el equipo.
- El Product Backlog y el Sprint Backlog son artefactos vivos gestionados en la herramienta de tablero del equipo (no en documentos estáticos).
- El registro de CRs es un documento vivo actualizado por el PO en cada ciclo quincenal antes del informe C1.
- Los informes C1 al Sponsor se archivan por sprint en el repositorio del proyecto.
