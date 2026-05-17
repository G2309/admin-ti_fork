# Métricas en Scrumban

## Principio de medición híbrida

Scrumban combina métricas de Scrum (orientadas al sprint) con métricas de Kanban (orientadas al flujo). Las seis métricas de este proyecto son las seis dimensiones de control que el PO y el Facilitador usan para tomar decisiones durante y al cierre de cada sprint. No son métricas opcionales: sin ellas, el equipo no puede operar Scrumban de forma genuina.

## Las seis métricas

### Métrica 1: Velocidad del sprint

**Definición:** Story Points completados en el sprint vs Story Points comprometidos en el Planning.

**Cálculo:**

$$
\text{Velocidad real} = \sum SP_{\text{tareas en Done al cierre del sprint}}
$$

$$
\text{Tasa de cumplimiento} = \frac{\text{Velocidad real}}{\text{SP comprometidos}} \times 100
$$

**Valor de referencia del proyecto:** 20 SP comprometidos por sprint. Una tasa de cumplimiento por debajo del 80% activa revisión en la Retrospectiva.

**Frecuencia de reporte:** al cierre de cada sprint, en la Sprint Review.

**Decisiones que habilita:**

- El PO ajusta el volumen del siguiente Sprint Planning si la velocidad real se aleja consistentemente de la estimada.
- El Facilitador revisa si la causa es técnica (deuda, bloqueos) o de estimación (SP mal calibrados).

### Métrica 2: Burndown del sprint

**Definición:** progreso diario del sprint expresado como SP pendientes de completar vs SP esperados según el ritmo lineal comprometido.

**Cálculo:** al inicio del sprint se dibuja la línea ideal: $SP_{\text{comprometidos}}$ divididos uniformemente entre los 10 días hábiles. Cada día se registra el SP pendiente real y se compara con la línea ideal.

**Frecuencia de reporte:** diariamente por el Facilitador; resumen al cierre del sprint en la Review.

**Decisiones que habilita:**

- Si la curva real está consistentemente por encima de la línea ideal (más SP pendientes de lo esperado), el Facilitador alerta al equipo y al PO antes del día 7 para gestionar el alcance del sprint.
- Si la curva real está muy por debajo, el PO puede considerar activar trabajo ROM adicional dentro del umbral disponible.

### Métrica 3: Ratio BID/ROM real vs planificado

**Definición:** proporción de SP completados en tareas BID vs SP completados en tareas ROM durante el sprint, comparada con la distribución planificada (80/20).

**Cálculo:**

$$
\text{BID real (\%)} = \frac{SP_{\text{BID completados}}}{SP_{\text{total completados}}} \times 100
$$

$$
\text{ROM real (\%)} = \frac{SP_{\text{ROM completados}}}{SP_{\text{total completados}}} \times 100
$$

**Frecuencia de reporte:** al cierre de cada sprint, en la Sprint Review.

**Decisiones que habilita:**

- Si el ROM real supera el 20%, el PO verifica si se excedió el umbral SLA y activa el proceso de cargo adicional.
- Si el ROM real es consistentemente menor al 10%, el equipo puede revisar si la reserva ROM del 20% es excesiva para el contexto actual del proyecto.
- El ratio real es el dato base para el reporte de facturación del sprint.

### Métrica 4: Cycle Time de tareas

**Definición:** tiempo transcurrido desde que una tarea entra a la columna In Progress hasta que llega a Done. Se mide en días hábiles.

**Cálculo:**

$$
\text{Cycle Time}_{\text{tarea}} = \text{Fecha Done} - \text{Fecha inicio In Progress}
$$

$$
\overline{CT} = \frac{\sum \text{Cycle Time de todas las tareas del sprint}}{N_{\text{tareas completadas}}}
$$

**Valor de referencia del proyecto:** máximo 10 días hábiles por tarea según el SLA.

**Frecuencia de reporte:** por tarea (el Facilitador lo registra al mover cada tarjeta a Done); promedio al cierre del sprint en la Retrospectiva.

**Decisiones que habilita:**

- Tareas con Cycle Time mayor a 10 días activan revisión: ¿hubo bloqueo en Testing?, ¿la tarea era demasiado grande para una iteración?
- El Facilitador usa el Cycle Time promedio para ajustar los límites WIP si hay cuellos de botella recurrentes.

### Métrica 5: Throughput del sprint

**Definición:** número de tareas completadas por semana durante el sprint. Es una métrica de flujo, no de estimación.

**Cálculo:**

$$
\text{Throughput semanal} = \frac{N_{\text{tareas Done en la semana}}}{1 \text{ semana}}
$$

**Valor de referencia del proyecto:** 3–4 tareas por semana según el SLA. Con 10 días hábiles por sprint y 133 tareas totales en 8 sprints, el Throughput promedio por sprint es $\approx 16.6$ tareas.

**Frecuencia de reporte:** semanalmente por el Facilitador; promedio del sprint en la Retrospectiva.

**Decisiones que habilita:**

- Si el Throughput cae por debajo de 3 tareas/semana, el Facilitador revisa el tablero: ¿hay acumulación en Testing o Review?, ¿los límites WIP están siendo respetados?
- El Throughput real confirma si la partición de 133 tareas en 8 sprints es sostenible o si hay que ajustar el alcance.

### Métrica 6: Número de interrupciones ROM registradas

**Definición:** conteo de solicitudes de trabajo no planificado (ROM) que ingresaron al sprint durante la iteración, con detalle de origen, fecha y SP consumidos.

**Cálculo:** registro manual del Facilitador. Cada solicitud ROM aprobada por el PO se registra con: fecha de ingreso, descripción, SP estimados, SP reales al completar.

**Frecuencia de reporte:** en tiempo real (el Facilitador actualiza el registro cada vez que llega una solicitud ROM); resumen al cierre del sprint en la Sprint Review.

**Decisiones que habilita:**

- Si el número de interrupciones ROM supera el umbral incluido en el SLA, el PO activa el proceso de cargo adicional.
- Si el número de interrupciones es consistentemente alto en sprints consecutivos, el equipo puede revisar si la proporción 80/20 debe ajustarse a 70/30 para los sprints restantes.
- El registro de interrupciones es la evidencia documental para el reporte de facturación y para discusiones de alcance con UVG.

## Resumen de métricas por responsable y frecuencia

| Métrica | Responsable de cálculo | Frecuencia | Reporte en |
| :--- | :--- | :--- | :--- |
| Velocidad del sprint | Facilitador | Al cierre del sprint | Sprint Review |
| Burndown del sprint | Facilitador | Diaria | Daily Scrumban + Review |
| Ratio BID/ROM real | Facilitador | Al cierre del sprint | Sprint Review |
| Cycle Time de tareas | Facilitador | Por tarea (al llegar a Done) | Retrospectiva |
| Throughput del sprint | Facilitador | Semanal | Retrospectiva |
| Interrupciones ROM | Facilitador | Tiempo real | Sprint Review |
