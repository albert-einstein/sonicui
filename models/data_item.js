steal('jquery/model', function() {

	/**
	 * Chứa danh sách các thuộc tính của một item: [ { na } ]
	 * 
	 * @class Sonicui.Models.DataItem
	 * @parent index
	 * @inherits jQuery.Model Wraps backend data_item services.
	 */
	$.Model('Sonicui.Models.DataItem',
	/* @Static */
	{
		// findAll : "/data_items.json",
		findAll : function(params, success, error) {
			success = function(data) {
				for ( var i = 0; i < data.length; i++) {
					data[i] = new Sonicui.Models.DataItem(data[i]);
				}
				return data;
			}
			return $.get("/data_items.json", params, success, "json");
		},
		findOne : "/data_items/{id}.json",
//		create : "/data_items.json",
		update : "/data_items/{id}.json",
		destroy : "/data_items/{id}.json"
	},
			/* @Prototype */
			{
				init : function() {
					this.convertToArray();
					this.validate();
				},
				// get gia trị của property theo tên
				getProperty : function(name) {
					property = this.getPropertyName(name);
					return property.value;
				},
				// set giá trị cho property
				setProperty : function(name, value) {
					property = this.getPropertyName(name);
					this.validateType(property, value);
					property.value = value;
				},
				// lấy ra một property theo tên của nó
				getPropertyName : function(name) {
					for ( var i = 0; i < this.properties.length; i++) {
						if (name == this.properties[i].name) {
							return this.properties[i];
						}
					}
					// throw new Error("Not Exist Property [" + name + "]");
					// nếu thuộc tính không tồn tại thì hiển thị ra [empty]
					return {
						value : "[empty]",
						type : "string"
					}
				},
				validate : function() {
					// data item cần phải có danh sách thuộc tính
					if (!this.properties) {
						throw new Error("Not Exist Properties");
					}
					// validate type properties
					for ( var i = 0; i < this.properties.length; i++) {
						this.validateType(this.properties[i],
								this.properties[i].value);
					}
					// validte unique properties
					names = [];
					for ( var i = 0; i < this.properties.length; i++) {
						if (names.indexOf(this.properties[i].name) != -1) {
							throw new Error("Duplicate Property ["
									+ this.properties[i].name + "]");
						} else {
							names.push(this.properties[i].name);
						}
					}
				},
				// kiểm tra xem value có kiểu hợp lệ không
				validateType : function(property, value) {
					if ((property.type != "objectHtml")
							&& (typeof value != property.type)) {
						throw new Error("Invalid Type Property ["
								+ property.name + "]");
					}
				},
				
				convertToArray: function(){
					if(!(this.properties instanceof Array)){
						var arra = [];
						for ( var key in this.properties) {
							arra.push(this.properties[key]);
						}
						this.properties = arra;
					}
				}
			});

})