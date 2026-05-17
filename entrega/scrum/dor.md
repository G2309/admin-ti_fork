# Definition of Ready (DoR)

## Definición y propósito

La Definition of Ready (DoR) es un conjunto de criterios que una historia de usuario debe cumplir antes de poder ser aceptada en un Sprint Planning. Si una historia no cumple todos los criterios del DoR, no puede entrar al sprint, sin excepciones.

La DoR no es una lista de "requisitos mínimos para escribir una historia mal": es una garantía de que el equipo tiene suficiente información para comprometerse a desarrollar la historia en un sprint de 10 días hábiles sin enfrentar ambigüedades bloqueantes que descubrir a mitad del sprint.

El propósito de la DoR es doble: proteger al equipo de comprometerse con trabajo no definido, y proteger al Product Owner de ver sus historias abandonadas a mitad de sprint por falta de claridad.

## Los 5 criterios del DoR aplicados al proyecto

### DoR-1: Historia en formato COMO / QUIERO / PARA

La historia está escrita en el formato estándar de historia de usuario que comunica el rol (quién), la funcionalidad (qué) y el valor (para qué). Sin este formato, la historia no expresa valor de negocio y los Developers no pueden evaluar si la están construyendo correctamente.

Ejemplo correcto:

```bash
COMO estudiante registrado
QUIERO que mis respuestas queden guardadas automáticamente
PARA no perder mi progreso si abandono la encuesta temporalmente
```

Una nota técnica como "implementar endpoint POST /encuesta/guardado" no cumple este criterio aunque describa trabajo real.

### DoR-2: Criterios de aceptación definidos y verificables

La historia tiene criterios de aceptación redactados en lenguaje no ambiguo que el equipo puede verificar objetivamente. Los criterios responden a la pregunta: ¿cómo sabremos que esta historia está terminada?

Los criterios deben ser testables. "La interfaz se ve bien" no es un criterio verificable. "El sistema muestra un mensaje de confirmación de guardado en menos de 2 segundos tras avanzar de sección" sí lo es.

En este proyecto, el PO (Josué Say) redacta los criterios de aceptación con la colaboración de los Developers durante el refinamiento del backlog.

### DoR-3: Story points estimados por el equipo

Los Developers han analizado la historia y la han estimado en story points durante una sesión de refinamiento previa al Sprint Planning. Una historia sin estimación no puede entrar al sprint porque el equipo no puede comprometerse a completarla dentro de la capacidad del sprint.

La estimación en este proyecto usa la escala de Fibonacci adaptada. Cualquier historia por encima de 8 SP debe ser dividida antes de entrar al Planning.

### DoR-4: Sin dependencias bloqueantes sin resolver

Si la historia depende de otra historia o de un componente externo que aún no existe, esa dependencia debe estar resuelta o tener un plan concreto de resolución antes del Planning. Una dependencia bloqueante sin resolver convierte la historia en un riesgo activo para el Sprint Goal.

Ejemplo en este proyecto: EP04-US01 (motor de recomendación) depende de que existan perfiles de usuario (EP01) y datos de encuesta (EP02). Por eso no puede entrar al Sprint Planning de S5 hasta que S1 y S2 estén completados.

### DoR-5: Aprobada y priorizada por el Product Owner

El PO ha revisado la historia, la considera lista para desarrollarse y la ha posicionado en la parte superior del Product Backlog. Esta aprobación confirma que la historia es la siguiente de mayor valor para el Product Goal según el criterio del PO.

Una historia técnicamente bien escrita pero no priorizada por el PO no entra al sprint. El PO tiene la autoridad exclusiva sobre este criterio.

## Por qué la DoR es una defensa contra el scope creep

El scope creep ocurre cuando trabajo no planificado entra al sprint, diluyendo la capacidad del equipo y comprometiendo el Sprint Goal. La DoR actúa como una barrera formal:

- Una historia que aparece el día del Planning sin criterios de aceptación no puede entrar al sprint, por bien intencionada que sea.
- Una historia urgente pedida por un stakeholder de UVG que no cumple el DoR tampoco puede saltarse el proceso. Debe refinarse primero.
- El SM tiene la responsabilidad de rechazar historias que no cumplen el DoR en el Planning, protegiendo al equipo de comprometerse con trabajo ambiguo.

La DoR obliga a que el trabajo de refinamiento ocurra antes del Planning, no durante él. Cuando el equipo llega al Planning con todas las historias candidatas cumpliendo el DoR, el Planning se enfoca en la selección y la planificación táctica, no en descubrir qué quiso decir el PO con una historia mal escrita.

## Quién valida el DoR

El Product Owner (Josué Say) es el responsable de que las historias en la parte superior del backlog cumplan el DoR antes del Sprint Planning. Es su responsabilidad completar o rechazar historias que lleguen incompletas.

El Scrum Master (Mathew Cordero) facilita el refinamiento del backlog y alerta al PO cuando se acerca un Planning con historias insuficientemente refinadas.

Los Developers son los destinatarios del DoR: si una historia llega al Planning sin cumplirlo, tienen el derecho y la responsabilidad de señalarlo y no comprometerse con ella.

## Anti-patrón: meter historias sin DoR cumplido al Sprint Planning

El anti-patrón más común en equipos Scrum inmaduros es aceptar historias incompletas en el Planning bajo la presión de "la historia es importante y ya la iremos refinando en el sprint". Las consecuencias son predecibles:

- El equipo descubre durante el sprint que los criterios de aceptación son ambiguos y pierde tiempo en reuniones de aclaración.
- El PO cambia los criterios a mitad de sprint porque la historia nunca estaba bien definida.
- La historia no se completa en el sprint por causa de la ambigüedad, no por falta de capacidad técnica.
- El Sprint Goal se ve comprometido por trabajo que nunca debió entrar al sprint.

En este proyecto, si una historia no cumple los 5 criterios del DoR, se devuelve al backlog para refinamiento y no entra al sprint en curso. No hay excepciones.
