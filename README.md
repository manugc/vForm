# vForm
Librería javascript para hacer más fácil el manejo de controles en los formularios de Velneo

Uso:
#### Obtener el widget del control
```javascript
$("CONTROL").control();
```
Está función realmente devuelve lo mismo que hacer:
```javascript
var control = theRoot.dataView().control("CONTROL");
```
Pero al ser una librería el widget queda almacenado dentro de la librería y para acceder hace falta otro método.

#### Obtener el objeto del control
Devuelve el VObjectInfo del control. Con ello tenemos acceso a todas las funciones de la clase
```javascript
$("CONTROL").objecto();
```
```javascript
$("CONTROL").objecto().idRef();
```

#### Obtener el control donde está el foco
Cuando lanzamos por una ejemplo una acción desde un menú, theSender devuelve el formulario y no el edit donde está el foco. Por eso uso está función
```javascript
$().getFocus;
```

#### Rellenar una combobox con una tabla estática
Rellena el combo con la información de la tabla estática. En el caso de tener iconos también serán añadidos.
```javascript
$("COMBOBOX").comboFillWithStaticTable(<idRef de la tabla estática>);
```
