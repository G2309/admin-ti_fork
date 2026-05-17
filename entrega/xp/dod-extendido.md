# Definition of Done extendida con criterios XP

## Propósito de este documento

Este documento describe cómo XP extiende la DoD de Scrum con tres criterios técnicos adicionales. El DoD extendido no reemplaza ni contradice el DoD base: lo complementa con una capa de calidad técnica que los siete criterios de Scrum no cubren explícitamente.

La premisa es la frase del docente: "La calidad no es solo visual." Una historia que pasa la revisión visual del Sprint Review pero que no tiene pruebas automatizadas, no pasa el pipeline CI o introduce deuda técnica deliberada no está realmente terminada.

## Los 7 criterios del DoD base (Scrum)

### DoD-1: Desarrollada, probada y validada contra todos los criterios de aceptación

El código está escrito y cada criterio de aceptación de la historia ha sido verificado de forma explícita por el developer. No basta con que "funcione aproximadamente": cada criterio se verifica uno a uno.

### DoD-2: Funcionalidad almacena información en base de datos en nube correctamente

Los datos que la funcionalidad manipula (perfiles de usuario, respuestas de encuesta vocacional, resultados del motor de recomendación) se persisten correctamente en la base de datos en nube. La persistencia sobrevive a reinicios del sistema.

### DoD-3: Maneja validaciones y estados de error

La funcionalidad maneja entradas inválidas, errores de servidor, errores de red y estados inesperados. Los mensajes de error son informativos para el usuario final (estudiante o administrador de UVG Campus Central) sin exponer detalles técnicos internos del sistema.

### DoD-4: Responsiva en navegadores modernos

La interfaz funciona correctamente en Chrome, Firefox, Edge y Safari en sus versiones actuales. La experiencia es usable en pantallas de escritorio y en dispositivos móviles comunes.

### DoD-5: Experiencia interactiva clara para estudiantes y administradores

La funcionalidad es comprensible para un estudiante de diversificado sin experiencia técnica y para un administrador de UVG Campus Central. Los flujos principales no requieren instrucciones adicionales fuera de la interfaz para completarse. Los estados intermedios (cargando, guardando, procesando el ranking) se comunican visualmente al usuario.

### DoD-6: Consultas responden sin tiempos de carga excesivos

Las operaciones que consultan la base de datos o ejecutan el motor de recomendación responden en tiempos que no degradan la experiencia del usuario. Se evitan consultas N+1, procesamiento síncrono bloqueante y operaciones no indexadas sobre conjuntos de datos grandes. El criterio es funcional: el equipo juzga si el tiempo de carga es aceptable para el contexto de uso.

### DoD-7: Ha pasado pruebas funcionales y de integración

La historia ha sido probada en integración con las otras funcionalidades del sistema. Se verificó que la nueva funcionalidad no rompió funcionalidades previamente completadas y que la integración entre capas (frontend, backend, base de datos) funciona correctamente.

## Los 3 criterios XP adicionales

### XP-1: TDD verde antes del merge

La historia tiene pruebas unitarias escritas siguiendo el ciclo Test-Driven Development (rojo $\to$ verde $\to$ refactor). Las pruebas pasan en verde al momento de cerrar la historia. No se aceptan historias con pruebas en rojo bajo el argumento de que "funciona en la interfaz".

**Aplicación en el proyecto.** Este criterio es obligatorio para historias de EP02 (lógica de guardado automático), EP04 (scoring del perfil vocacional) y EP05 (determinismo del ranking de carreras). Para otras épicas, aplica según la complejidad de la lógica de negocio que la historia implementa.

**Cómo se verifica.** El pipeline CI ejecuta las pruebas unitarias automáticamente. El reporte del pipeline es la evidencia de cumplimiento. No se requiere inspección manual adicional.

**Relación con DoD base.** DoD-7 cubre pruebas funcionales y de integración. XP-1 añade la capa de pruebas unitarias escritas antes del código de producción. Son complementarios: DoD-7 verifica integración; XP-1 verifica comportamiento unitario de la lógica de negocio.

### XP-2: Pipeline CI en verde al cierre de la historia

El pipeline de integración continua ejecuta satisfactoriamente: las pruebas automatizadas pasan, el build compila sin errores y el linting no reporta violaciones críticas. Una historia cuyo código no pasa el CI no puede marcarse como terminada, independientemente de su funcionamiento en pruebas manuales.

**Aplicación en el proyecto.** Este criterio aplica a todas las historias, funcionales y técnicas, desde el sprint 1 en adelante (una vez que HT-01 está completada). Es una condición universal, no opcional.

**Cómo se verifica.** El estado del pipeline CI en el repositorio es la evidencia de cumplimiento. Si el pipeline reporta rojo al momento en que el developer declara la historia terminada, la historia no está terminada. El SM (Mathew Cordero) verifica el estado del pipeline como parte de la preparación del Sprint Review.

