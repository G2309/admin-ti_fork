# Roles XP del proyecto

## Contexto

XP define cinco roles que estructuran las responsabilidades dentro del equipo técnico. Estos roles no reemplazan los roles de Scrum: coexisten con ellos. En este proyecto, los roles XP y Scrum se superponen deliberadamente sobre las mismas personas, porque XP opera como capa técnica dentro de los sprints que Scrum organiza.

El equipo del proyecto está compuesto por cinco personas:

| Nombre | Rol Scrum | FTE |
|---|---|---|
| Josué Say | Product Owner | 0.7 FTE interno |
| Mathew Cordero | Scrum Master | — |
| Gustavo Cruz Bardales | Developer | 1.0 FTE |
| Javier Chen Gonzalez | Developer | 1.0 FTE |
| Pedro Guzmán Mayen | Developer | 1.0 FTE |

## Los cinco roles XP

### 1. Cliente

**Definición XP.** El Cliente representa los intereses del usuario final. Define las historias de usuario, establece los criterios de aceptación y tiene la autoridad para decidir qué se construye y en qué orden. En XP clásico, el Cliente es alguien del negocio que trabaja junto al equipo técnico, no un intermediario.

**Quién asume este rol en el proyecto.** Josué Say (Product Owner) asume el rol de Cliente XP en representación de UVG Campus Central y de la Dirección de Admisiones. Josué es el punto de contacto entre los intereses académicos de UVG (orientación vocacional para estudiantes de diversificado) y las decisiones técnicas del equipo.

**Responsabilidades concretas en este proyecto.**

- Definir y priorizar el Product Backlog con historias de usuario en formato COMO / QUIERO / PARA.
- Establecer los criterios de aceptación que cada historia debe cumplir para cerrarse.
- Validar en el Sprint Review que el incremento entregado cumple las necesidades reales de los estudiantes y administradores de UVG Campus Central.
- Decidir el orden de implementación de las épicas EP01 a EP06.

**Diferencia con el rol Scrum de PO.** En Scrum, el Product Owner es responsable del valor del producto y del Product Backlog. En XP, el Cliente tiene además presencia activa durante el desarrollo: está disponible para responder preguntas de implementación. En este proyecto, dado que Josué es interno a UVG (0.7 FTE), esa disponibilidad es estructuralmente posible.

### 2. Programadores

**Definición XP.** Los Programadores desarrollan el software usando las prácticas XP. No son simplemente quienes escriben código: son los responsables de aplicar TDD, Pair Programming, Refactoring, Collective Ownership y Simple Design en cada historia que cierran.

**Quiénes asumen este rol en el proyecto.** Gustavo Cruz Bardales, Javier Chen Gonzalez y Pedro Guzmán Mayen. Los tres son developers senior con dedicación de 1.0 FTE.

**Responsabilidades concretas en este proyecto.**

- Estimar historias de usuario en puntos de historia durante el Sprint Planning.
- Aplicar TDD en todas las historias de EP02, EP04 y EP05 (lógica de negocio crítica).
- Participar en pares rotativos para las historias de alta criticidad (EP04-US01, EP05-US01, módulos de autenticación EP01).
- Mantener el pipeline CI en verde: ninguna historia se cierra con CI en rojo.
- Refactorizar código como parte del DoD, no como tarea separada.
- Respetar y mantener los estándares de codificación definidos en HT-02 (sprint 1).

**Diferencia con el rol Scrum de Developer.** En Scrum, los Developers son responsables de construir el incremento y de autoorganizarse para lograrlo. XP añade la capa técnica: los Programadores no solo construyen el incremento, sino que lo construyen con un conjunto específico de disciplinas técnicas que garantizan la calidad interna del código.

### 3. Coach

**Definición XP.** El Coach facilita el proceso XP y asegura que las prácticas se apliquen correctamente. No es un gerente ni un auditor: es alguien con experiencia en XP que ayuda al equipo a resolver obstáculos de práctica. El Coach interviene cuando el equipo desvía sin darse cuenta de una práctica o cuando la presión de tiempo amenaza la disciplina técnica.

**Quién asume este rol en el proyecto.** Mathew Cordero (Scrum Master) asume el rol de Coach XP de forma complementaria a su rol de SM. La combinación es natural: el SM ya es responsable de que el equipo adopte el proceso Scrum correctamente; el rol de Coach XP extiende esa responsabilidad a las prácticas técnicas.

**Responsabilidades concretas en este proyecto.**

- Verificar que el pipeline CI esté activo y en verde desde el sprint 1.
- Asegurar que Pair Programming se aplica con rotación real de roles (driver/navigator) y no se convierte en revisión unilateral.
- Identificar cuando el equipo está acumulando deuda técnica bajo presión de velocidad y llevar el tema a la Retrospectiva.
- Confirmar que las historias técnicas (HT-01 a HT-07) se priorizan en el Sprint Planning y no se postergan sprint tras sprint.

