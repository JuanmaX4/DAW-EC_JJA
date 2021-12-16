# DAW-EC_JJA
 
# Analisis Intermedio JS5 📊

## ¿Que es TypeScript?
___
~~~
[JavaScript] es uno de los lenguajes más populares, en parte porque ha evolucionado y mejorado a pasos agigantados en los últimos años.
~~~
Sin embargo, `Javascript` en algún punto fue un lenguaje que presentaba muchos problemas para bases de código grandes, `aplicaciones de gran escala y proyectos con muchos años de desarrollo`.

En 2012 en `Javascript` no habían `clases`, ni `módulos`, el `ecosistema` carecía de `herramientas que optimizaran el flujo de desarrollo`, derivado precisamente por las carencias del lenguaje mismo.

2012 fue el año en que `Typescript` apareció (luego de 2 años de desarrollo), una solución de `Microsoft` para el desarrollo de aplicaciones con `Javascript` a gran escala, para ellos y para sus clientes. [Steve Lucco] y un equipo de más de 50 personas que incluía a [Anders Hejlsberg], [Lead Architect] de `C#` y creador de `Delphi` y `Turbo Pascal` desarrollaron `Typescript` en `Microsoft`, un proyecto que originalmente se conoció como `Strada`.

Originalmente, productos como `Bing` y `Office 365` despertaron en `Microsoft` la necesidad de una mejora a `JavaScript` que permitiera construir productos escalables.

`Typescript` es la solución a muchos de los problemas de `JavaScript`, está pensado para el desarrollo de aplicaciones robustas, implementando características en el lenguaje que nos permitan desarrollar herramientas más avanzadas para el desarrollo de aplicaciones.


## Diferencias entre JavaScript y Typescript
___

`JavaScript` es un lenguaje de `secuencias de comandos dinámico` que se utiliza para crear páginas web interactivas, por lo que no está diseñado para aplicaciones complejas. En cambio, `TypeScript` es un lenguaje estático orientado solamente a objetos.

- `TypeScript` tiene `escritura estática`, mientras que `JavaScript` no.

- `TypeScript` admite `parámetros opcionales` para funciones donde `JavaScript` no lo hace.   

~~~
Es necesario compilar el código [TypeScript], mientras que en [Javascript] no es necesario compilar.
~~~

`TypeScript` utiliza conceptos como tipos e interfaces para describir los datos que se utilizan. Ningún concepto de este tipo está disponible con `JavaScript`.

## JavaScript vs. TypeScript: ¿cuál es mejor?
___
Después de conocer las diferencias de `JavaScript` y `TypeScript`, podemos decir que si eres un desarrollador experimentado y estás trabajando en proyectos de `codificación relativamente pequeños`, `JavaScript` es el ideal para ti. Sin embargo, si tienes los conocimientos previos de `JavaScript` y un equipo de [desarrolladores con experiencia], `TypeScript` es la opción perfecta. ¡Conocer la magia de qué es `TypeScript` te ayudará en cualquier proyecto que ejecutes!

## ¿Que es una matriz? 
___
El `objeto` con que se representan las conexiones en la anterior página es una `matriz`. En general, una matriz es un conjunto ordenado en una `estructura de filas y columnas`. Los `elementos` de este conjunto pueden ser `objetos matemáticos de muy variados tipos`, aunque de forma particular, trabajaremos exclusivamente con matrices formadas por números reales.

~~~
Normalmente las matrices son designadas por letras mayúsculas.
~~~

Los elementos de una `matriz` se identifican por la `fila` y la `columna` que ocupan. Así, designaremos por `a32` el elemento que está situado en la `tercera fila` y `segunda columna de la matriz A`.

~~~
El número de filas y columnas que tiene una matriz se llama dimensión de la matriz.
~~~

Dos `matrices` son [iguales] si son de igual `dimensión` y [coincide] el `valor` de los `elementos` que ocupan la `misma posición en ambas`.

## Compilación codigo
___
Es el proceso por el cual el `código fuente` de un `programa escrito` en un `lenguaje de programación “A”` se traduce a código fuente de un `lenguaje de programación “B”`.

El caso más común es cuando el `código origen` está escrito en un `lenguaje de programación de “alto nivel”` `(C, Java, PHP u otros lenguajes de tercera generación)` y se [traduce] a `código máquina` que pueda ejecutar directamente el ordenador. Pero hay muchas otras posibilidades como pasar por una representación intermedia en `bytecode` como es el caso típico de `Java`.

## Transpirar codigo
___
La transpilación es un caso particular de la [compilación]. Es decir, todo transpilador es también un compilador pero al revés no es cierto, hay compiladores que no se pueden considerar transpiladores. ¿Y cuál es la característica que convierte un compilador en transpilador?: la relación entre los lenguajes origen y destino de la traducción.
~~~
Me explico, si el compilador traduce [código] entre (dos lenguajes) que están al mismo [nivel de abstracción] entonces, estamos ante un (transpilador). Si traduce [código] entre lenguajes de diferente [nivel de abstracción] (típicamente de más alto a más bajo nivel) entonces no lo es.
~~~

![img](./img/transpilacion.png)

Una traducción de `Java` a `Bytecode` sería una [compilación]. Una traducción de `TypeScript` a `JavaScript` sería en cambio una transpilación ya que `TypeScript` no deja ser una variante de `JavaScript` (al qué añade un sistema de tipos opcional, de hecho todo programa `JavaScript` es ya de entrada un programa `TypeScript` válido.

## UML Diseño Intermedio JS5 🖼
___
![uml](./intermedio/img/uml.PNG)
___