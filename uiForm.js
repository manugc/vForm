(function (global, undefined) {
	var $ = function (control) {
		if ( global === this ) {
			return new $(control);
        }
		
		// Si se ha pasado un nombre, asignamos el objecto
		if(control != undefined){
			$.control = theRoot.dataView().control(control);
		}
		
		$.frm = theRoot.dataView();
		$.frmObj = theRoot.objectInfo();
		
		// constructor code goes here
        return this;
    };
	
	$.fn = $.prototype = {
		control: function(){
			return $.control
		},
		objecto: function(){
			return $.frmObj.subObjectInfo(19, $.control.objectName);
		},
		getFocus: function(){
			var count = $.frm.controlCount();
			var getControl = theRoot.dataView().control;					
			for(var i=0;i<count;i++){
				try{
					var controlFrm = getControl(i);					
					if( ("focus" in controlFrm) && controlFrm.focus ){
						$.control = controlFrm;
						return controlFrm;
					}
				}catch(e){}
			}
		},
		comboFillWithStaticTable: function(tablaEstatica){
			var combo = $.control;
			if(theMainWindow.widgetType(combo) === VMainWindow.WTypeComboBox){		
				for(var i=0, size=theApp.staticTableItemCount(tablaEstatica); i<size; i++){
					icono = theApp.staticTableItemImage(tablaEstatica, i);
					texto = theApp.staticTableItemName(tablaEstatica, i);
					id = theApp.staticTableItemId(tablaEstatica, i);
					
					if(icono === null){				
						combo.addItem(texto, id);
					}else{
						combo.addItem(icono, texto, id);
					}
				}
			}
			return this;
		}
	};

    global.$ = $;
})(this);