**Diferencia con el rol Scrum de SM.** El Scrum Master se enfoca en el proceso: ceremonies, artefactos, impedimentos organizacionales. El Coach XP se enfoca en la técnica: prácticas de ingeniería, calidad del código, disciplina de TDD y CI. En este proyecto, Mathew Cordero integra ambos enfoques.

### 4. Tester

**Definición XP.** El Tester verifica que el software cumple los criterios de aceptación definidos por el Cliente. En XP, el testing no es una fase separada al final del desarrollo: es una actividad continua que convive con la implementación. La responsabilidad del Tester puede ser compartida con los Programadores, especialmente bajo TDD.

**Quién asume este rol en el proyecto.** El rol de Tester está integrado en las responsabilidades de los tres developers (Cruz, Chen, Guzmán) bajo el ciclo TDD. No hay una persona dedicada exclusivamente a testing manual. Las pruebas unitarias que los developers escriben bajo TDD, más el pipeline CI que las ejecuta automáticamente, son el mecanismo de testing continuo del proyecto.

**Responsabilidades concretas en este proyecto.**

- Escribir pruebas unitarias antes del código de producción (ciclo Red-Green-Refactor).
- Asegurar que las pruebas cubren los casos principales de la lógica de negocio en EP04 (scoring) y EP05 (determinismo del ranking).
- Verificar los criterios de aceptación de cada historia antes de presentarla en el Sprint Review.
- Ejecutar pruebas funcionales y de integración como parte del cierre de la historia (DoD-7).

**Diferencia con el rol Scrum.** Scrum no define un rol de Tester: los Developers son responsables de las pruebas como parte de su trabajo. XP es más prescriptivo al respecto: TDD hace que el testing sea parte estructural del acto de programar, no una actividad posterior.

### 5. Tracker

**Definición XP.** El Tracker monitorea el progreso del proyecto, registra la velocidad del equipo y hace visible cuando el proyecto está desviándose del plan. No toma decisiones de re-planificación: provee los datos que permiten que el equipo y el Cliente las tomen.

**Quién asume este rol en el proyecto.** Mathew Cordero (Scrum Master) asume también el rol de Tracker. El SM ya es responsable de los artefactos de seguimiento de Scrum (burndown, velocidad, impedimentos). El rol de Tracker XP es la extensión natural de esa responsabilidad.

**Responsabilidades concretas en este proyecto.**

- Registrar la velocidad del equipo (puntos completados por sprint) y proyectar la capacidad de los sprints siguientes.
- Monitorear las cuatro métricas de calidad XP: cobertura de pruebas, defectos por sprint, historias técnicas completadas y deuda técnica documentada.
- Reportar el estado del proyecto en el informe quincenal C1 a los stakeholders de UVG.
- Alertar al equipo cuando la velocidad real diverge significativamente de la planificada.

**Diferencia con el rol Scrum de SM.** En Scrum, el SM facilita los eventos y remueve impedimentos, pero el seguimiento del progreso es responsabilidad del equipo completo. En XP, el Tracker tiene una responsabilidad más explícita de recolectar y comunicar métricas. En este proyecto, Mathew Cordero centraliza ambas responsabilidades.

## Tabla comparativa: roles XP y roles Scrum

| Rol XP | Equivalente Scrum | Persona en el proyecto | Relación |
|---|---|---|---|
| Cliente | Product Owner | Josué Say | El PO asume el rol de Cliente XP |
| Programadores | Developers | Cruz, Chen, Guzmán | Los Developers aplican las prácticas XP |
| Coach | Scrum Master (complementario) | Mathew Cordero | El SM extiende su rol hacia la técnica |
| Tester | Integrado en Developers | Cruz, Chen, Guzmán | TDD integra el testing en el desarrollo |
| Tracker | Scrum Master (complementario) | Mathew Cordero | El SM centraliza métricas de proceso y técnica |

## Cómo los roles XP complementan los roles Scrum

Scrum y XP son complementarios en la definición de responsabilidades. Scrum define quién toma qué decisiones en el proceso (PO prioriza, SM facilita, Developers se autoorganizan). XP define cómo se construye el código (Programadores con TDD, Pair Programming y CI; Cliente con criterios de aceptación claros; Coach garantizando la disciplina técnica).

La combinación no duplica responsabilidades: las extiende. El PO de Scrum y el Cliente de XP son la misma persona con roles coherentes. El SM de Scrum y el Coach/Tracker de XP son la misma persona con responsabilidades ampliadas hacia la calidad técnica. Los Developers de Scrum y los Programadores de XP son las mismas personas con un conjunto explícito de prácticas de ingeniería que guían cómo hacen su trabajo.
