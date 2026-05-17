# SLA en Scrumban

## Por qué el SLA aplica en Scrumban

Scrumban introduce una dimensión de servicio continuo que Scrum puro no contempla: el canal ROM. En Scrum puro, el equipo negocia el alcance de cada sprint en el Planning y no hay mecanismo para compromisos de respuesta a trabajo no planificado durante la iteración. En Scrumban, el equipo se compromete explícitamente a absorber hasta un umbral de trabajo no planificado por sprint, con tiempos de flujo controlados y métricas medibles.

Esta característica convierte el contrato del proyecto en un acuerdo que combina entrega de funcionalidades (por sprint) con un componente de servicio (ROM dentro del umbral). El SLA formaliza ambas dimensiones: los compromisos de entrega iterativa y los compromisos de flujo y respuesta.

## Identificación del acuerdo

| Campo | Valor |
| :--- | :--- |
| Vigencia | 8 sprints: 1 enero 2027 — 22 abril 2027 |
| Proveedor | Strategic IT Project Solutions |
| Cliente | UVG Campus Central |
| Proyecto | Sistema de Recomendación de Carrera Universitaria — UVG 2026 |

## Estándares comprometidos

### Estándar 1: Velocidad del sprint

- Compromiso: 20 SP por sprint como velocidad base comprometida.
- Medición: SP completados y en Done al cierre del sprint en la Sprint Review.
- Umbral de alerta: si la velocidad real es inferior al 80% del compromiso ($<16$ SP) en dos sprints consecutivos, se activa revisión del alcance con el cliente.

### Estándar 2: Lead Time

- Compromiso: máximo 8 días hábiles desde que una tarea es aprobada (entra a To Do) hasta que llega a Done.
- Medición: el Facilitador registra la fecha de entrada a To Do y la fecha de llegada a Done para cada tarea.
- Umbral de incumplimiento: más del 20% de las tareas del sprint con Lead Time superior a 8 días hábiles constituye incumplimiento del estándar.

### Estándar 3: Cycle Time

- Compromiso: máximo 10 días hábiles desde que una tarea entra a In Progress hasta que llega a Done.
- Medición: el Facilitador registra la fecha de inicio en In Progress y la fecha de llegada a Done.
- Umbral de incumplimiento: más del 20% de las tareas del sprint con Cycle Time superior a 10 días hábiles constituye incumplimiento.

### Estándar 4: WIP In Progress

- Compromiso: máximo 4 tareas simultáneas en la columna In Progress en cualquier momento del sprint.
- Medición: el Facilitador verifica el límite en cada Daily Scrumban.
- Umbral de incumplimiento: exceder el límite WIP de In Progress en más de 3 ocasiones durante el sprint constituye incumplimiento del estándar de flujo.

### Estándar 5: Throughput

- Compromiso: 3–4 tareas completadas por semana durante el sprint.
- Medición: conteo de tareas que llegan a Done por semana, registrado por el Facilitador.
- Umbral de alerta: menos de 3 tareas por semana en dos semanas consecutivas del mismo sprint activa revisión de cuellos de botella.

## Disponibilidad del equipo

- Compromiso: disponibilidad mínima del 80% mensual del equipo de desarrollo.
- Aplicación: cualquier ausencia planificada (vacaciones, permisos) debe notificarse con al menos 5 días hábiles de anticipación al Facilitador para replanificación del sprint.
- Las ausencias no planificadas que superen el 20% de la capacidad del sprint en un mismo período se documentan como evento de riesgo.

## Cláusula ROM: umbral de interrupciones incluidas

El SLA incluye explícitamente la absorción de trabajo no planificado (ROM) dentro de los siguientes términos:

- Umbral ROM incluido por sprint: hasta el 20% de la capacidad del sprint ($\approx 4$ SP por sprint), sin cargo adicional.
- Condición de absorción: el trabajo ROM debe ser aprobado por el PO antes de ingresar al tablero y debe ingresar dentro de los límites WIP disponibles.
- Registro: el Facilitador registra cada interrupción ROM con fecha, descripción y SP consumidos.

Cuando el trabajo ROM supera el umbral del 20% en un sprint, el exceso no es absorbido automáticamente. El cliente es notificado y se activa el proceso de cargo adicional por interrupción según los términos del contrato. El monto de ese cargo se establece en el contrato complementario al SLA.

## Penalización por retraso

Si el proveedor no entrega el MVP en la fecha comprometida (22 de abril de 2027) por causas atribuibles al proveedor, aplica una penalización proporcional al tiempo de retraso. La proporción de la penalización se define en el contrato complementario al SLA y no se reproduce en este documento.

Causas no atribuibles al proveedor que eximen de penalización:

- Cambios de alcance solicitados por el cliente que no se procesaron como ROM dentro del umbral acordado.
- Solicitudes ROM que excedieron el umbral repetidamente y que el cliente no formalizó como ampliación de contrato.
- Indisponibilidad de información o accesos por parte de UVG que bloquearon tareas críticas.

## Términos de pago

- Modalidad: pago por sprint, al cierre de cada iteración.
- Plazo: primeros 5 días hábiles posteriores al cierre del sprint.
- Condición: el pago se procesa previa validación del incremento del sprint en la Sprint Review. Si el PO rechaza el incremento total del sprint, el pago se retiene hasta resolución del diferendo.
- Evidencia de entrega: el reporte de Sprint Review con el ratio BID/ROM real, las métricas del sprint y el incremento aceptado constituye la documentación de entrega para cada pago.

## Los tres modelos de facturación de Scrumban

Scrumban habilita tres líneas de cobro que reflejan la naturaleza híbrida del modelo:

### Modelo 1: Por sprint y capacidad (línea principal)

El cliente paga la capacidad completa del sprint comprometida en el Planning: BID más la reserva ROM incluida. Este es el pago base por cada iteración, independientemente de si el umbral ROM se utilizó completo, parcialmente o no se utilizó.

La lógica es: el proveedor reservó esa capacidad ROM para el cliente durante todo el sprint. Si el cliente no la utilizó, la capacidad no se transfiere al siguiente sprint ni genera crédito.

### Modelo 2: Por historia ROM extra (línea de exceso)

Cuando el trabajo ROM durante el sprint supera el umbral incluido en el Modelo 1, el exceso se cobra por interrupción adicional. Cada solicitud ROM que supere el umbral se registra como una unidad de trabajo extra y se factura según la tarifa acordada en el contrato.

Este modelo crea el incentivo correcto: el cliente tiene un colchón de trabajo no planificado incluido, pero sabe que excederlo tiene un costo. Esto promueve una gestión responsable del backlog y reduce las urgencias artificiales.

### Modelo 3: SLA ROM (línea de cumplimiento)

El SLA establece explícitamente el umbral de trabajo no planificado incluido y el cargo por excederlo. A diferencia del Modelo 2 (que cobra el exceso por ítem), el Modelo 3 puede estructurarse como un cargo fijo por exceder el umbral un número de veces en el período del contrato.

Este modelo es el mecanismo de alineación contractual: protege al proveedor de un uso excesivo del canal ROM y protege al cliente de cobros sorpresa al definir con claridad las reglas antes de que ocurra el exceso.
