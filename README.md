# vForm
Librería javascript para hacer más fácil el manejo de controles en los formularios de Velneo. Permite hacer chain, ya que las funciones añadidas devuelve en la medida de los posible el propio objeto.

Uso:
#### Obtener el widget del control
```javascript
$("CONTROL").getWidget();
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
## ComboBox
#### Obtener la información actual de un ComboBox
Actualmente no se puede obtener de manera directa el itemData de un combo, así se crea la función que lo devuelve directamente
```javascript
var comboData = $("CB_EST").currentData;
```

#### Rellenar una combobox con una tabla estática
Rellena el combo con la información de la tabla estática. En el caso de tener iconos también serán añadidos.
```javascript
$("CB_EST")
	.comboFillWithStaticTable((<idRef de la tabla estática>)
	.insertItem(0, "Todos", "TT");
```

#### Rellenar una combobox con una un json
Rellena el combo con la información de la tabla estática. En el caso de tener iconos también serán añadidos.
```javascript
data = [
{
	id: "TT",
	texto: "Todos",
},
{
	id: "P",
	texto: "Pendientes",
	icono: "AkedisIncludes.dat/BOLA_ROJA"
},
{
	id: "P",
	texto: "Pagadas",
	icono: "AkedisIncludes.dat/BOLA_VERDE"
}
]

$("CB_EST").comboFillWithJSON(data)
```
