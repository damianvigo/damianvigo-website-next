# ¿Qué es una metodología ágil?

Antes de hablar de _scrum_ debemos saber que es una metodología ágil, ya que _scrum_ es una de muchas metodologías ágiles y una de las más utilizadas.

**Una metodología ágil es una forma de trabajar que acepta el cambio y se adapta con rapidez y flexibilidad entregando productos que respondan a las necesidades del cliente generando valor al usuario.**

Existe varias metodologías ágiles

- _Kanban_
- _Extreme Programming_
- _Scrum_
- _Pair programming_

Estas metodologías nacieron en la industria del desarrollo de _software_ porque detectaron que la forma tradicional de trabajo no respondía de una forma eficiente y rápida a los tiempos modernos, veamos algunas diferencias entre ellas.

## Diferencias entre desarrollo tradicional y ágil

1. **Grupos de trabajo**
   - **Tradicional**
     - Puede generar dificultades como saber quién está trabajando en qué.
   - **Ágil**
     - Equipos de trabajo más pequeños con un tiempo de desarrollo corto ejemplo: 2 semanas (1 iteración).
       <br />
2. **¿Cómo se manejan los requerimientos?**
   - **Tradicional**
     - Grandes listas de requerimientos
   - **Ágil**
     - Pequeñas listas de requerimientos que vamos a trabajar durante la iteración.
       <br />
3. **Generación de valor**
   - **Tradicional**
     - Trabajar toda la lista de requerimientos y al final mostrar al cliente con lo que creemos que es el producto terminado.
   - **Ágil**
     - Entregar los pequeños avances al cliente en cada iteración para que pueda ver los cambios en el producto poco a poco.

---

### ¿Qué es _Scrum_?

![scrum](https://i.imgur.com/UlaEBSZ.png)

**Es un marco de trabajo por el que las personas pueden abordar problemas complejos adaptativos, a la vez que se entregan productos del máximo valor posible productiva y creativamente.**

Además se puede plantear cualquier tipo de problema y es flexible para proyectos grandes o pequeños.

**Esencia**

- Equipo pequeño de personas.
- El equipo individual es altamente flexible y adaptativo.

**Teoría de _Scrum_**

- Se basa en empirismo
- Se basa en la experiencia, para tomar decisiones, se basa en lo que se conoce.

**Pilares de _Scrum_**

- Transparencia
  - A través de la comunicación, cualquier persona puede saber el estado actual del proyecto.
- Inspección
  - Toda persona puede observar los artefactos (requerimientos) y validar si están bien definidos o no en cualquier parte del proceso.
- Adaptación
  - Cualquier involucrado en el proceso puede reconocer cambios e implementarlos rápidamente.

**Valores de _Scrum_**

- Compromiso
  - Todos los miembros del equipo se enfocaran en cumplir los objetivos establecidos en cada iteración.
- Coraje
  - Cualquier miembro en el equipo puede realizar cualquier tarea planteada en la iteración.
- Enfoque
  - Todos los miembros del equipo están comprometidos a cumplir el objetivo actual
- Apertura
  - Abiertos a escuchar a cualquier persona relacionada en el proceso.
- Respeto
  - Apertura a la diferencia de puntos de vista.

---

### Roles en _Scrum_

![roles](https://i.imgur.com/lW6PUZM.jpg)

Hablemos mas a detalle de cada uno

#### _Product Owner_

El único encargado de la lista del producto, decide que se va a trabajar primero, encargado de despejar dudas al equipo de desarrollo de como el cliente desea el producto de forma detallada.

1. Capacidad de explicar en que consiste cada funcionalidad
2. Decide en que orden se van a realizar los diferentes desarrollos o funcionalidades.
3. Dar claridad en los objetivos del desarrollo.
4. Saber cuales tareas se han realizado y cuales faltan, y mostrar hacia donde van.
5. Asegurar que el equipo de desarrollo conoce los elementos de la lista del producto.

#### **_Scrum Master_**

Es el responsable de promover y apoyar _scrum_ dentro del equipo, ayudando a todos a entender la teoría, práctica, reglas y valores de _scrum_. Si hay algo que no se está haciendo bien debe decirnos “podemos mejorar”.

Además también es el encargado de resolver impedimentos que tenga el equipo de desarrollo.

Es un líder que está al servicio del equipo _scrum_, y es el encargado de ayudar a entender a los externos al equipo _scrum_ cuando deben interactuar con el equipo.

#### _Dev Team_

Consiste en un grupo de profesionales que realizan el trabajo de entregar un incremento de producto “Terminado” que potencialmente se pueda poner en producción al final de cada _sprint_.

La organización debe poder empoderar al _Dev Team_ para que estos se organicen y gestionen su propio trabajo. Deben darles la confianza al equipo.

- Auto-organizados.
- Multifuncionales
- No tienen títulos
- No hay subequipos
- Solo se pude modificar al terminar el _sprint_. (No se puede modificar al equipo de desarrollo hasta que acabe el _sprint_)

El equipo puede ser de 3 a 9 personas sin tomar en cuenta el _product owner_ y al _scrum master_. Al menos que uno de esos dos hagan código o diseño y que este dentro de sus funciones diarias hacer estas actividades.

### _Product Backlog_

Es la lista ordenada de todo lo que se requiere implementar en el producto y es la única fuente de requisitos para cualquier cambio o mejora a realizarse sobre el producto. El _product backlog_ se considera un cuerpo vivo ya que está en completo cambio y en proceso de nuevas definiciones.

Se compone de:

- Historias de usuario
  - Deben poderse completar en un _sprint_, sin embargo, **si una funcionalidad o requisito es demasiado extenso se puede crear una épica**.
    Las cuales son actividades que requieren más de un _sprint_ para su culminación. De está manera una épica se compone de varias historias de usuario.

**Las historias de usuarios son los elementos más específicos de la lista de producto.**

**No se tienen que confundir con los requerimientos si no que es la funcionalidad que el usuario quiere realizar.**

![lista de producto ciclo con el sprint](https://i.imgur.com/xd2lpSE.png)

---

### _Sprint_

Dentro de las historias de usuarios habrá muchas tareas entonces se hacen una serie de ciclos de _sprints_ para completarlas.

El periodo de tiempo generalmente son de dos semanas donde como objetivo se debe conseguir un incremento del producto que aporte valor al cliente.

#### _Sprint planning_

El sprint planning es la ceremonia donde definimos las historias de usuario que se van a desarrollar durante el _sprint_. Debe estar presente todo el equipo de _scrum_.

#### _Daily Scrum_

Es una reunión diaria de no más de 15 minutos, donde participa el equipo de desarrollo con el objetivo de inspeccionar el progreso hacia el objetivo del _sprint_.

#### _Sprint Review_

La Revisión (_Sprint Review_) es una ceremonia donde interactuamos con el cliente, el objetivo es tener retroalimentación rápida, normalmente se hace en el último día del _sprint_ y revisaremos que hemos aprendido, le mostraremos al cliente que logramos desarrollar

Se puede mostrar por partes durante la semana o todo al final del _sprint_. Ojo aquí no mostramos presentaciones o documentos, aquí solo se muestra el producto.

Si no se logran cumplir los objetivos, tenemos que ser siempre transparentes y tratar de resolverlo para el siguiente _sprint_. Es una reunión informal y abierta al diálogo, no es una reunión de seguimiento.
