steal('jquery/model', function() {

	/**
	 * @class Sonicui.Models.Property
	 * @parent index
	 * @inherits jQuery.Model Wraps backend property services.
	 */
	$.Model('Sonicui.Models.DataItem',
	/* @Static */
	{
		findAll : function() {
			datas = [ {
				"id" : 1,
				"properties" : [ {
					"name" : "id",
					"value" : "1",
					"type" : "string"
				}, {
					"name" : "name",
					"value" : "bệnh viện Bạch Mai",
					"type" : "string"
				}, {
					"name" : "address",
					"value" : "Hai Bà Trưng,Hà Nội",
					"type" : "string"
				}, {
					"name" : "mobile",
					"value" : "0123456789",
					"type" : "string"
				} ]
			}, {
				"id" : 2,
				"properties" : [ {
					"name" : "id",
					"value" : "2",
					"type" : "string"
				}, {
					"name" : "name",
					"value" : "bệnh viện Nhi",
					"type" : "string"
				}, {
					"name" : "address",
					"value" : "Cầu Giấy,Hà Nội",
					"type" : "string"
				}, {
					"name" : "mobile",
					"value" : "0123456789",
					"type" : "string"
				} ]
			}, {
				"id" : 3,
				"properties" : [ {
					"name" : "id",
					"value" : "3",
					"type" : "string"
				}, {
					"name" : "name",
					"value" : "bệnh viện Phụ Sản",
					"type" : "string"
				}, {
					"name" : "address",
					"value" : "Đống Đa,Hà Nội",
					"type" : "string"
				}, {
					"name" : "mobile",
					"value" : "0123456789",
					"type" : "string"
				} ]
			} ];
			
//			for(var i=0;i<datas.length;i++){
//				datas[i]=new Sonicui.Models.DataItem(datas[i]);
//			};
			return datas;
		},
		findOne : "/columns/{id}.json",
		create : "/columns.json",
		update : "/columns/{id}.json",
		destroy : "/columns/{id}.json"
	},
	/* @Prototype */
	{
		init : function() {
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
			throw new Error("Not Exist Property [" + name + "]");
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
		}
	});

})