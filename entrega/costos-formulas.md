# Fórmulas del modelo financiero

Referencia de todas las fórmulas utilizadas en el modelo financiero del proyecto. Los valores calculados con estas fórmulas se encuentran en [costos-consolidados.md](costos-consolidados.md).

## Principio rector

"Un proyecto jamás debe analizarse o aprobarse basándose únicamente en el presupuesto base. La contingencia es parte del costo real."

## Fórmulas de costo del equipo

### Burn rate mensual

```bash
Burn rate mensual = SUM(Salario mensual * FTE facturado) por persona
```

No se aplica factor de carga organizacional (alpha). El modelo del curso no incluye alpha; los costos indirectos (licencias, hardware, infraestructura, energía) se registran explícitamente en la hoja de Costos adicionales.

- Vista cliente: FTE del PO = 1.0 (facturado al cliente como tiempo completo)
- Vista interna: FTE del PO = 0.7 (dedicación real al proyecto)

### Costo por sprint

```bash
Costo por sprint = Burn rate mensual * (días por sprint / días laborales por mes)
                 = Burn rate mensual * (10 / 20)
                 = Burn rate mensual / 2
```

### Costo equipo sin holgura

```bash
Costo equipo sin holgura = Costo por sprint * sprints necesarios
```

Los sprints necesarios se calculan como:

```bash
Sprints necesarios = CEILING(Story Points totales / Velocidad promedio)
                   = CEILING(121 / 20) = 7 sprints
```

### Costo equipo con holgura (buffer)

```bash
Costo equipo con holgura = Costo por sprint * sprints con buffer
```

Donde:

```bash
Sprints con buffer = CEILING(Sprints necesarios * (1 + holgura))
```

- Holgura estándar (Scrum / Kanban / Scrumban): 0.25 $\to$ sprints con buffer = CEILING(7 $\times$ 1.25) = 9
- Holgura XP + Scrumban: 0.10 $\to$ sprints con buffer = CEILING(7 $\times$ 1.10) = 8

La holgura XP + Scrumban es menor porque las prácticas técnicas de XP (TDD, CI, Pair Programming) reducen la incertidumbre de ejecución al detectar defectos temprano, lo que hace predecible el ritmo de entrega sprint a sprint.

## Fórmulas de costos adicionales

Los costos adicionales cubren los insumos e infraestructura necesarios para el proyecto. Se suman directamente a la inversión; no son un porcentaje del equipo.

```bash
Costos adicionales 6m = SUM(insumos del período de 6 meses)
Costos adicionales 12m = SUM(insumos del período de 12 meses)
```

Se aplican:

- 6 meses: Scrum, Scrumban y XP + Scrumban (duración $\leq$ 6 meses)
- 12 meses: Kanban (duración 11 meses)

## Fórmulas de riesgos y reserva de contingencia

### EMV (Expected Monetary Value)

```bash
EMV = Probabilidad * Impacto económico (Q)
```

### Impacto económico de un riesgo

```bash
Impacto económico = Burn rate mensual * Tiempo adicional estimado (meses)
```

El burn rate mensual utilizado es el de vista cliente (sin holgura, solo el costo del equipo por mes).

### Reserva de contingencia

```bash
Reserva = SUM(EMV de todos los riesgos identificados R1-R9)
```

La reserva no es un porcentaje arbitrario del presupuesto; es la suma exacta de los valores esperados monetarios de cada riesgo identificado. Refleja la exposición financiera real ante eventos probables.

### Escala de probabilidades (tabla canónica del curso)

| Categoría | Valor numérico |
|---|---:|
| Baja | 0.20 |
| Media | 0.40 |
| Alta | 0.70 |

## Fórmulas de inversión y precio

### Inversión total (presupuesto con riesgos)

```bash
Inversión = Costo equipo (con buffer) + Costos adicionales + Reserva SUM_EMV
```

Esta es la cantidad que el proveedor necesita para ejecutar el proyecto, cubrir sus insumos y estar protegido ante los riesgos identificados.

### Precio cliente

```bash
Precio cliente = Inversión / (1 − margen)
```

Con margen = 0.35:

```bash
Precio cliente = Inversión / 0.65
```

Esta fórmula garantiza que el 35% del precio final sea ganancia neta. La fórmula `Inversión * (1 + margen)` produce un margen efectivo menor al declarado y no debe usarse.

### Precio cliente redondeado

```bash
Precio redondeado = ROUNDUP(Precio cliente, −3)
```

