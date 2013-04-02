steal('jquery/model', function() {

	/**
	 * @class Sonicui.Models.Table
	 * @parent index
	 * @inherits jQuery.Model Wraps backend table services.
	 */
	$.Model('Sonicui.Models.Table',
	/* @Static */
	{
		attributes : {
			name : 'string',
			columnLabels : 'Sonicui.Models.ColumnLable',
			dataItems : 'Sonicui.Models.DataItem'
		},
		findAll : "/tables.json",
		findOne : "/tables/{id}.json",
		create : "/tables.json",
		update : "/tables/{id}.json",
		destroy : "/tables/{id}.json"
	},
	/* @Prototype */
	{
		init: function(){
			this.validateColumnlabel();
			this.validateColumnMatchingData();
		},
		setDataItem : function(raw) {
			if (raw.length) {
				for ( var i = 0; i < raw.length; i++) {
					raw[i] = new Sonicui.Models.DataItem(raw[i]);
				}
			} else {
				return [];
			}
			return raw;
		},
		setColumnLabel : function(raw) {
			if (raw.length) {
				for ( var i = 0; i < raw.length; i++) {
					raw[i] = new Sonicui.Models.ColumnLabel(raw[i]);
				}
			} else {
				return [];
			}
			return raw;
		},

		orderColumnlabels : function() {
			if (this.columnLabel.length) {
				var column = null;
				for ( var i = 0; i < this.columnLabel.length; i++) {
					for ( var j = i + 1; j < this.columnLabel.length; j++){
						if (this.columnLabel[i].order > this.columnLabel[j].order) {
							collum = this.columnLabel[i];
							this.columnLabel[i] = this.columnLabel[j];
							this.columnLabel[j] = collum;
						}
					}
				}
			}
		},

		validateColumnlabel : function() {
			if (this.columnLabel.length) {
				this.orderColumnlabels();
				for ( var i = 0; i < this.columnLabel.length; i++) {
					if (this.columnLabel[i].order != (i + 1)) {
						throw new Error("Thứ tự order sai");
					}
				}
			}
		},
		
		validateColumnAndDataSize: function(){
			for ( var int = 0; int < this.dataItem.length; int++) {
				console.log("columsize: ",this.columnLabel.length);
				console.log("datasize: ",this.dataItem[int].properties.length);
				if(this.columnLabel.length > this.dataItem[int].properties.length){
					throw new Error("Column number more than data");
				}
			}
			return true;
		},
		
		validateColumnMatchingData: function() {
			if(this.validateColumnAndDataSize()){
				console.log("bla: ");
				var listName = this.getListNameOfData(this.dataItem[0]);
				console.log("list: ", listName);
				for ( var int = 0; int < this.columnLabel.length; int++) {
					if(listName.indexOf(this.columnLabel[int].alias)==-1){
						console.log("exception");
						throw new Error("Not match name and alias");
					}
				}
				return true;
			}
		},
		
		getListNameOfData: function(dataItem){
			var listName =[];
			for ( var int = 0; int < dataItem.properties.length; int++) {
				listName.push(dataItem.properties[int].name);
			}
			return listName;
		}
	});

})