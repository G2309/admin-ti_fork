# Métricas de flujo Kanban

Proyecto: Sistema de Recomendación de Carrera Universitaria — UVG Campus Central 2026

## Métricas fundamentales del método Kanban

Kanban mide el desempeño del sistema a través de cuatro indicadores de flujo. A diferencia de Scrum, que mide velocidad por sprint, Kanban mide la capacidad del sistema de entregar trabajo de forma continua y predecible.

## Cycle Time

### Definición

Tiempo activo desde que un ejecutor comienza a trabajar una tarea hasta que esa tarea queda completada. El Cycle Time excluye el tiempo de espera en el Backlog o en To Do: mide únicamente el esfuerzo activo del equipo.

### Fórmula

```bash
Cycle Time = tiempo desde In Progress hasta Done (por tarea)
```

### Valores del proyecto

| Indicador | Valor |
|---|---|
| Cycle Time promedio | 5.13 días hábiles por tarea |
| Cycle Time mínimo | 4 días hábiles |
| Cycle Time máximo | 10 días hábiles |

El Cycle Time máximo de 10 días hábiles es también el límite comprometido en el SLA del proyecto. Ninguna tarea puede estar en el estado activo (In Progress hasta Review) por más de 10 días hábiles sin que constituya un incumplimiento del acuerdo de nivel de servicio.

## Lead Time

### Definición

Tiempo total desde que una tarea entra al sistema (es decir, desde que el cliente o el PM la registra en el Backlog) hasta que se entrega como Done. El Lead Time incluye el tiempo de espera en el Backlog y en To Do, por lo que siempre es mayor o igual al Cycle Time.

### Fórmula (Ley de Little aplicada)

```bash
Lead Time = WIP / Throughput

Donde:
  WIP = número de tareas activas en el sistema (In Progress)
  Throughput = tareas completadas por unidad de tiempo
```

### Valores del proyecto

Con WIP de In Progress = 4 y Throughput diario = 0.78 tareas por día:

```bash
Lead Time = 4 / 0.78 = 5.13 días hábiles (tiempo activo)
```

El Lead Time total acordado en el SLA (6 a 12 días hábiles) incluye el tiempo de espera en To Do antes de que un ejecutor tome la tarea. El rango entre 6 y 12 días refleja la variabilidad natural del flujo: tareas simples pueden completarse en el extremo inferior; tareas complejas o con dependencias pueden acercarse al extremo superior.

## Throughput

### Definición

Número de tareas completadas (moved to Done) en un período de tiempo determinado. Es el indicador de capacidad del sistema: cuánto trabajo puede entregar el equipo por día, por semana o por mes.

### Fórmula

```bash
Throughput diario = Ejecutores activos / Cycle Time promedio
Throughput diario = 4 / 5.13 = 0.78 tareas por día
```

### Valores del proyecto

| Período | Throughput esperado |
|---|---|
| Diario | 0.78 tareas/día |
| Semanal (5 días hábiles) | 3.90 tareas/semana (~3 a 4 tareas/semana según el SLA) |
| Mensual (20 días hábiles) | 15.60 tareas/mes |

El SLA compromete entre 3 y 4 tareas por semana, lo que es consistente con el Throughput calculado de 3.90 tareas por semana. El rango del SLA contempla la variabilidad normal del flujo.

## Ley de Little

### Definición

Principio de la teoría de colas que establece la relación entre el número de tareas en el sistema, el Throughput y el Lead Time.

### Fórmula

```bash
Lead Time = WIP / Throughput
```

### Implicación práctica

La Ley de Little demuestra que el Lead Time del sistema puede reducirse de dos maneras:

1. Reduciendo el WIP (menos tareas activas simultáneamente).
2. Aumentando el Throughput (más tareas completadas por unidad de tiempo).

En este proyecto, si el WIP de In Progress se mantiene en 4 y el Throughput cae por debajo de 0.78 tareas por día, el Lead Time aumenta de forma directamente proporcional. Por ejemplo, con un Throughput de 0.5 tareas por día, el Lead Time pasaría a 8 días, acercándose al límite máximo del SLA.

## Duración estimada del proyecto

### Sin buffer

```bash
133 tareas / 0.78 tareas por día = 170.5 días hábiles (~9 meses)
```

Equivale aproximadamente a 34 semanas o 9 meses de trabajo continuo.

### Con buffer del 25%

```bash
170.5 días * 1.25 = 213.1 días hábiles (~11 meses)
```

El buffer del 25% cubre tres categorías de variabilidad: tareas que superan el Cycle Time promedio (hasta 10 días), bloqueos por dependencias externas y el tiempo de validación funcional en Review. La duración con buffer es la que se comprometió en el SLA: 11 meses, del 1 de enero de 2027 al 6 de diciembre de 2027.

## Monitoreo de métricas

### Frecuencia y responsable

El PM (Josué Say) revisa las métricas de flujo semanalmente, al final de cada semana hábil. La revisión incluye:

- Throughput acumulado de la semana vs. el esperado ($0.78 \times 5 = 3.9$ tareas).
- Cycle Time promedio de las tareas completadas en esa semana.
- Número de tareas que regresaron desde Testing o Review a In Progress y la causa registrada.
- Estado de los límites WIP: si alguna columna estuvo en su límite por más de dos días consecutivos, se registra como señal de cuello de botella.

Los resultados del monitoreo semanal se consolidan en la revisión mensual del SLA para determinar si el equipo está dentro de los compromisos acordados con UVG Campus Central.

### Señal de alerta por Throughput

Si el Throughput real cae por debajo de 0.78 tareas por día de forma sostenida durante más de una semana, el PM convoca una revisión del flujo. Esta revisión no es un evento de calendario fijo; se activa cuando los datos lo requieren.

La revisión del flujo busca responder cuatro preguntas:

1. ¿En qué columna se concentran las tareas que no avanzan?
2. ¿Las tareas en In Progress son más complejas que el promedio estimado?
3. ¿Hay bloqueos por dependencias externas que no están siendo contabilizados correctamente?
4. ¿El Cycle Time de las tareas recientes está desviándose del promedio de 5.13 días?

Con base en las respuestas, el PM y el Líder Técnico proponen un ajuste: puede ser una reducción temporal del WIP de To Do para concentrar el esfuerzo, una redistribución de tareas entre ejecutores, o una re-estimación de la capacidad mensual para el reporte del SLA.
