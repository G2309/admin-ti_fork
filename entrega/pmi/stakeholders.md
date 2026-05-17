# Área 10 PMI: Gestión de los Stakeholders

## Descripción del área

La Gestión de los Stakeholders es el área del PMBOK responsable de identificar a todas las personas, grupos y organizaciones que pueden afectar o ser afectados por el proyecto, y de desarrollar estrategias apropiadas para involucrar a cada uno de forma efectiva. Una mala gestión de stakeholders es una de las causas más frecuentes de fracaso en proyectos de software, especialmente cuando el cliente es institucional y los niveles de poder e interés son heterogéneos.

En este proyecto se identificaron 10 stakeholders clasificados en la Matriz Poder-Interés $2 \times 2$.

## Marco conceptual — Matriz $2 \times 2$ Poder-Interés

La Matriz Poder-Interés clasifica a los stakeholders según dos dimensiones:

- **Poder**: capacidad del stakeholder de influir en las decisiones del proyecto, autorizar cambios, bloquear avances o afectar el resultado final.
- **Interés**: nivel de involucramiento o afectación que el stakeholder tiene con el resultado del proyecto.

| Cuadrante | Poder | Interés | Estrategia |
|---|---|---|---|
| I | Alto | Alto | Gestionar de cerca: máxima comunicación, involucramiento activo, validaciones formales |
| II | Alto | Bajo | Mantener satisfecho: información periódica suficiente para que no se convierta en bloqueador |
| III | Bajo | Alto | Mantener informado: comunicación regular sobre avances que les afectan directamente |
| IV | Bajo | Bajo | Monitorear: contacto mínimo, solo cuando es necesario o ante incidencia |

## Tabla de 10 stakeholders

| ID | Nombre / Entidad | Rol en el proyecto | Poder | Interés | Cuadrante | Estrategia | Canal |
|---|---|---|---|---|---|---|---|
| S1 | Erick Oswaldo Marroquín Zamora | Sponsor / Catedrático | Alto | Alto | I | Gestionar de cerca | C1 (quincenal + reunión) |
| S2 | UVG — institución | Cliente institucional | Alto | Alto | I | Gestionar de cerca | C8 (al cierre) |
| S3 | Dirección de Admisiones UVG | Validador del catálogo de carreras | Alto | Alto | I | Gestionar de cerca | C2 (por hito funcional) |
| S4 | Área de TI / Infraestructura UVG | Proveedor de infraestructura institucional | Alto | Bajo | II | Mantener satisfecho | C4 (por hito técnico) |
| S5 | Josué Say | Product Owner | Alto | Alto | I | Gestionar de cerca | Rol interno (no requiere canal externo) |
| S6 | Mathew Cordero | Scrum Master | Alto | Alto | I | Gestionar de cerca | Rol interno (no requiere canal externo) |
| S7 | Gustavo Cruz, Javier Chen, Pedro Guzmán | Developers del equipo | Bajo | Alto | III | Mantener informado | C3 (Daily + ceremonies) |
| S8 | Estudiantes de diversificado (usuarios finales) | Usuarios del sistema | Bajo | Alto | III | Mantener informado | C5 (sprints 8 y 9) |
| S9 | Catedráticos de carreras UVG | Validadores de descripción de carreras | Bajo | Alto | III | Mantener informado | C6 (una vez, sprints 2–3) |
| S10 | Proveedor infraestructura cloud | Proveedor externo de IaaS/PaaS | Bajo | Bajo | IV | Monitorear | C7 (solo ante incidencia) |

## Descripción de cada cuadrante

### Cuadrante I — Alto Poder / Alto Interés: Gestionar de cerca

**Stakeholders:** S1 (Marroquín/Sponsor), S2 (UVG institución), S3 (Dirección de Admisiones), S5 (PO Say), S6 (SM Cordero)

Este cuadrante incluye a las personas con mayor influencia sobre el proyecto y con el mayor interés en su resultado. S1 autoriza el inicio, aprueba el cierre y puede paralizar el proyecto en cualquier momento si no está satisfecho. S3 es el único stakeholder externo capaz de bloquear el hito H4 (validación del catálogo), que es un hito crítico de la ruta. S2 representa la institución que adopta el sistema.

La estrategia "gestionar de cerca" implica comunicación quincenal formal (C1), demostraciones en hitos clave (C2, C8), validaciones documentadas con acta y acceso directo al PO para cualquier decisión de alcance.

### Cuadrante II — Alto Poder / Bajo Interés: Mantener satisfecho

**Stakeholder:** S4 (Área de TI / Infraestructura UVG)

El Área de TI tiene poder alto porque controla la infraestructura de red de UVG y puede bloquear el despliegue si no coordina adecuadamente. Sin embargo, su interés en el contenido del sistema es bajo; su preocupación es técnica: que el sistema no genere problemas de seguridad o carga en la red institucional.

La estrategia "mantener satisfecho" implica coordinaciones técnicas formales por hito (C4) lideradas por Developer Cruz, entregando la información técnica que TI necesita sin saturarlos con detalles del backlog o del negocio.

### Cuadrante III — Bajo Poder / Alto Interés: Mantener informado

**Stakeholders:** S7 (Developers), S8 (Estudiantes diversificado), S9 (Catedráticos de carreras)

S7 tiene alto interés porque son los ejecutores del proyecto; su satisfacción y motivación afectan la velocidad. S8 son los usuarios finales del sistema; su retroalimentación en H6 define si el sistema cumple su propósito. S9 tienen interés porque el catálogo del sistema describe sus propias carreras.

