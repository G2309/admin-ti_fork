# Costos consolidados del proyecto

Valores del modelo financiero para las cuatro metodologías evaluadas. Los montos se expresan en quetzales (Q). Las fórmulas que producen estos valores se encuentran en [costos-formulas.md](costos-formulas.md).

Fuente: `knowledge/proyecto/costos/UVG-Admon-TI-Costos-Unificado.xlsx` — hoja Inputs, hojas de metodología, hoja Riesgos y hoja Costos adicionales.

## Equipo del proyecto

### Scrum / Kanban / Scrumban (5 personas)

| Rol | Nombre | FTE cliente | FTE interno | Salario mensual (Q) | Costo mensual cliente (Q) | Costo mensual interno (Q) |
|---|---|---:|---:|---:|---:|---:|
| Product Owner | Josué Emanuel Say Garcia | 1.0 | 0.7 | 15,000 | 15,000 | 10,500 |
| Scrum Master / Facilitador | Mathew Alexander Cordero Aquino | 1.0 | 1.0 | 13,500 | 13,500 | 13,500 |
| Developer Senior | Gustavo Adolfo Cruz Bardales | 1.0 | 1.0 | 12,904 | 12,904 | 12,904 |
| Developer Senior | Javier Andres Chen Gonzalez | 1.0 | 1.0 | 12,904 | 12,904 | 12,904 |
| Developer Senior | Pedro Pablo Guzmán Mayen | 1.0 | 1.0 | 12,904 | 12,904 | 12,904 |
| **Total** | | | | | **67,212** | **62,712** |

El FTE del Product Owner en vista interna es 0.7 (dedicación real parcial al proyecto). La vista cliente factura a 1.0 para simplificar el modelo de precio.

### XP + Scrumban (6 personas)

| Rol | FTE cliente | FTE interno | Salario mensual (Q) | Costo mensual cliente (Q) | Costo mensual interno (Q) |
|---|---:|---:|---:|---:|---:|
| Coach (PO/XP) | 1.0 | 0.7 | 15,000 | 15,000 | 10,500 |
| Tracker / Tester (SM/XP) | 1.0 | 1.0 | 13,500 | 13,500 | 13,500 |
| Developer Senior | 1.0 | 1.0 | 12,904 | 12,904 | 12,904 |
| Developer Senior | 1.0 | 1.0 | 12,904 | 12,904 | 12,904 |
| Developer Junior | 1.0 | 1.0 | 9,000 | 9,000 | 9,000 |
| Developer Junior | 1.0 | 1.0 | 9,000 | 9,000 | 9,000 |
| **Total** | | | | **72,308** | **67,808** |

XP + Scrumban agrega dos developers junior y renombra los roles de liderazgo (Coach, Tracker/Tester) para alinearlos con la terminología XP.

## Costos adicionales

### 6 meses (Scrum, Scrumban, XP + Scrumban)

| Insumo | Monto (Q) |
|---|---:|
| Microsoft Office Business Standard (6 meses, todos) | 4,500 |
| Equipo de cómputo (3 dev + 2 ejecutivo, compra única) | 51,000 |
| Claude Team Pro (6 meses, equipo) | 4,500 |
| Internet residencial Tigo (6 meses, todos) | 13,500 |
| Energía eléctrica EEGSA (6 meses, todos) | 30,000 |
| Google Colab Pro (6 meses) | 1,170 |
| Infraestructura cloud (6 meses) | 1,200 |
| **Total 6 meses** | **105,870** |

### 12 meses (Kanban)

| Insumo | Monto (Q) |
|---|---:|
| Microsoft Office Business Standard (12 meses, todos) | 9,000 |
| Equipo de cómputo (3 dev + 2 ejecutivo, compra única) | 51,000 |
| Claude Team Pro (12 meses, equipo) | 9,000 |
| Internet residencial Tigo (12 meses, todos) | 27,000 |
| Energía eléctrica EEGSA (12 meses, todos) | 60,000 |
| Google Colab Pro (12 meses) | 2,340 |
| Infraestructura cloud (12 meses) | 2,400 |
| **Total 12 meses** | **160,740** |

## Riesgos y reserva de contingencia

### Escala de probabilidades

| Categoría | Valor |
|---|---:|
| Baja | 0.20 |
| Media | 0.40 |
| Alta | 0.70 |

### Matriz de riesgos R1–R9

