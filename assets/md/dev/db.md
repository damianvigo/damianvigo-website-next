# ¿Qué son las base de datos?

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso, es decir guardar y leer datos de una forma ordenada.

![Representación gráfica de bases de datos](https://imgur.com/hIhM7z1.jpg)

---

## Tipos de bases de datos

- **Base de datos relacionales _(SQL)._**
  - Fue desarrollado por _IBM_ en 1970.
  - **Se basan en el modelo relacional y __la prioridad es la integridad de los datos.__**
  - Una forma intuitiva y directa de representar datos en tablas.
  - Cada tabla utiliza filas y columnas.
  - Evita la redundancia de datos.

![Tipos de base de datos](https://imgur.com/bsIAIQ4.png)

- **Base de datos no relacionales _(NoSQL)._**
  - La información se organiza normalmente mediante documentos y es muy útil cuando no tenemos un esquema exacto de lo que se va a almacenar.
  - **Priorizan el acceso rápido a la información por sobre la integridad de los datos.**
---

## _DBMS(Database Management System)_

**Un _DBMS_ se le conoce como el motor que no es mas que un software que funciona como un gestor de base de datos.**. Este permite administrar, acceder, controlar permisos, respaldar, crear informes etc.
Este sistema _(DBMS)_ necesita de alguna manera consultar datos y para ello una alternativa es utilizar _SQL._

---

## Bases de datos relacionales

![Bases de datos Relacionales](https://imgur.com/e6qkoIf.jpg)

_SQL(Structured Query Language)_ es un lenguaje de consulta estructurada, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relaciones.
Organizan la información en tablas como hojas de cálculo en excel.

**Si un _DBMS_ utiliza _SQL_ sería un _RDBMS.(Relational Database Management System)._ "Un sistema de gestión de bases de datos relacionales".**
_SQL_ es el lenguaje más común para realizar consultas en base de datos

## _RDBMS_ populares

- _Oracle_
- _MySQL_
- _MaríaDB_
- _Microsoft SQL Server_
- _PostgreSQL_
- _IBM Db2_
- _Informix_

---

## Bases de datos no relacionales

**En este caso no existen tablas, se puede guardar la información de diferentes maneras, una de ellas son las documentales, es decir en documentos _JSON._**

_JSON(JavaScript Object Notation)_ es un formato ligero de intercambio de datos y se ha convertido en un estándar.
Podemos estructurar la información con la sintaxis de _javascript_ que se usan para los objetos.

**El tipo de base de datos documental más usado es _MongoDB_** (aquí tengo guardados mis artículos del blog).

![Estructura de un documento en MongoDB](https://imgur.com/DuqpxiA.png)

## Motores de bases de datos _NoSQL_

- _MongoDB_
- _Azure Cosmos DB_
- _ArangoDB_
- _Google Cloud Firestore_
- _Amazon DynamoDB_
- _Redis_

---

## ¿Cuál es mejor, _SQL_ o _NoSQL_?

![SQL vs NoSQL](https://imgur.com/n4mZ7nc.jpg)

Ninguna es mejor que otra, todo depende de las necesidades del proyecto.

Para sistemas financieros, reservas de hoteles, vuelos o _e-commerce_ se utiliza _SQL_ por la integridad de los datos, por otro lado _NoSQL_ será mas eficiente de utilizar en redes sociales, en búsquedas como en _Google,_ en sistemas de recomendaciones o en sistemas de rutas como _Uber_, por su velocidad de acceso a los datos.