# ¿Qué es Fluid Design?

Es una estrategia de diseño para multidispositivos. 

En el diseño _web_ se usan varias estrategias para lograr una interfaz _responsive_.
Entre ellas se encuentran:

- _Adaptive Design_
- _Responsive Design + Server Side Components_ (RESS)
- _Responsible Responsive Design_
- _Fluid Design_

[![Responsive Design](https://res.cloudinary.com/marcomontalbano/image/upload/v1655913221/video_to_markdown/images/youtube--jUQ2-C5ZNRc-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=jUQ2-C5ZNRc&t=52s "")

Las variantes anteriormente mencionadas funcionan muy bien aunque desde que conocí _fluid design_ lo aplico siempre en mis proyectos, **ya que me encanta la versatilidad para adaptarse a diferentes pantallas haciendo uso de la menor cantidad de _mediaqueries_ posibles**, sobre todo en tipografías donde se aplican diferentes cambios y podemos llegar a tener demasiadas _mediaqueries_.

![Responsive Design](https://i.imgur.com/i6UgYEb.png)

Con _fluid design_ y solo unas simples líneas de código, los elementos pueden escalar de una manera uniforme en sus diferentes tamaños.

Fue propuesto por [Trys Mudford](https://www.trysmudford.com/) en 2020 y su ejecución es muy simple. 

[![Utopia proyect](https://res.cloudinary.com/marcomontalbano/image/upload/v1655992412/video_to_markdown/images/youtube--DDuGtN-GakA-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=DDuGtN-GakA "Utopia proyect")

En [Utopia](https://utopia.fyi) podemos encontrar una calculadora de escala y haciendo uso de la función _clamp_ nativa de _css_ junto con las unidades del _viewport_ lograremos una interfaz _responsive_ fácilmente.

Para contenedores:

~~~
.box-fluid {
    width: clamp(400px, 60vw, 600px);
    height: clamp(200px, 30vh, 300px);
}
~~~

Para tipografías:

```
:root {
  --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
}

.step-0 {
  font-size: var(--step-0);
}
```

**En mi sitio _web_ aplico esta estrategia tanto para tipografías, iconos y contenedores de botones.**