| ID | Riesgo | Tipo | Prob. | Impacto (meses) | Impacto (Q) | EMV (Q) | Mitigación |
|---|---|---|---:|---:|---:|---:|---|
| R1 | Cambios de requerimientos frecuentes por parte del cliente | Alcance | 0.40 | 1.0 | 67,212.00 | 26,884.80 | DoR firme y control de cambios documentado por el PO |
| R2 | Retraso técnico por dependencias de infraestructura cloud | Tiempo | 0.40 | 0.5 | 33,606.00 | 13,442.40 | Entorno de pruebas paralelo desde Sprint 1; proveedor cloud con SLA definido |
| R3 | Falta de comunicación entre equipo y stakeholders | Comunicación | 0.20 | 0.5 | 33,606.00 | 6,721.20 | Canales formales (Slack + actas de Sprint Review) |
| R4 | Falta de involucramiento por parte del cliente | Alcance | 0.20 | 1.0 | 67,212.00 | 13,442.40 | Calendario fijo de validaciones quincenales con UVG |
| R5 | Rotación o indisponibilidad temporal de un miembro del equipo | Personal | 0.20 | 0.5 | 33,606.00 | 6,721.20 | Documentación técnica continua y pair programming |
| R6 | Falla o indisponibilidad del proveedor cloud | Proveedor | 0.20 | 0.25 | 16,803.00 | 3,360.60 | SLA contractual con penalidades; plan de contingencia en segundo proveedor |
| R7 | Baja adopción del sistema por estudiantes de diversificado | Cliente / Usuario | 0.40 | 1.0 | 67,212.00 | 26,884.80 | Pruebas de usabilidad Sprint 8; comunicación con Dirección de Admisiones |
| R8 | Exposición o fuga de datos personales de estudiantes | Técnico / Legal | 0.20 | 1.5 | 100,818.00 | 20,163.60 | Cifrado en tránsito y reposo; revisión de seguridad por sprint; NDA |
| R9 | Modificación del pensum UVG 2026 durante el desarrollo | Alcance | 0.20 | 0.5 | 33,606.00 | 6,721.20 | Catálogo de carreras actualizable sin rediseño del motor de recomendación |
| | **Reserva de contingencia ($\Sigma$ EMV)** | | | | | **124,342.20** | |

El impacto económico de cada riesgo se calcula como: `Burn rate mensual (Q 67,212) * Impacto en meses`.

## Presupuesto por metodología

### Scrum

| Concepto | Vista cliente (Q) | Vista interna (Q) |
|---|---:|---:|
| Burn rate mensual | 67,212.00 | 62,712.00 |
| Sprints necesarios (sin buffer) | 7 | 7 |
| Sprints con buffer (25%) | 9 | 9 |
| Costo por sprint | 33,606.00 | 31,356.00 |
| Costo equipo sin buffer (7 sprints) | 235,242.00 | 219,492.00 |
| Costo equipo con buffer (9 sprints) | 302,454.00 | 282,204.00 |
| (+) Costos adicionales (6 meses) | 105,870.00 | 105,870.00 |
| (+) Reserva de riesgos ($\Sigma$ EMV) | 124,342.20 | 124,342.20 |
| **(=) Inversión total** | **532,666.20** | **512,416.20** |
| Margen de ganancia | 35% | 35% |
| Precio cliente = Inversión / 0.65 | 819,486.46 | — |
| **Precio cliente redondeado** | **820,000.00** | — |
| Beneficio neto | 286,820.26 | — |
| **ROI** | **53.85%** | — |

### Kanban

| Concepto | Vista cliente (Q) | Vista interna (Q) |
|---|---:|---:|
| Burn rate mensual | 67,212.00 | 62,712.00 |
| Ejecutores activos | 4 | 4 |
| Cycle Time promedio (días/tarea) | 5.13 | 5.13 |
| Throughput diario (tareas/día) | 0.78 | 0.78 |
| Throughput mensual (tareas/mes) | 15.60 | 15.60 |
| Días operativos sin buffer | 171 | 171 |
| Meses sin buffer | 9 | 9 |
| Meses con buffer (25%) | 11 | 11 |
| Costo equipo sin buffer (9 meses) | 604,908.00 | 564,408.00 |
| Costo equipo con buffer (11 meses) | 739,332.00 | 689,832.00 |
| (+) Costos adicionales (12 meses) | 160,740.00 | 160,740.00 |
| (+) Reserva de riesgos ($\Sigma$ EMV) | 124,342.20 | 124,342.20 |
| **(=) Inversión total** | **1,024,414.20** | **974,914.20** |
| Margen de ganancia | 35% | 35% |
| **Precio cliente redondeado** | **1,577,000.00** | — |
| Beneficio neto | 551,607.65 | — |
| **ROI** | **53.85%** | — |

### Scrumban

| Concepto | Vista cliente (Q) | Vista interna (Q) |
|---|---:|---:|
| Burn rate mensual | 67,212.00 | 62,712.00 |
| Sprints necesarios (sin buffer) | 7 | 7 |
| Sprints con buffer (25%) | 9 | 9 |
| Costo por sprint | 33,606.00 | 31,356.00 |
| Costo por sprint BID (80%) | 26,884.80 | 25,084.80 |
| Costo por sprint ROM (20%) | 6,721.20 | 6,271.20 |
| Costo equipo con buffer (9 sprints) | 302,454.00 | 282,204.00 |
| (+) Costos adicionales (6 meses) | 105,870.00 | 105,870.00 |
| (+) Reserva de riesgos ($\Sigma$ EMV) | 124,342.20 | 124,342.20 |
| **(=) Inversión total** | **532,666.20** | **512,416.20** |
| Margen de ganancia | 35% | 35% |
| **Precio cliente redondeado** | **820,000.00** | — |
| Beneficio neto | 286,820.26 | — |
| **ROI** | **53.85%** | — |

