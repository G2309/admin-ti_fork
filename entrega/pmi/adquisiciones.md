# Área 9 PMI: Gestión de las Adquisiciones

## Descripción del área

La Gestión de las Adquisiciones es el área del PMBOK responsable de planificar, ejecutar y controlar la compra o adquisición de productos, servicios o resultados externos al equipo del proyecto. En proyectos de software, la adquisición más frecuente es la de infraestructura tecnológica que el equipo no puede construir internamente en el tiempo disponible.

En este proyecto existe una única adquisición externa: la infraestructura cloud que soporta el despliegue y operación del sistema de recomendación.

## La única adquisición externa: infraestructura cloud

El equipo del proyecto (5 personas) no tiene capacidad operativa para administrar infraestructura física propia. La operación del sistema requiere capacidad de cómputo, almacenamiento, red y disponibilidad gestionada que se adquiere a través de un proveedor externo (Stakeholder S10 — Proveedor infraestructura cloud, Cuadrante IV de la Matriz Poder-Interés).

Esta adquisición es la única dependencia externa del proyecto en términos de infraestructura. El resto de los recursos (equipo humano, herramientas de desarrollo, licencias de software de desarrollo) son provistos internamente.

## SOW (Statement of Work) — Enunciado del Trabajo Adquirido

El SOW define qué se adquiere, para qué se adquiere y en qué período:

### Qué se adquiere

- Servicio de infraestructura cloud (IaaS/PaaS) que incluye: capacidad de cómputo para el servidor de aplicaciones, base de datos gestionada, almacenamiento de archivos estáticos, CDN básico para entrega de activos y entorno de staging separado del entorno de producción.

### Para qué se adquiere

- Desplegar y operar el Sistema de Recomendación de Carrera Universitaria durante la Fase 2 de ejecución (sprints 1–8) y durante el período de validación con el Sponsor previo al Acta de Cierre.
- Garantizar que los aspirantes de diversificado puedan acceder al sistema en las pruebas de usabilidad del sprint 7 (H6) y en la entrega del MVP (H7).
- Proveer un entorno de staging operativo desde el sprint 1 para que los developers puedan desplegar e integrar incrementos continuamente.

### Cuándo se adquiere

- La adquisición se contrata durante la Fase 1 (planificación, 2026), de manera que el entorno esté disponible antes del inicio del sprint 1 (H3, 1 ene 2027).
- El período de servicio contratado cubre como mínimo desde el 1 de enero de 2027 hasta el 30 de abril de 2027, con opción de extensión si el Acta de Cierre (H8) requiere más tiempo.

## SLA como instrumento de gestión de adquisiciones

El contrato con el proveedor cloud (S10) incluye un SLA (Service Level Agreement) formal. El SLA es el instrumento técnico-legal que convierte la adquisición en una herramienta de gestión del riesgo R6.

### Los 5 componentes del SLA para este proyecto

| Componente | Descripción |
|---|---|
| 1. Disponibilidad garantizada | El proveedor garantiza un porcentaje de uptime del servicio, expresado típicamente como 99.9% mensual. Cualquier tiempo de inactividad por debajo del nivel acordado activa el mecanismo de compensación. |
| 2. Tiempo de recuperación ante incidencia (RTO) | El tiempo máximo que puede tardar el servicio en recuperarse después de una caída. El SLA define el RTO comprometido y el procedimiento de notificación de incidencias. |
| 3. Tiempo de respuesta del soporte técnico | El tiempo máximo entre la apertura de un ticket de soporte y la primera respuesta técnica del proveedor. Se definen niveles de prioridad (crítico, alto, medio, bajo) con tiempos distintos. |
| 4. Escalamiento de incidencias | El procedimiento para escalar incidencias no resueltas dentro del tiempo comprometido. El canal de comunicación es C7 (Developer Chen) y el escalamiento sigue una cadena proveedor $\to$ Developer Chen $\to$ PO Say. |
| 5. Penalidades por incumplimiento | Las condiciones bajo las cuales el proveedor compensa económicamente al cliente por incumplimiento del SLA. Las penalidades suelen expresarse como créditos de servicio proporcionales al tiempo de indisponibilidad. |

## Penalidades por incumplimiento

Las penalidades por incumplimiento del SLA son el mecanismo de transferencia del riesgo R6. Si el proveedor no cumple el nivel de disponibilidad acordado, la responsabilidad económica del impacto se traslada al proveedor en forma de créditos o compensaciones.

El proceso de aplicación de penalidades es:

