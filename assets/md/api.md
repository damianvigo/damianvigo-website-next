# RESTful API

Como programador te topas con muchos conceptos y como todo en la vida, si la teoría la tenés clara, la práctica se hace más simple.

Empecemos definiendo que es una _API_.

![API](https://i.imgur.com/EmfSYjt.png)

Por sus siglas _API_ significa (_Application Programing Interface_). Esto no nos dice mucho. Asi que básicamente una _API_ **es un conjunto de funcionalidades que nos ofrece un tercero para interactuar con ella a través de una capa de abstracción, es decir solo nos interesa el uso.**

La mayoria pensamos en una _API_ como _web_, una forma de exponer recursos para ser consumido y no, no solo es _web_.

Es otras palabras es una forma de comunicar dos recursos de una manera sencilla.

---

## ¿Qué es REST?

El término _REST_ (_Representational State Transfer_) se originó en el año 2000, descrito en la tesis de [Roy Fielding](https://en.wikipedia.org/wiki/Roy_Fielding), padre de la especificación _HTTP_.

**Un servicio _REST_ no es una arquitectura de software, sino una técnica de arquitectura de software con un conjunto de restricciones que usamos para crear servicios sobre _HTTP_.**

**Según Fielding las restricciones que definen a un sistema _RESTful_ serían:**

- **Cliente-servidor**: El servidor se encarga de controlar los datos mientras que el cliente se encarga de manejar las interacciones del usuario.
  Esta restricción mantiene al cliente y al servidor débilmente acoplados (el cliente no necesita conocer los detalles de implementación del servidor y el servidor se “despreocupa” de cómo son usados los datos que envía al cliente).
- **Sin estado**: aquí decimos que cada petición que recibe el servidor debería ser independiente y contener todo lo necesario para ser procesada.
- **Cacheable**: debe admitir un sistema de almacenamiento en caché. Este almacenamiento evitará repetir varias conexiones entre el servidor y el cliente para recuperar un mismo recurso.
- **Interfaz uniforme**: define una interfaz genérica para administrar cada interacción que se produzca entre el cliente y el servidor de manera uniforme, lo cual simplifica y separa la arquitectura. Esta restricción indica que cada recurso del servicio _REST_ debe tener una única dirección o _URI_. [api/v2/pokemon](https://pokeapi.co/api/v2/pokemon).
- **Sistema de capas**: el servidor puede disponer de varias capas para su implementación. Esto ayuda a mejorar la escalabilidad, el rendimiento y la seguridad.

**Por ende _API REST_ en simples palabras es una forma de entregar recursos para su utilización (comunicación) estandarizado y basado en arquitectura _REST_.**

**Hoy en día la mayoría de las empresas utilizan _API REST_ para crear servicios _web_.**

Esto se debe a que es un estándar lógico y eficiente. Por poner algún ejemplo tenemos los sistemas de identificación de Facebook o también la autenticación en los servicios de Google (hojas de cálculo, Google Analytics, Google Maps).

---

## ¿Qué es RESTful?

**_REST_ es el concepto, _RESTFul_ es la implementación de la arquitectura propuesta sobre servicios _HTTP_**.

![API REST Modelo](https://i.imgur.com/fFNc5kT.png)

Entonces una **RESTful API** es la implementación del servidor _web_ que expone información para acceder a la manipulación de los datos a través de recursos (URIs).

[api/v2/**pokemon**](https://pokeapi.co/api/v2/pokemon) "pokemon" es el recurso.
