# EVM: Earned Value Management — Monitoreo de Desempeño del Proyecto

## Definición de EVM

Earned Value Management (Gestión del Valor Ganado) es la metodología de control de proyectos que integra el alcance, el cronograma y el costo en un único marco de medición. EVM permite responder dos preguntas críticas en cualquier momento del proyecto:

- ¿El equipo está avanzando al ritmo planificado? (desempeño de cronograma)
- ¿El proyecto está consumiendo los recursos al ritmo esperado? (desempeño de costo)

Sin EVM, el equipo puede reportar "completamos 5 historias" sin que el Sponsor pueda comparar ese avance contra el plan. Con EVM, el Sponsor tiene métricas objetivas: el proyecto está al 87% de lo planificado, con un CPI de 0.93, lo que indica una ligera desviación por encima del presupuesto pero dentro del umbral de alerta.

## Por qué se usa EVM en este proyecto

Este proyecto ejecuta la Fase 2 con Scrum, donde la unidad de medida de avance son los story points completados por sprint. EVM permite traducir ese avance ágil a métricas de desempeño comparables con el plan PMI establecido en la Fase 1.

La combinación Scrum + EVM es la práctica de monitoreo del modelo Water-Scrum-Fall: Scrum mide la velocidad sprint a sprint; EVM mide el desempeño acumulado del proyecto contra la línea base planificada. Ambas métricas se reportan al Sponsor en el informe quincenal C1.

## Las 3 métricas base

### PV — Planned Value (Valor Planificado)

El valor del trabajo que debería haberse completado a una fecha de corte determinada, según el plan original. En este proyecto, el PV se calcula como la proporción de story points que deberían haberse completado al cierre de cada sprint:

```bash
PV al cierre del sprint N = (SP acumulados planificados hasta sprint N / SP totales) * BAC
```

El PV es la línea base del cronograma en términos de valor.

### EV — Earned Value (Valor Ganado)

El valor del trabajo que realmente se completó a la fecha de corte, medido en los mismos términos que el PV. En este proyecto, el EV se calcula como:

```bash
EV al cierre del sprint N = (SP acumulados completados hasta sprint N / SP totales) * BAC
```

Si el equipo completa exactamente los SP planificados para el sprint, EV = PV. Si completa menos, EV < PV.

### AC — Actual Cost (Costo Real)

El costo real incurrido para completar el trabajo hasta la fecha de corte. En este proyecto, el AC es el costo acumulado del equipo (salarios + infraestructura cloud) hasta el cierre de cada sprint. Los valores monetarios específicos se detallan en `costos.md`.

## Las 4 métricas derivadas

### CV — Cost Variance (Varianza de Costo)

```bash
CV = EV - AC
```

- CV > 0: el equipo completó más trabajo del que costó (bajo presupuesto).
- CV = 0: el proyecto está exactamente en presupuesto.
- CV < 0: el equipo gastó más de lo que avanzó (sobre presupuesto).

### SV — Schedule Variance (Varianza de Cronograma)

```bash
SV = EV - PV
```

- SV > 0: el equipo completó más trabajo del que se planificó a esa fecha (adelantado).
- SV = 0: el proyecto está exactamente en el cronograma planificado.
- SV < 0: el equipo completó menos trabajo del que se planificó (retrasado).

### CPI — Cost Performance Index (Índice de Desempeño de Costo)

```bash
CPI = EV / AC
```

- CPI > 1.0: el equipo está produciendo más valor del que consume en costo (eficiente).
- CPI = 1.0: el proyecto está exactamente en el presupuesto planificado.
- CPI < 1.0: el equipo está consumiendo más costo del que produce en valor (ineficiente).

### SPI — Schedule Performance Index (Índice de Desempeño de Cronograma)

```bash
SPI = EV / PV
```

- SPI > 1.0: el equipo está adelantado respecto al cronograma planificado.
- SPI = 1.0: el equipo está exactamente en el cronograma planificado.
- SPI < 1.0: el equipo está retrasado respecto al cronograma planificado.

## Interpretación de los índices

| Índice | Valor | Interpretación |
|---|---|---|
| CPI | > 1.0 | Bajo presupuesto — el proyecto está siendo ejecutado de forma eficiente |
| CPI | = 1.0 | Exactamente en presupuesto |
| CPI | < 1.0 | Sobre presupuesto — se consume más costo del que se genera en valor |
| SPI | > 1.0 | Adelantado — el equipo avanza más rápido de lo planificado |
| SPI | = 1.0 | Exactamente en cronograma |
| SPI | < 1.0 | Retrasado — el equipo avanza más lento de lo planificado |

## Umbral de alerta

