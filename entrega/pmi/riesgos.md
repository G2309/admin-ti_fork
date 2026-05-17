# Área 8 PMI: Gestión de los Riesgos

## Descripción del área

La Gestión de los Riesgos es el área del PMBOK responsable de identificar, analizar, planificar respuestas y controlar los riesgos del proyecto. Un riesgo es un evento incierto que, si ocurre, tiene un efecto positivo o negativo sobre los objetivos del proyecto.

En este proyecto se identificaron 9 riesgos (R1–R9) durante la Fase 1. Cada riesgo tiene una categoría, una probabilidad estimada, una estrategia de respuesta y un responsable de monitoreo asignado.

## Las 4 estrategias de respuesta a riesgos negativos

### Evitar

Eliminar la amenaza cambiando el plan del proyecto para que el riesgo no pueda ocurrir. Se usa cuando el riesgo tiene probabilidad alta y el impacto es crítico para el proyecto. Implica modificar el alcance, el cronograma o el enfoque técnico para no exponerse al riesgo.

### Mitigar

Reducir la probabilidad de ocurrencia del riesgo o reducir su impacto si ocurre. Es la estrategia más frecuente en proyectos de software. No elimina el riesgo pero lo lleva a un nivel tolerable. Se implementa mediante acciones preventivas antes de que el riesgo se materialice.

### Transferir

Trasladar el impacto negativo del riesgo a un tercero, generalmente a través de contratos, SLAs o pólizas. El riesgo no desaparece, pero la responsabilidad de gestionar su impacto pasa a otra entidad. Se usa cuando la organización no tiene capacidad técnica o financiera para absorber el riesgo por sí misma.

### Aceptar

Reconocer que el riesgo existe y decidir conscientemente no tomar acción preventiva, ya sea porque la probabilidad o el impacto son demasiado bajos para justificar el costo de mitigación, o porque la mitigación no es viable. La aceptación puede ser activa (con un plan de contingencia si ocurre) o pasiva (sin acción planificada).

## Tabla de probabilidades canónica del curso

| Nivel | Valor numérico | Descripción |
|---|---|---|
| Baja | 0.20 | El riesgo tiene poca probabilidad de ocurrir dado el contexto actual del proyecto |
| Media | 0.40 | El riesgo tiene una probabilidad moderada y debe monitorearse activamente |
| Alta | 0.70 | El riesgo tiene alta probabilidad de ocurrir y requiere mitigación inmediata |

## Fórmulas de cuantificación de riesgos (conceptuales)

### Fórmula EMV

El Valor Monetario Esperado (Expected Monetary Value) cuantifica el costo esperado de un riesgo:

```bash
EMV = Probabilidad * Impacto Económico
```

### Fórmula de impacto

El impacto económico de un riesgo de cronograma se calcula como:

```bash
Impacto = burn rate mensual * tiempo adicional estimado (en meses)
```

Donde el burn rate mensual es el costo total del equipo por mes de ejecución. Los valores específicos se detallan en `costos.md`.

### Reserva de contingencia

La reserva de contingencia del proyecto es la suma de los EMVs de todos los riesgos identificados:

```bash
Reserva de contingencia = SUM(EMV) para R1 + R2 + ... + R9
```

El valor monetario específico de la reserva se detalla en `costos.md`.

## Matriz de riesgos R1–R9

