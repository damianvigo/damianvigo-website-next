# Patrones de diseño de software

**Los patrones de diseño son soluciones habituales a problemas que ocurren con frecuencia en el diseño de _software_.** Son como planos prefabricados que se pueden personalizar para resolver un problema de diseño recurrente en tu código.

Los patrones de diseño nos ayudan a prevenir los errores antes de que ocurran y de paso pueden acelerar el proceso de desarrollo al proporcionar paradigmas de desarrollo probados muchas veces y con efectividad comprobada.

Utilizar patrones de diseño ayuda a evitar problemas sutiles (que pueden traer problemas mayores) y mejora la legibilidad del código para todos los desarrolladores que ya están familiarizados con estos patrones.

Los patrones de diseño se aplican al desarrollo de _software_ y a la arquitectura general de un aplicación.

## ¿Cómo es la arquitectura monolítica?

El clásico diseño unificado del _software_, donde todo está acoplado o unido como un solo elemento.

Está diseñado para ser autocontenido, todos sus componentes están conectados y son interdependientes entre sí.

**Es una arquitectura fuertemente acoplada, donde cada uno de sus elementos y sus asociados tienen que estar presentes para que el código se ejecute o compile efectivamente.** Si por el contrario alguna parte o dependencia no está presente, este tipo de _software_ no puede funcionar.

Ventajas

- Fácil de depurar
- Se elimina la posibilidad de errores externos

Desventajas

- Una vez terminado el programa suele quedar igual a lo largo de su vida útil y el programa quedara desactualizado
- El mas mínimo error en el código puede comprometer a toda el programa

## ¿Cómo es la arquitectura de microservicios?

son lo opuesto a la monolítica, distribuyen todos los procesos en partes más pequeñas e independientes.

Existen muchas formas de implementar microservicios en el _software_, peor podemos encontrar algunos patrones comunes: distribución de tareas en bloques separados (componentes de servicios).

**Estos componentes de servicios están totalmente separados entre si y funcionan de forma completamente independiente, lo que permite en cualquier momento poder reemplazarlos sin afectar el uso de la aplicación.**

La interacción con la base de datos también está desacoplada, y se realiza a través de _APIs REST_, permitiendo crear puntos de entrada y salida de datos (enpoints), que pueden a su vez estar encapsulados en sus propios componentes de servicio, creando _APIs_ consistentes y flexibles que pueden interactuaron distintas bases de datos.

Ventajas

- Fácil de mantener y escalar
- Amigable con las pruebas de integración o end to end, lo que reduce significativamente la cantidad de errores.

Desventajas

- En ocasiones pueden presentar problemas de rendimiento
- Depender de _APIs_ externas puede tener problemas de latencia si la conexión del usuario es lenta.

## ¿Cómo es la arquitectura de _microkernels_?

Es conocido como arquitectura de plug-ins, es muy popular para aplicaciones que necesitan utilizar _software_ de terceros o agregar rápidamente funcionalidades adicionales.

Los componentes se dividen en dos tipos:

- **El nucleo central** donde se encuentran todas las funciones críticas de la aplicación, el núcleo central es completamente independiente y funcional, pero su funcionalidad se restringe a los procesos básicos
- **Los _plug-ins_** que funcionan como un componente para el núcleo de la aplicación, son módulos autocontenidos con una funcionalidad especializada y dependen del entorno que provee el núcleo central para extender su funcionalidad.

Ventajas

- Flexibilidad
- Fáciles de probar, lo que reduce el índice de errores

Desventajas

- Al estar todo centralizado en un núcleo principal, no son fáciles de escalar para uso masivo
- Requiere de un gran esfuerzo técnico (el núcleo central debe ser muy estable y necesita una _API_ consistente y un sistema robusto y encapsulado para que los plug-ins puedan funcionar adecuadamente)

## ¿Qué es la arquitectura en capas múltiples?

Es uno de los patrones de diseño de arquitectura más conocidos, y de los más utilizados.

**Su arquitectura está basada en _Java_, uno de los lenguajes más utilizados en la industria del _software_. Aunque actualmente se puede aplicar a cualquier tipo de aplicación y lenguaje de programación.**

También se la llama arquitectura multicapas y se basa en la separación de los procesos en unidades llamadas capas. Una capa es una unidad conceptual ilógica que cumple un rol específico dentro de la aplicación.

