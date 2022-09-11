# CommonJS | ECMAScript modules

En el ecosistema de _javascript_ tenemos dos formas de importar y exportar módulos (acceder a otros archivos).
**En el _frontend_ por una lado tenemos el _import_ y _export_ y en el _backend_ con _Nodejs_ tenemos _CommonJS._**

La forma en la que _Nodejs_ maneja sus módulos desde el 2009 es _CommonJS_.

_CommonJS_ a quedado anticuado debido a las nuevas características de javascript sin embargo aún sigue vigente y es bastante utilizado.

Recordemos como funciona _CommonJS_.

Supongamos que tenemos un archivo _my_module.js_ y queremos exportar

```node
<!-- my_module.js | exportando -->
function myExportFunction() {
  return 'Soy una función exportada';
}
```

Para exportar podemos crear una propiedad del objeto y asignar en este caso la función que tenemos de ejemplo.

```node
module.exports.myExportFunction = myExportFunction;
```

o exportando un objeto directamente

```node
module.exports = {
  myExportFunction,
};
```

En otro archivo _(index.js)_ recibimos el módulo

```node
<!-- index.js | importando -->
const myImport = require('./my_module.js')
```

Accedemos al objeto y ejecutamos la función

```node
myImport.myExportFunction();
```

Si venís del _frontend_ seguro estas familiarizado con la sintaxis de import y export asi que acá viene lo interesante, para aplicarlo en node, antes tenemos que agregar a nuestro _package.json_ la siguiente linea.

```json
"type": "module"
```

Continuando con nuestro ejemplo, solo debemos agregar la palabra reservada _export_.

```node
<!-- my_module.js | exportando -->
export function myExportFunction() {
  return 'Soy una función exportada';
}
```

También podemos exportarla por defecto.

```node
export default myExportFunction;
```

Recibimos el módulo y acá usamos _import_ y _from._
Destructuramos, es decir extraemos la propiedad del objeto.

```node
<!-- index.js | importando -->
import { myExportFunction } from './module/my_module.js'
```

En el caso de la función por defecto podemos renombrarla, es opcional.

```node
import myExportDefaultFunction from './module/my_module.js';
```

Podemos ver los resultados:

```node
console.log(myExportFunction(), myExportDefaultFunction());
```

## Fetch en Nodejs

Es posible utilizar la api de fetch, de momento es experimental y funciona con las útimas versiones.

```node
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json)
  .then((data) => console.log(data));
```

---

```node
async function loadData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

loadData();
```

**Algo interesante que sucede cuando agregamos en nuestro _package.json_**

```json
"type": "module"
```

**es que podemos dejar de usar una función _async_ para pedir los datos**

```node
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
```
