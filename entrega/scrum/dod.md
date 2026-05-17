# Definition of Done (DoD)

## Definición y propósito

La Definition of Done (DoD) es el conjunto de criterios que una historia de usuario debe cumplir para considerarse terminada. No es una lista de deseos: es un estándar no negociable de calidad que aplica a cada historia que el equipo entrega en un sprint.

Una historia que cumple el Sprint Goal en funcionalidad pero no pasa la DoD no está terminada. No puede presentarse en el Sprint Review como trabajo completado ni contabilizarse en la velocidad del sprint.

El propósito de la DoD es garantizar que el incremento de cada sprint es potencialmente entregable: tiene la calidad necesaria para ser usado por estudiantes y administradores de UVG sin trabajo adicional de limpieza, corrección o integración.

## Los 7 criterios del DoD del proyecto

### DoD-1: Desarrollada, probada y validada contra todos los criterios de aceptación

El código está escrito, los criterios de aceptación de la historia han sido verificados uno a uno, y el Developer responsable puede demostrar que cada criterio se cumple. No basta con que "funcione aproximadamente": cada criterio debe verificarse de forma explícita.

### DoD-2: Funcionalidad almacena información en base de datos en nube correctamente

Los datos que la funcionalidad manipula (perfiles de usuario, respuestas de encuesta, resultados del motor de recomendación) se persisten correctamente en la base de datos en nube del proyecto. Se verifica que los datos guardados son los datos esperados y que la persistencia sobrevive a reinicios del sistema.

### DoD-3: Maneja validaciones y estados de error

La funcionalidad no solo funciona en el camino feliz: también maneja correctamente las entradas inválidas, los errores de servidor, los errores de red y los estados inesperados. Los mensajes de error son informativos para el usuario final (estudiante o administrador de UVG) sin exponer detalles técnicos del sistema.

### DoD-4: Responsiva en navegadores modernos

La interfaz de usuario funciona correctamente en los navegadores modernos (Chrome, Firefox, Edge, Safari en sus versiones actuales). La experiencia es usable en pantallas de escritorio y en dispositivos móviles comunes. No se requiere que sea perfecta en móvil, pero no debe ser inutilizable.

### DoD-5: Experiencia interactiva clara para estudiantes y administradores

La funcionalidad es comprensible para un estudiante de diversificado sin experiencia técnica y para un administrador de UVG Campus Central. Los flujos principales no requieren instrucciones adicionales fuera de la interfaz para completarse. Los estados intermedios (cargando, guardando, procesando el ranking) se comunican visualmente al usuario.

### DoD-6: Consultas responden sin tiempos de carga excesivos

Las operaciones que consultan la base de datos o ejecutan el motor de recomendación responden en tiempos que no degradan la experiencia del usuario. Se evitan consultas N+1, procesamiento síncrono bloqueante en el hilo principal y operaciones no indexadas sobre conjuntos de datos grandes. El criterio es funcional, no una cifra de milisegundos fija: el equipo juzga si el tiempo de carga es aceptable para el contexto de uso.

### DoD-7: Ha pasado pruebas funcionales y de integración

La historia ha sido probada no solo de forma unitaria sino también en integración con las otras funcionalidades del sistema. Se verificó que la nueva funcionalidad no rompió funcionalidades previamente completadas y que la integración entre capas (frontend, backend, base de datos) funciona correctamente.

## Criterios XP complementarios

El proyecto incorpora prácticas de Extreme Programming (XP) que complementan la DoD de Scrum con criterios de calidad técnica:

### XP-1: TDD verde

La funcionalidad tiene pruebas unitarias escritas siguiendo el ciclo Test-Driven Development (rojo $\to$ verde $\to$ refactor). Las pruebas pasan en verde al momento de cerrar la historia. No se aceptan historias con pruebas en rojo bajo el argumento de que "funciona en la interfaz".

### XP-2: CI verde

El pipeline de integración continua (CI) ejecuta satisfactoriamente: las pruebas automatizadas pasan, el build compila sin errores y el linting no reporta violaciones críticas. Una historia cuyo código no pasa el CI no puede marcarse como terminada, independientemente de su funcionamiento manual.

### XP-3: Sin deuda técnica deliberada

El código entregado no introduce deuda técnica intencional. No se permiten parches temporales etiquetados como "TODO: arreglar después", atajos de implementación que el equipo sabe que necesitarán reescribirse, ni soluciones que funcionan solo bajo condiciones de prueba controladas. Si la solución correcta requiere más tiempo del disponible en el sprint, la historia se devuelve al backlog en lugar de entregarse con deuda conocida.

## Por qué el DoD es una defensa contra el scope creep

El scope creep en el DoD ocurre cuando el equipo entrega historias "casi listas" que omiten criterios de calidad bajo presión de tiempo. El problema se amplifica sprint a sprint:

- Una historia entregada sin pruebas de integración puede romper funcionalidades en el sprint siguiente.
- Una historia sin manejo de errores obliga a trabajo correctivo urgente que consume capacidad del equipo.
- El código sin CI verde acumula deuda técnica que eventualmente obliga a pausar el desarrollo para limpiarla.

La DoD obliga a que cada historia esté verdaderamente terminada antes de avanzar. Esto parece lento en el corto plazo pero acelera el proyecto en los sprints siguientes al eliminar el retrabajo.

En este proyecto, el SM (Mathew Cordero) es responsable de que el equipo no presente en el Sprint Review historias que no cumplen la DoD. El PO (Josué Say) no acepta en el Review funcionalidades que el equipo sabe que están incompletas.

## Anti-patrón: "La calidad no es solo visual"

El anti-patrón más peligroso en proyectos de este tipo es confundir "la interfaz se ve bien y hace lo que promete" con "la historia está terminada". Esta confusión lleva a:

- Historias que parecen completadas en la demo del Sprint Review pero que tienen problemas de integración que solo aparecen en producción.
- Funcionalidades que no manejan errores y que bloquean al estudiante cuando hay un problema de conectividad.
- Un motor de recomendación que genera resultados correctos en datos de prueba pero que falla con perfiles reales por casos no contemplados en el desarrollo.

La calidad en este proyecto incluye: persistencia correcta de datos, manejo de errores, pruebas automatizadas en verde, tiempo de respuesta aceptable y comportamiento correcto en integración. Ninguno de estos criterios es visible en una demo de 2 minutos, pero todos son esenciales para que el sistema funcione con estudiantes reales de UVG Campus Central.