Por ejemplo tenemos una capa dedicada únicamente a la lógica de presentación (todo lo relacionado a la parte visual de la aplicación) y cualquier cosa que no se relacione con esta unidad lógica debe ir en otra capa.

Suele tener tres capas frecuentes:

- **Capa de presentación:** frameworks de front end, interfaces gráficas y aplicaciones móviles.
- **Capa de negocio:** middle-tier o capa intermedia. Es la encargada de realizar las tareas, cálculos y procesos que requiere la capa de presentación. Tienen código de programación en diferentes lenguajes o servicios en la nube como Lambdas.
- **Capa de datos:** donde se almacena la información que producen los procesos de la aplicación y se despachan datos actualizados para desplegar. Acá están las bases de datos trabajando.

**Lo importante es el flujo y la comunicación entre capaz, deben ser un entorno separado que puede interactuar únicamente con las capas próximas y jamás saltarse una capa para interactuar con otra.**

La capa de presentación solo interactúa con la capa de negocio, la capa de negocio solo interactúa con la capa de datos, entonces la capa de presentación no tiene forma de acceder directamente a la capa de datos.

## La arquitectura basada en espacio

**También llamada _SBA_ por sus siglas en inglés de _space based architecture_** nace de la mano de la popularidad de los servicios en la nube, al punto de que también se la conoce como el patrón de arquitectura en la nube.

Con la llegada de las aplicaciones _webs_, el avance de las redes sociales y el comercio electrónico, el _software_ que se distribuye por internet creció enormemente.

Como un ejemplo, _Facebook_ tiene un tráfico de aproximadamente 1.620 millones de usuarios por día. A una escala tan grande, hasta el más mínimo detalle cuenta, si ahora el servicio no está disponible por unos segundos se traduce en pérdidas millonarias.

**El enfoque de la arquitectura _SBA_ es ayudar a mejorar el rendimiento y escalar operaciones para soportar tráfico masivo.**

## La arquitectura dirigida por eventos

Es un patrón relativamente reciente y aparece luego de que la internet, las tecnologías en la nube y la internet de las cosas comienzan a consolidarse y crean escenarios totalmente nuevos para el flujo y proceso de datos.

**También se la conoce como _EDA_ por sus siglas en inglés de _event driven architecture._**

**La arquitectura dirigida por eventos nos permite crear sistemas altamente eficientes y autónomos que pueden recibir y procesar información en tiempo real. Este tipo de arquitectura es bastante compleja y tiene varias implementaciones y tecnologías.**

El _software_ que se produce con este tipo de arquitectura es defícil de desarrollar y necesita bastante pericia y conocimiento técnico.

## El modelo vista controlador

**También conocido como _MVC_ por sus siglas en inglés de _model view controller_** y puede utilizarse como patrón de arquitectura para una aplicación completa.

Tiene sus raíces en la industria del videojuego, donde se crean aplicaciones con una extensa interacción con el usuario y en la que el manejo de datos es vital para gestionar no solo el puntaje sino la ubicación de los elementos en pantalla, el avance del juego y las tablas de puntaje de los usuarios, entre muchos elementos.

**El _MVC_ tiene la particularidad de ser un patrón que no funciona para todo tipo de software. Únicamente puede aplicarse en programas donde exista una interfaz gráfica y el usuario pueda de alguna forma interactuar con ella.**

Se compone de tres áreas separadas:

- **El modelo:** son los datos de la aplicación, donde se guardan y procesan todos los datos de la aplicación, es el cerebro centralizado del _software_. De estar creando un videojuego con este patrón, acá estarían los datos del juego: la posición del enemigo, su nivel de vida, la cantidad de disparos, los puntos, el tiempo faltante, el nivel en que se ejecuta el juego.
  **El modelo es la única fuente de información, el resto de la aplicación no posee datos, solo puede reflejarlos.**

- **La vista:** es la interfaz gráfica y todo lo que da la cara al usuario. **La vista existe únicamente para desplegar la información que viene del modelo.** Si nuestro software es una página web, la vista es todo lo que aparece en pantalla, se ve el nombre del usuario, la hora, los servicios disponibles, etc. Si es el ejemplo del juego, la vista toma los datos del modelo para saber dónde ubicar a los enemigos y el puntaje o el tamaño que debe tener la barra de vida del usuario.

- **El controlador:** se encarga de gestionar la interacción con el usuario. Esto lo hace usualmente a través de eventos como presionar una tecla, mover el mouse del ordenador. El controlador detecta estos eventos y los enlaza a procesos que actualizan el modelo.