### XP + Scrumban

| Concepto | Vista cliente (Q) | Vista interna (Q) |
|---|---:|---:|
| Burn rate mensual (6 personas) | 72,308.00 | 67,808.00 |
| Sprints necesarios (sin buffer) | 7 | 7 |
| Sprints con buffer (10%) | 8 | 8 |
| Costo por sprint | 36,154.00 | 33,904.00 |
| Costo por sprint BID (80%) | 28,923.20 | 27,123.20 |
| Costo por sprint ROM (20%) | 7,230.80 | 6,780.80 |
| Costo equipo sin buffer (7 sprints) | 253,078.00 | 237,328.00 |
| Costo equipo con buffer (8 sprints) | 289,232.00 | 271,232.00 |
| (+) Costos adicionales (6 meses) | 105,870.00 | 105,870.00 |
| (+) Reserva de riesgos ($\Sigma$ EMV) | 124,342.20 | 124,342.20 |
| **(=) Inversión total** | **519,444.20** | **501,444.20** |
| Margen de ganancia | 35% | 35% |
| **Precio cliente redondeado** | **800,000.00** | — |
| Beneficio neto | 279,700.72 | — |
| **ROI** | **53.85%** | — |

La holgura de 10% en XP + Scrumban (vs 25% en las demás metodologías) se justifica porque las prácticas XP (TDD, CI, Pair Programming) reducen la incertidumbre de ejecución. Un sprint con CI activo y cobertura de pruebas detecta defectos en horas, no en semanas, haciendo el ritmo de entrega más predecible.

## Comparativo de las cuatro metodologías

| Metodología | Duración | Personas | Inversión (Q) | Precio cliente (Q) | ROI |
|---|---|---:|---:|---:|---:|
| Scrum | 9 sprints / ~4.5 meses | 5 | 532,666.20 | 820,000 | 53.85% |
| Scrumban | 9 sprints / ~4.5 meses | 5 | 532,666.20 | 820,000 | 53.85% |
| XP + Scrumban | 8 sprints / ~4 meses | 6 | 519,444.20 | 800,000 | 53.85% |
| Kanban | 11 meses | 5 | 1,024,414.20 | 1,577,000 | 53.85% |

Kanban es la metodología de mayor costo por su duración de 11 meses procesando 133 tareas técnicas con un throughput de 0.78 tareas/día. Scrum y Scrumban tienen inversión idéntica porque comparten la misma estructura de sprints, equipo y costos adicionales; la diferencia entre ambas es operativa (gestión de flujo ROM), no financiera.

## TMAR y validación de viabilidad

| Componente TMAR | Valor |
|---|---:|
| Inflación anual | 5% |
| Prima por riesgo del proyecto | 10% |
| Rendimiento mínimo esperado | 20% |
| **TMAR** | **35%** |

Validación: **ROI (53.85%) > TMAR (35%)** para las cuatro metodologías $\to$ proyecto financieramente viable.

## ROA (empresa proveedora)

| Activo | Valor (Q) |
|---|---:|
| Laptops | 120,000 |
| Servidores | 150,000 |
| Licencias | 30,000 |
| Oficina / infraestructura | 100,000 |
| Equipo de testing | 20,000 |
| Mobiliario / redes | 80,000 |
| **Total activos** | **500,000** |

```bash
ROA = Utilidad neta / Total activos = Utilidad neta / Q 500,000
```

El ROA se calcula sobre la empresa proveedora, no por proyecto. Un proyecto con margen del 35% contribuye positivamente al ROA corporativo.

## Esquema de pagos 30/40/30

| Metodología | Precio cliente (Q) | Cuota inicio 30% (Q) | Cuota medio 40% (Q) | Cuota cierre 30% (Q) |
|---|---:|---:|---:|---:|
| Scrum | 820,000 | 246,000 | 328,000 | 246,000 |
| Scrumban | 820,000 | 246,000 | 328,000 | 246,000 |
| XP + Scrumban | 800,000 | 240,000 | 320,000 | 240,000 |
| Kanban | 1,577,000 | 473,100 | 630,800 | 473,100 |

- Cuota inicio: firma del contrato y arranque del Sprint 1 (1 ene 2027)
- Cuota medio: entrega validada del motor de recomendación (cierre Sprint 4, ~25 feb 2027)
- Cuota cierre: entrega funcional del MVP y firma del Acta de Cierre (Sprint 8, 22 abr 2027)