Si el CPI cae por debajo de 0.90 al cierre de cualquier sprint, el PO debe incluir en el siguiente informe C1 al Sponsor:

- El valor actual del CPI y su comparación con el valor del sprint anterior.
- Análisis de causa raíz: ¿qué generó la desviación? ¿tareas subestimadas, impedimentos técnicos, cambios de alcance no anticipados?
- Propuesta de acción correctiva: ¿reestimación del backlog, ajuste de velocidad, activación del buffer de holgura?
- Proyección del EAC actualizado.

El mismo umbral aplica al SPI: si SPI < 0.90 durante dos sprints consecutivos, se activa el protocolo de escalamiento al Sponsor.

## BAC del proyecto

El BAC (Budget at Completion) es el presupuesto total planificado del proyecto: el costo total que se estima al inicio para ejecutar el 100% del alcance comprometido (121 SP, 133 tareas, 8 sprints). Los valores monetarios específicos del BAC se detallan en `costos.md`.

En términos de EVM, el BAC es el denominador de referencia para todos los cálculos de PV y EV.

## Fórmula de pronóstico EAC

El EAC (Estimate at Completion) es la proyección del costo total del proyecto al cierre, recalculada con el desempeño real observado:

```bash
EAC = BAC / CPI
```

Si el CPI actual es 0.95, la proyección indica que el proyecto costará aproximadamente el 5.3% más de lo presupuestado al cierre. El PO usa el EAC para informar al Sponsor si se anticipa una desviación presupuestaria significativa antes de que ocurra.

## Cuándo se reporta EVM

El EVM se reporta al cierre de cada sprint en el informe C1 al Sponsor (canal quincenal). El informe incluye:

- Tabla de SP planificados vs SP completados por sprint y acumulado.
- CPI y SPI calculados al cierre del sprint.
- EAC proyectado.
- Comparación con el sprint anterior: ¿el desempeño mejoró, empeoró o se mantuvo?
- Alerta si CPI o SPI caen por debajo del umbral de 0.90.

El reporte EVM final al cierre del sprint 8 (H7) es parte del informe de cierre que acompaña el Acta de Cierre (H8).

## Ejemplo de aplicación: Sprint 1 hipotético

Para ilustrar el uso práctico de las fórmulas EVM, se presenta un ejemplo con datos hipotéticos del sprint 1.

**Parámetros del sprint 1:**

```bash
SP planificados para sprint 1: 13
SP totales del proyecto:        121
BAC (presupuesto total):        ver costos-consolidados.md (se llama BAC)
Duración del sprint 1:          10 días hábiles
```

**Supuesto hipotético:** Al cierre del sprint 1, el equipo completó 11 SP (en lugar de los 13 planificados). El costo real incurrido fue el 11% del BAC (proporcional a los días trabajados y al costo del equipo).

**Cálculo de las 3 métricas base:**

```bash
PV = (13 / 121) * BAC = 0.1074 * BAC     (10.74% del presupuesto debería estar "ganado")
EV = (11 / 121) * BAC = 0.0909 * BAC     (solo el 9.09% fue efectivamente completado)
AC = 0.11 * BAC                          (el equipo gastó el 11% del presupuesto en el sprint)
```

**Cálculo de los 4 índices derivados:**

```bash
CV  = EV - AC  = 0.0909*BAC - 0.11*BAC  = -0.019*BAC   (CV < 0: sobre presupuesto en este sprint)
SV  = EV - PV  = 0.0909*BAC - 0.1074*BAC = -0.017*BAC  (SV < 0: retrasado respecto al plan)
CPI = EV / AC  = 0.0909 / 0.11 = 0.826                  (CPI < 1: consumiendo más de lo que produce)
SPI = EV / PV  = 0.0909 / 0.1074 = 0.847                (SPI < 1: avanzando más lento de lo planificado)
```

**Interpretación:**

En este ejemplo hipotético, el CPI de 0.826 está por debajo del umbral de alerta de 0.90. Si este CPI se mantuviera en el sprint 2, el PO debería incluir en el siguiente C1 al Sponsor un análisis de causa raíz (¿se sobreestimaron los SP? ¿hubo impedimentos no anticipados?) y una propuesta de acción correctiva.

El EAC hipotético sería:

```bash
EAC = BAC / CPI = BAC / 0.826 = 1.21 * BAC
```

Esto significa que, si el desempeño no mejora, el proyecto costaría un 21% más de lo presupuestado. Esta proyección es la que activa la conversación formal con el Sponsor antes de que la desviación sea irrecuperable.

**Nota:** Este es un ejemplo de calibración, no una proyección real. La velocidad del equipo se calibra durante los primeros 2–3 sprints y las estimaciones iniciales se ajustan antes de proyectar tendencias al cierre.