1. Developer Chen abre un ticket formal de soporte (C7) documentando el tiempo de indisponibilidad.
2. El proveedor confirma la incidencia y el tiempo afectado.
3. El PO evalúa si el impacto supera el umbral del SLA que activa penalidades.
4. Si aplica, el PO solicita formalmente el crédito o compensación según los términos del contrato.
5. El resultado se registra en el informe C1 al Sponsor como parte del monitoreo de R6.

## Referencia al riesgo R6 y su transferencia contractual

El riesgo R6 ("Falla grave del proveedor cloud") tiene estrategia de respuesta "Transferir". Esta transferencia se instrumenta precisamente a través del SLA:

- Sin SLA formal, el impacto de una falla del proveedor recae sobre el proyecto (el equipo pierde tiempo de sprint, el cronograma se desliza, el Sponsor no recibe el hito en la fecha comprometida).
- Con SLA formal, el proveedor asume contractualmente la responsabilidad del impacto: compensa económicamente, tiene obligación de resolución en tiempo definido y puede ser reemplazado si el incumplimiento persiste.

El SLA convierte el riesgo R6 de un riesgo interno del proyecto en un riesgo gestionado contractualmente por un tercero. Esto es la definición operativa de "transferir" un riesgo.

La contratación del SLA antes del inicio del sprint 1 (durante la Fase 1 de planificación) es un prerrequisito para declarar que R6 tiene estrategia "Transferir". Si no existe SLA firmado al inicio de la ejecución, R6 debe reclasificarse como "Aceptar activo" o "Mitigar", lo que requiere acciones adicionales de contingencia.

## Criterios de selección del proveedor

La selección del proveedor cloud (S10) se realiza durante la Fase 1 (2026), antes del inicio del sprint 1. Los criterios de selección son:

| Criterio | Peso | Descripción |
|---|---|---|
| Disponibilidad garantizada en SLA | Alto | El proveedor debe garantizar al menos 99.9% de uptime mensual con mecanismo de penalidad por incumplimiento. Sin esta garantía, el riesgo R6 no puede instrumentarse como "Transferir". |
| Soporte técnico en español con RTO $\leq$ 4 horas para incidencias críticas | Alto | El equipo opera en Guatemala. El tiempo de respuesta del soporte es crítico para mantener la disponibilidad durante los sprints. |
| Entorno de staging separado de producción incluido | Alto | El workflow de CI/CD del equipo requiere staging independiente para pruebas de integración antes de despliegue a producción. |
| Costo dentro del presupuesto de infraestructura | Medio | El costo del servicio debe caber dentro de la partida de infraestructura cloud del presupuesto (ver `costos-consolidados.md`). |
| Presencia o facturación local (Guatemala o Latinoamérica) | Medio | Simplifica la facturación y la resolución de disputas contractuales. |
| Escalabilidad: capacidad de aumentar recursos sin migración | Bajo | Si el número de usuarios en H6–H7 supera las estimaciones, el proveedor debe poder escalar sin redeploy completo. |

## Tipo de contrato

El contrato con el proveedor cloud es de tipo **precio fijo por período** (Fixed Price — FP):

- Se contrata una configuración de servicio específica (cómputo + base de datos + almacenamiento + staging) por el período definido (1 ene 2027 – 30 abr 2027).
- El precio es fijo independientemente del uso real dentro de los límites contratados.
- Este tipo de contrato es apropiado porque el equipo puede estimar con suficiente precisión sus necesidades de infraestructura (133 tareas, 8 sprints, carga de usuarios en H6).
- Variaciones de uso por encima de los límites contratados (por ejemplo, si H6 atrae más estudiantes de lo esperado) se gestionan con una cláusula de extensión de capacidad negociada previamente en el contrato.

## Cierre de la adquisición

Al cierre del proyecto (post H7), el PO ejecuta el proceso de cierre formal de la adquisición:

1. Verificar que el proveedor cumplió el SLA durante todo el período contractual (1 ene – 30 abr 2027). Si hubo incumplimientos, aplicar los créditos correspondientes antes del cierre.
2. Documentar el historial de incidencias (tickets C7) y su resolución como parte del archivo del proyecto.
3. Coordinar la retención o migración de los datos del sistema si el cliente (UVG) desea continuar operando el sistema post-cierre. Esta decisión está fuera del alcance del contrato académico 2026–2027 pero debe documentarse explícitamente.
4. Cerrar la cuenta del proveedor o transferir la titularidad al cliente si aplica.
5. Registrar el cierre de la adquisición en el Acta de Cierre (H8) como parte de los entregables formales.