| ID | Descripción | Categoría | Probabilidad | Estrategia | Acción de respuesta | Responsable |
|---|---|---|---|---|---|---|
| R1 | Cambios de requerimientos durante la ejecución que amplíen el alcance comprometido | Alcance | Media (0.40) | Mitigar | DoR firme en cada sprint; proceso formal de control de cambios (CR $\to$ CCB) que impide que cambios verbales modifiquen el backlog | PO Say |
| R2 | Retraso técnico del proveedor cloud que afecte el entorno de staging o producción | Técnico | Media (0.40) | Mitigar | Entorno de desarrollo paralelo (local/Docker) que permite continuar el sprint sin cloud; activación de SLA del proveedor ante demoras | Developer Cruz |
| R3 | Falta de comunicación efectiva con stakeholders que genere desinformación o decisiones inconsistentes | Comunicación | Baja (0.20) | Mitigar | Plan de comunicaciones C1–C8 con canales formales definidos; Slack interno para C3; actas de reunión para C1 y C2 | SM Cordero |
| R4 | Falta de involucramiento del cliente (Admisiones / Sponsor) en las validaciones de hitos | Alcance | Baja (0.20) | Mitigar | Calendario fijo de validaciones quincenales definido desde la Fase 1; hitos H4, H5, H6 tienen fechas confirmadas con el cliente antes del inicio de la ejecución | PO Say |
| R5 | Rotación de personal — salida de un developer durante la Fase 2 | Personal | Baja (0.20) | Mitigar | Documentación técnica continua en el repositorio; pair programming (XP) garantiza que al menos dos personas conocen cada componente | SM Cordero |
| R6 | Falla grave del proveedor cloud que afecte la disponibilidad del sistema en producción | Proveedor | Baja (0.20) | Transferir | SLA con penalidades formales contratadas con S10; la responsabilidad del impacto se transfiere contractualmente al proveedor | PO Say |
| R7 | Baja adopción por parte de los usuarios (aspirantes de diversificado) al usar el sistema | Cliente / Usuario | Media (0.40) | Mitigar | Pruebas de usabilidad en sprint 7 (H6) con usuarios reales; iteraciones de UX en sprint 8 basadas en los resultados | PO Say |
| R8 | Exposición de datos personales de aspirantes por vulnerabilidad técnica | Técnico / Legal | Baja (0.20) | Mitigar | Cifrado de datos en tránsito y en reposo; revisión de seguridad por Developer Chen como criterio del DoD para EP01, EP02 y EP06 | Developer Chen |
| R9 | Cambios en el pensum UVG 2026 posteriores a la validación del catálogo en H4 | Alcance | Baja (0.20) | Aceptar | El catálogo está diseñado como estructura actualizable; cambios post-H4 se registran como CR menor y se incorporan en el sprint disponible más próximo | PO Say |

## Tabla de monitoreo por sprint

| Sprint | Riesgos a monitorear | Verificación | Responsable |
|---|---|---|---|
| Sprint 1 | R2 (entorno cloud operativo) | Verificar disponibilidad del entorno antes del inicio | Developer Cruz |
| Sprint 2 | R3 (comunicación con Catedráticos C6 enviada) | Confirmar envío de C6 a catedráticos entre sprints 2–3 | PO Say |
| Sprint 3 | R1 (cambios post-validación H4), R9 (cambios pensum) | Acta de validación de S3 Admisiones firmada en H4 | PO Say |
| Sprint 4 | R1, R2 | Revisión de backlog EP03 sin cambios de alcance no autorizados | PO Say + SM |
| Sprint 5 | R2 (cloud funcional para EP04), R7 (diseño de prueba usabilidad) | Motor desplegado en staging; plan de prueba de usabilidad preparado | Developer Cruz + PO Say |
| Sprint 6 | R5 (disponibilidad equipo), R8 (revisión seguridad EP05) | Verificar ausencias o cambios de disponibilidad; checklist seguridad DoD | SM + Developer Chen |
| Sprint 7 | R1 (solicitudes EP06 adicionales), R7 | Revisar que EP06 en backlog no tiene adiciones no autorizadas | PO Say + SM |
| Sprint 7 | R7 (resultados prueba usabilidad H6), R2 | Ejecutar pruebas H6; registrar hallazgos; evaluar ajustes UX para sprint 8 | PO Say |
| Sprint 8 | Todos los riesgos abiertos | Revisión final de riesgos para Acta de Cierre | PO Say |

## Reglas de activación de la reserva de contingencia

### Regla 1 — Materialización de riesgo con impacto en cronograma

Si un riesgo se materializa y el impacto estimado supera el 10% del tiempo restante del sprint en curso, el PO autoriza el uso de la reserva de contingencia para contratar horas adicionales, ajustar el alcance del sprint o activar el buffer de holgura antes de lo planificado.

### Regla 2 — CPI < 0.90 sostenido

Si el CPI calculado al cierre de un sprint cae por debajo de 0.90 y se mantiene en ese nivel en el sprint siguiente, el PO junto con el SM evalúan si se activa la reserva de contingencia o si se escala al Sponsor para renegociar el alcance del sprint siguiente.

### Regla 3 — Aprobación del Sponsor para reserva mayor

El uso de la reserva de contingencia para montos que superen el umbral del CCB básico requiere aprobación del CCB ampliado (PO + SM + Sponsor). El PO no puede usar la reserva de contingencia completa unilateralmente; necesita la autorización del Sponsor para desviaciones significativas.