**Relación con DoD base.** DoD-1 cubre validación contra criterios de aceptación. XP-2 garantiza que esa validación incluye las verificaciones automáticas del pipeline, no solo las manuales. El pipeline es la red de seguridad que detecta problemas que la revisión manual puede pasar por alto bajo presión de tiempo.

### XP-3: Sin deuda técnica deliberada

El código entregado no introduce deuda técnica intencional. No se permiten parches temporales etiquetados como "TODO: arreglar después", atajos de implementación que el equipo sabe que necesitarán reescribirse, ni soluciones que funcionan solo bajo condiciones de prueba controladas.

Si la solución correcta requiere más tiempo del disponible en el sprint, la historia vuelve al backlog en lugar de entregarse con deuda conocida. La deuda técnica que se identifica durante el desarrollo pero no puede resolverse en el sprint actual se documenta explícitamente como ítem del backlog, no se enterría en el código.

**Aplicación en el proyecto.** Este criterio es especialmente relevante en los sprints 5-7, donde la concentración de complejidad técnica (EP04, EP05, EP06) crea presión para entregar funcionalidad con calidad técnica reducida. La deuda técnica en el motor de recomendación (EP04) es de alto riesgo: un algoritmo con deuda técnica puede producir resultados incorrectos que no son visibles hasta que el sistema se usa con perfiles reales.

**Cómo se verifica.** Durante la Retrospectiva del sprint, el equipo revisa los ítems de deuda técnica registrados. La métrica "deuda técnica documentada" (ver `metricas-calidad.md`) hace este criterio rastreable.

**Relación con DoD base.** Los siete criterios del DoD base verifican que la funcionalidad hace lo que debe. XP-3 verifica que la forma en que lo hace no crea problemas para el equipo en sprints futuros. Son dimensiones ortogonales de calidad.

## Cómo interactúan los 10 criterios

Los 10 criterios del DoD extendido verifican dimensiones diferentes de la calidad de una historia:

| Criterio | Qué verifica |
|---|---|
| DoD-1 | Funcionalidad correcta contra criterios de aceptación |
| DoD-2 | Persistencia de datos en nube |
| DoD-3 | Manejo de errores y estados inesperados |
| DoD-4 | Compatibilidad de interfaz |
| DoD-5 | Usabilidad para el usuario final |
| DoD-6 | Rendimiento funcional |
| DoD-7 | Integración con el resto del sistema |
| XP-1 | Calidad técnica de la lógica de negocio (TDD) |
| XP-2 | Verificación automática continua (CI) |
| XP-3 | Ausencia de deuda técnica intencional |

XP no reemplaza ni reduce el peso de los siete criterios base. Los tres criterios XP se añaden como filtros adicionales que verifican aspectos de calidad técnica que los criterios de Scrum no cubren por diseño: Scrum no prescribe cómo se construye el código, solo que el incremento sea potencialmente entregable.

## Por qué el DoD extendido convierte la DoD en un filtro técnico real

Una DoD que solo tiene criterios verificables visualmente (la interfaz se ve bien, los datos se guardan, los errores se muestran correctamente) es un filtro que pasan historias con problemas técnicos reales:

- Un motor de recomendación que produce resultados correctos en los 5 casos de prueba manuales pero que falla con 50 perfiles reales porque la lógica no contempla ciertos patrones.
- Un módulo de autenticación que funciona en la demo del Sprint Review pero que tiene una ruta de error que expone información del sistema bajo condiciones de red inestable.
- Código que funciona hoy pero que nadie puede modificar mañana porque no tiene pruebas que garanticen que el cambio no rompe nada.

Los tres criterios XP cierran esos huecos. XP-1 (TDD verde) hace que la lógica de negocio esté probada automáticamente. XP-2 (CI verde) hace que la integración se verifique en cada cambio. XP-3 (sin deuda técnica deliberada) hace que el código entregado sea mantenible para el equipo en los sprints siguientes.

El resultado es un DoD que no puede superarse con una demo de dos minutos que muestra que "la pantalla funciona". La calidad en este proyecto incluye comportamiento correcto bajo condiciones reales, pruebas automatizadas en verde y código que el equipo puede seguir modificando sin acumular riesgo técnico. Ninguno de esos criterios es visible en la demo, pero todos son esenciales para que el sistema funcione con estudiantes reales de UVG Campus Central.

## Responsabilidades en la verificación del DoD extendido

- **Developers (Cruz, Chen, Guzmán)**: son responsables de cumplir los 10 criterios antes de declarar una historia terminada. No presentan en el Sprint Review historias que saben que no cumplen el DoD.
- **SM Mathew Cordero**: verifica que el equipo no presenta en el Sprint Review historias que no cumplen el DoD. Revisa el estado del pipeline CI como parte de la preparación del Review.
- **PO Josué Say**: no acepta en el Review funcionalidades que el equipo sabe que están incompletas. Si una historia no cumple el DoD, vuelve al backlog.