El precio se redondea al millar superior más cercano. Esto facilita la presentación al cliente y absorbe pequeñas diferencias de redondeo en la fórmula.

### Beneficio neto

```bash
Beneficio neto = Precio redondeado − Inversión
```

### ROI (Return on Investment)

```bash
ROI = Beneficio neto / Inversión * 100
```

El ROI se calcula sobre la inversión total (equipo + adicionales + riesgos), no solo sobre el costo del equipo.

### Margen bruto porcentual (verificación del invariante)

```bash
Margen bruto % = Beneficio neto / Precio redondeado
```

Este valor debe ser igual al margen de entrada (35%). Si no coincide, hay un error en la fórmula de precio.

## TMAR (Tasa Mínima Aceptable de Rendimiento)

```bash
TMAR = Inflación anual + Prima por riesgo + Rendimiento mínimo esperado
TMAR = 5% + 10% + 20% = 35%
```

| Componente | Valor | Justificación |
|---|---:|---|
| Inflación anual | 5% | Depreciación del dinero en Guatemala |
| Prima por riesgo | 10% | Proyecto de complejidad técnica intermedia |
| Rendimiento mínimo | 20% | Meta de la empresa proveedora |
| **TMAR** | **35%** | |

El margen de ganancia del 35% fue diseñado para igualar la TMAR, garantizando viabilidad financiera mínima.

## Validación de viabilidad financiera

```bash
Si ROI > TMAR -> proyecto financieramente viable
```

Dado que el margen de entrada es igual a la TMAR (35%), el ROI calculado con la fórmula `Inversión / (1 - 0.35)` siempre supera la TMAR.

## ROA (Return on Assets)

```bash
ROA = Utilidad neta / Total de activos de la empresa proveedora
```

El ROA es una métrica corporativa que mide la eficiencia con la que la empresa proveedora utiliza sus activos para generar utilidades. No se calcula por proyecto individual sino sobre la empresa como un todo.

## Fórmulas específicas por metodología

### Scrum y Scrumban

```bash
Sprints necesarios = CEILING(121 SP / 20 SP por sprint) = 7
Sprints con buffer = CEILING(7 * 1.25) = 9
Duración días = 9 * 10 días por sprint = 90 días
Costo por sprint = Burn rate mensual / 2
Costo equipo (con buffer) = Costo por sprint * 9
```

### Scrumban — desglose BID/ROM

```bash
Costo por sprint BID = Costo por sprint * PBID    (PBID = 0.80)
Costo por sprint ROM = Costo por sprint * PROM    (PROM = 0.20)
```

La distribución 80/20 refleja que el proyecto se construye desde cero (BID dominante) sin sistema previo en producción que genere soporte activo (ROM reducido).

### Kanban

```bash
Cycle Time promedio = SUM(días por tarea) / número de tareas
Throughput diario = Ejecutores activos / Cycle Time promedio
Días operativos = Días totales de tareas / (Throughput diario * Ejecutores)
    o equivalente: Días totales de tareas / Throughput diario / Ejecutores
Meses sin buffer = Días operativos / 20 días laborales
Meses con buffer = CEILING(Meses sin buffer * (1 + 0.25))
```

Ley de Little:

```bash
Lead Time = WIP en progreso / Throughput
```

### XP + Scrumban

- 6 personas en el equipo (agrega Coach, Tracker/Tester, 2 Dev Junior)
- Holgura reducida a 0.10 por menor incertidumbre técnica con prácticas XP

```bash
Sprints con buffer = CEILING(7 * 1.10) = 8
```

## Esquema de pagos 30/40/30

```bash
Cuota inicio (30%) = Precio redondeado * 0.30    -> hito: firma del contrato y Sprint 1
Cuota medio (40%)  = Precio redondeado * 0.40    -> hito: validación catálogo (Sprint 4, XP+Scrumban) o motor recomendación (Sprint 5, Scrum/Scrumban)
Cuota cierre (30%) = Precio redondeado * 0.30    -> hito: MVP funcional y acta de cierre (Sprint 8, XP+Scrumban) o Sprint 9 (Scrum/Scrumban)
```

Los montos se calculan sobre el precio redondeado total (inversión + margen), no sobre el costo base.

## Fuente

Fórmulas derivadas de: `knowledge/proyecto/costos/UVG-Admon-TI-Costos-Unificado.xlsx` (hoja Inputs y hojas de metodología). El script generador del Excel se encuentra en `knowledge/proyecto/costos/scripts/build_unified_excel.py`.
