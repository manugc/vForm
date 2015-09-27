(function (global, undefined) {
	importClass("VImage");

	/* Helpers */
	
	// Alias de hasOwnProperty
	function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
	
	// Extiende el objeto a con con el objecto b
	function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }
	/* Helpers */
	
    var $ = function (control) {		
        if (global === this) {
            return new $(control);
        }

        // Si se ha pasado un nombre, asignamos el widget
        if (control != undefined) {
            $.widget = theRoot.dataView().control(control);
			switch(theMainWindow.widgetType($.widget)){
				case VMainWindow.WTypeComboBox:
					// Extendemos los ComboBox
					extend($.widget, ComboBox);
					break;
			}
			return $.widget;
        }else{
			// Si no se ha pasado nada, devolvemos el objeto principal
			this.frm = theRoot.dataView();
			this.frmObj = theRoot.objectInfo();
			return this;
		}
    };	

    $.fn = $.prototype = {
        getWidget: function () {
            return $.widget;
        },
        objecto: function () {
            return $.frmObj.subObjectInfo(19, $.widget.objectName);
        },
        getFocus: function () {
            var count = $.frm.controlCount();
            var getControl = theRoot.dataView().control;
            for (var i = 0; i < count; i++) {
                try {
                    var controlFrm = getControl(i);
                    if (("focus" in controlFrm) && controlFrm.focus) {
                        $.control = controlFrm;
                        return controlFrm;
                    }
                } catch (e) {}
            }
        }
    };
	
	// Extendemos los ComboBox
	var ComboBox = {
		currentData: (function(){
			this.itemData(this.currentIndex);
		}),
		comboFillWithStaticTable: function (tablaEstatica) {
			var combo = this;
			for (var i = 0, size = theApp.staticTableItemCount(tablaEstatica); i < size; i++) {
				var icono = theApp.staticTableItemImage(tablaEstatica, i);
				var texto = theApp.staticTableItemName(tablaEstatica, i);
				var id = theApp.staticTableItemId(tablaEstatica, i);

				if (icono === null) {
					combo.addItem(texto, id);
				} else {
					combo.addItem(icono, texto, id);
				}
			}
            return this;
		},
		comboFillWithJSON: function(data){
			var combo = this;
			data.forEach(function(elemento){
				alert(JSON.stringify(elemento));
				alert(elemento.icono);
				
				var icono = elemento.icono;
				var texto = elemento.texto;
				var id = elemento.id;
				
				var image = new VImage();
				image.loadResource(icono);
				
				if (image === null) {
					combo.addItem(texto, id);
				} else {
					combo.addItem(image, texto, id);
				}				
			});
			return this;
		}
	}
		
    global.$ = $;
})(this);
