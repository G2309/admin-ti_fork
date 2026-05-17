# Acuerdo de Nivel de Servicio (SLA) Kanban

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Por qué el SLA aplica en Kanban

Kanban opera como un modelo de servicio continuo: el equipo no entrega al final de un sprint ni acumula valor hasta una fecha de release programada. Entrega de forma constante, tarea a tarea, a lo largo del tiempo. Este modelo de flujo continuo es compatible con un SLA porque el SLA establece compromisos sobre la velocidad y la calidad del servicio, no sobre el contenido de una iteración específica.

En Scrum, la unidad de compromiso es el sprint: el equipo se compromete a completar ciertos ítems en un período de dos semanas. En Kanban, la unidad de compromiso es el flujo: el equipo se compromete a mantener métricas de entrega dentro de rangos acordados (Lead Time, Cycle Time, Throughput) durante toda la vigencia del contrato.

El SLA documenta esos rangos y establece las consecuencias cuando no se cumplen. La facturación también es mensual, independiente del número de tareas completadas en cada mes, lo que refuerza el modelo de servicio continuo.

## Partes del SLA

- **Proveedor**: Strategic IT Project Solutions
- **Cliente**: Universidad del Valle de Guatemala — Campus Central

## Vigencia

El SLA tiene una duración de 11 meses, con inicio el 1 de enero de 2027 y cierre el 6 de diciembre de 2027. Esta duración corresponde a la estimación del proyecto con buffer del 25% aplicado sobre los 133 ítems del Backlog técnico a un Throughput de 0.78 tareas por día.

## Componentes del SLA

### 1. Lead Time

Tiempo total desde que el cliente presenta una solicitud hasta que la tarea se entrega como completada. Incluye el tiempo de espera en el Backlog y en To Do, así como el tiempo activo de ejecución.

- Rango comprometido: 6 a 12 días hábiles.
- El extremo inferior (6 días) aplica a tareas con criterios de aceptación claros, sin dependencias externas y de complejidad estándar.
- El extremo superior (12 días) aplica a tareas que requieren validación con el cliente, que dependen de insumos externos, o cuyo Cycle Time activo se extiende hacia el máximo permitido.

### 2. Cycle Time

Tiempo activo desde que un ejecutor comienza a trabajar una tarea hasta que se completa.

- Límite máximo comprometido: 10 días hábiles.
- El Cycle Time promedio esperado es de 5.13 días hábiles. El límite de 10 días es el techo absoluto; superarlo constituye incumplimiento de este componente del SLA.
- Si una tarea supera los 10 días hábiles de Cycle Time, el PM registra la causa y la reporta en el informe mensual al cliente.

### 3. WIP máximo en In Progress

Número máximo de tareas que el equipo puede tener en ejecución activa simultáneamente.

- Límite comprometido: 4 tareas simultáneas en In Progress.
- Este límite protege al cliente de que el equipo se distribuya en demasiadas tareas en paralelo, lo que elevaría el Cycle Time y degradaría la calidad de las entregas.
- El límite es consistente con el tamaño del equipo: un ejecutor activo por tarea (Líder Técnico + 3 Developers).

### 4. Throughput

Número de tareas completadas por período de tiempo.

- Rango comprometido: 3 a 4 tareas por semana.
- Equivale a un Throughput mensual de 15 a 16 tareas por mes (sobre 20 días hábiles).
- El Throughput calculado del equipo es de 3.90 tareas por semana; el rango del SLA refleja la variabilidad natural del flujo.
- Si el Throughput real cae por debajo de 3 tareas por semana de forma sostenida durante más de dos semanas consecutivas, el PM notifica al cliente y activa una revisión del flujo.

### 5. Disponibilidad del entorno de pruebas

Porcentaje de tiempo mensual en que el entorno de pruebas (staging) del sistema de recomendación está operativo y accesible para validación por parte del cliente.

- Mínimo comprometido: 80% de uptime mensual.
- Los mantenimientos programados notificados con al menos 48 horas de anticipación no cuentan como tiempo no disponible.
- El Líder Técnico (Mathew Cordero) es el responsable del monitoreo y el reporte de disponibilidad.

## Tiempo de respuesta ante solicitudes e incidencias

- El equipo tiene un plazo máximo de 24 horas hábiles para responder ante cualquier solicitud de información o incidencia reportada por el cliente.
- Responder no significa resolver; significa acusar recibo, evaluar el impacto y comunicar el plan de acción.

## Interrupciones del servicio

El SLA distingue entre interrupciones dentro del rango normal de operación e interrupciones que exceden ese rango:

- Hasta 3 interrupciones por mes: se consideran parte de la operación normal del proyecto. No generan cargo adicional ni requieren compensación.
- A partir de la cuarta interrupción en el mismo mes: cada interrupción adicional genera un cargo adicional establecido en el contrato.

Una "interrupción" se define como cualquier evento que detenga el flujo de trabajo del equipo por causas atribuibles al proveedor: indisponibilidad del entorno, bloqueos técnicos no comunicados, o tareas retenidas en una columna por más de 48 horas sin actualización de estado.

## Penalización por retraso en la entrega del MVP

Si el MVP no se entrega en la fecha comprometida y el retraso es atribuible al proveedor, se aplica una penalización proporcional por cada mes de retraso. El porcentaje y la base de cálculo están definidos en el contrato.

Las causas de retraso atribuibles al cliente (cambios de alcance no documentados, falta de entrega de insumos, cancelación de sesiones de validación) no activan la penalización y se documentan en el registro de incidencias del proyecto.

## Términos de pago

- Modalidad: pagos mensuales.
- Fecha límite de pago: primeros 5 días hábiles de cada mes, por el mes anterior.
- El pago es independiente del número exacto de tareas completadas en el mes, siempre que el Throughput real esté dentro del rango comprometido en el SLA.
- Si el Throughput del mes cae por debajo del mínimo comprometido por causas atribuibles al proveedor, el cliente puede aplicar la penalización proporcional definida en el contrato antes de efectuar el pago.