## Anti-patrones evitados

- Identificar riesgos solo al inicio del proyecto y no monitorearlos durante la ejecución: este proyecto tiene un calendario de monitoreo por sprint.
- Calcular el EMV sin usar la tabla de probabilidades canónica del curso: todas las probabilidades usan los valores 0.20, 0.40 y 0.70.
- Asignar todos los riesgos al mismo responsable: cada riesgo tiene un responsable específico con justificación técnica.
- Aceptar todos los riesgos sin estrategia activa: la aceptación solo aplica a R9, que tiene impacto bajo y una arquitectura de catálogo actualizable que mitiga naturalmente el riesgo.

## Principio rector

"El riesgo no se elimina: se calcula, se monitorea y se gestiona."

Ninguno de los 9 riesgos identificados (R1–R9) tiene probabilidad cero. La gestión de riesgos no pretende construir un proyecto sin incertidumbre; pretende construir un equipo que sepa qué hacer cuando la incertidumbre se convierte en evento real.

## Mapa de calor de riesgos

El mapa de calor clasifica cada riesgo según su nivel de severidad combinando probabilidad e impacto relativo. El objetivo es visualizar qué riesgos requieren atención prioritaria.

| Probabilidad \ Impacto | Bajo | Medio | Alto |
|---|---|---|---|
| Alta (0.70) | — | — | — |
| Media (0.40) | — | R1, R2, R7 | — |
| Baja (0.20) | R9 | R3, R4, R5, R8 | R6 |

**Notas de clasificación:**

- R1 (Cambios requerimientos, media/medio): Probabilidad media porque el alcance está definido, pero los stakeholders pueden solicitar ajustes tras validaciones. Impacto medio porque el proceso de CR y el DoR contienen el crecimiento.
- R2 (Retraso cloud, media/medio): Probabilidad media dado que los servicios cloud tienen histórico de incidencias. Impacto medio porque el entorno local/Docker de contingencia atenúa el impacto.
- R6 (Falla proveedor cloud, baja/alto): Baja probabilidad por el SLA contratado, pero impacto alto porque afecta la disponibilidad completa del sistema en producción.
- R7 (Baja adopción, media/medio): Probabilidad media porque el comportamiento de los aspirantes en las pruebas H6 es incierto. Impacto medio porque el sprint 8 tiene capacidad para ajustes de UX.
- R9 (Cambios pensum, baja/bajo): Baja probabilidad y bajo impacto porque la arquitectura del catálogo está diseñada como estructura actualizable. Es el único riesgo con estrategia de Aceptar pasivo.

## Referencia a la cuantificación EMV

El Valor Monetario Esperado (EMV) de cada riesgo se calcula según la fórmula:

$$
EMV = Probabilidad \times Impacto\ econ\acute{o}mico\ estimado
$$

donde el impacto económico se expresa en múltiplos del burn rate mensual del equipo. Los valores monetarios específicos (burn rate, EMV por riesgo, reserva de contingencia total) se documentan en `costos-consolidados.md`.

La reserva de contingencia del proyecto es la suma de los EMVs de todos los riesgos identificados:

$$
Reserva\ de\ contingencia = \sum_{i=1}^{9} EMV_i
$$

El nivel de EMV relativo de cada riesgo (sin montos específicos) es:

| ID | Probabilidad | Impacto relativo | Nivel EMV relativo |
|---|---|---|---|
| R1 | Media (0.40) | 1 mes de burn rate | Medio |
| R2 | Media (0.40) | 2 semanas de sprint | Medio-bajo |
| R3 | Baja (0.20) | 1 semana de coordinación | Bajo |
| R4 | Baja (0.20) | 1 semana de retraso en hito | Bajo |
| R5 | Baja (0.20) | 1 mes de ramp-up nuevo developer | Bajo |
| R6 | Baja (0.20) | 1–2 semanas de indisponibilidad | Medio (alto en impacto bruto, bajo en EMV por probabilidad baja) |
| R7 | Media (0.40) | 1 sprint de ajustes UX | Medio |
| R8 | Baja (0.20) | Riesgo reputacional + 1 sprint de corrección | Bajo-alto (no cuantificable completamente) |
| R9 | Baja (0.20) | 2–3 días de actualización del catálogo | Mínimo |