La estrategia "mantener informado" implica ceremonies regulares para S7 (C3), sesiones de usabilidad para S8 (C5) y un formulario de validación para S9 (C6).

### Cuadrante IV — Bajo Poder / Bajo Interés: Monitorear

**Stakeholder:** S10 (Proveedor cloud)

El proveedor cloud tiene bajo interés en el negocio del proyecto (no le importa si el sistema recomienda carreras bien o mal) y bajo poder directo sobre las decisiones del proyecto. Su relevancia está acotada al cumplimiento del SLA.

La estrategia "monitorear" implica contacto únicamente ante incidencia técnica (C7, Developer Chen) o ante la materialización del riesgo R6.

## Mapa textual de cuadrantes

```
                        MATRIZ PODER-INTERÉS

     ALTO  |  CUADRANTE II              |  CUADRANTE I
           |  Mantener satisfecho       |  Gestionar de cerca
           |  S4 TI UVG                 |  S1 Marroquín (Sponsor)
    PODER  |                            |  S2 UVG institución
           |                            |  S3 Admisiones
           |                            |  S5 PO Say
           |                            |  S6 SM Cordero
           |----------------------------|----------------------------
     BAJO  |  CUADRANTE IV              |  CUADRANTE III
           |  Monitorear                |  Mantener informado
           |  S10 Proveedor cloud       |  S7 Developers
           |                            |  S8 Estudiantes
           |                            |  S9 Catedráticos carreras
           |                            |
           +----------------------------+----------------------------
                        BAJO                        ALTO
                                   INTERÉS
```

## Relación con el plan de comunicaciones

Cada cuadrante de la Matriz Poder-Interés tiene una estrategia de comunicación asignada que se operacionaliza en el Plan de Comunicaciones C1–C8:

| Cuadrante | Estrategia | Canales del plan |
|---|---|---|
| I | Gestionar de cerca | C1 (Sponsor quincenal), C2 (Admisiones por hito), C8 (cierre formal) |
| II | Mantener satisfecho | C4 (TI UVG por hito técnico) |
| III | Mantener informado | C3 (equipo diario), C5 (estudiantes sprints 8–9), C6 (catedráticos sprints 2–3) |
| IV | Monitorear | C7 (proveedor cloud solo ante incidencia) |

## Anti-patrones evitados

- Gestionar solo al Sponsor e ignorar a Admisiones: S3 tiene el poder de bloquear H4, que es la validación del catálogo. Sin ese hito, EP03 y EP04 no pueden completarse correctamente.
- Ignorar al Área de TI hasta el momento del despliegue: S4 puede bloquear el despliegue si no está coordinado con anticipación. La comunicación C4 comienza desde H3.
- Tratar a los estudiantes (S8) como audiencia pasiva: son los jueces reales de la calidad del sistema en H6. Su retroalimentación en las pruebas de usabilidad es un insumo crítico para los sprints 8 y 9.
- Asumir que el proveedor cloud (S10) no requiere gestión: aunque está en Cuadrante IV, el riesgo R6 tiene estrategia "Transferir" que requiere un SLA formal. Si no se gestiona la adquisición, R6 pasa de ser un riesgo transferido a ser un riesgo aceptado sin plan.

## Niveles de compromiso: estado actual y meta

El nivel de compromiso de un stakeholder describe cuánto apoya o resiste activamente el proyecto. El modelo de compromiso define 5 niveles:

- **Desconoce**: no está al tanto del proyecto ni de sus implicaciones.
- **Resistente**: conoce el proyecto pero se opone activamente o lo obstaculiza.
- **Neutral**: conoce el proyecto pero no lo apoya ni lo resiste.
- **Partidario**: apoya el proyecto y colabora cuando se le solicita.
- **Líder**: apoya activamente el proyecto, lo promueve y actúa sin necesidad de ser convocado.

| ID | Stakeholder | Nivel actual | Nivel meta | Brecha | Acción para cerrar la brecha |
|---|---|---|---|---|---|
| S1 | Marroquín (Sponsor) | Líder | Líder | Sin brecha | Mantener con C1 quincenal y transparencia en EVM |
| S2 | UVG institución | Neutral | Partidario | +1 nivel | C8 al cierre con entregable formal; demostración institucional del valor del sistema |
| S3 | Admisiones | Neutral | Partidario | +1 nivel | Involucramiento temprano en H4; demostración de que el catálogo digital reduce su carga de orientación manual |
| S4 | TI UVG | Neutral | Neutral | Sin brecha | C4 técnico por hito es suficiente; TI no necesita ser Líder para colaborar efectivamente |
| S5 | PO Say | Líder | Líder | Sin brecha | Rol interno — compromiso estructural |
| S6 | SM Cordero | Líder | Líder | Sin brecha | Rol interno — compromiso estructural |
| S7 | Developers | Partidario | Líder | +1 nivel | Ceremonies de Scrum que dan autonomía y visibilidad; pair programming que distribuye propiedad del código |
| S8 | Estudiantes | Desconoce | Partidario | +2 niveles | C5 en sprints 8–9: invitación directa a sesiones de usabilidad; el interés propio (orientación vocacional) es el incentivo natural |
| S9 | Catedráticos | Desconoce | Neutral | +1 nivel | C6: formulario de validación con propósito claro (su carrera se describe correctamente en el sistema) |
| S10 | Proveedor cloud | Neutral | Neutral | Sin brecha | Relación contractual; el proveedor cumple el SLA sin necesitar convicción sobre el valor del proyecto |

**Nota:** Las brechas de mayor prioridad son S3 (Admisiones, bloquea H4) y S8 (Estudiantes, validan usabilidad en H6). Estas brechas son las más críticas para el éxito del proyecto.
