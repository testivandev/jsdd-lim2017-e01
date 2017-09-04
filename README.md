# JS Deep Dive

En este repositorio encontrarás los ejercicios a realizar durante el curso de
`Educación Continua - JS Deep Dive`.

## Ejercicios

Los ejercicios están seccionados en carpetas por lección del curso, siguiendo la
estructura que se muestra a continuación:

```
```

### ECMAScript 6

#### 1. Closing over scope

Este ejercicio es un típico error en JavaScript. Creamos un número de funciones
dentro de un ciclo, y referimos a una variable fuera de las funciones. Al final,
todas estas funciones terminan referenciando a la misma variable, que contiene
el valor del último incremento de la variable `i` (en este caso 10). Por lo
tanto, `callbacks[2]` no mostrará el valor de 2, sino mostrará 10 al igual que
todas las demás funciones

¿Cómo resolverías este error con `ES6`?

```
var callbacks = []
for (var i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]()
```
