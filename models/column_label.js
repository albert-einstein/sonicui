steal('jquery/model', function() {

	/**
	 * @class Sonicui.Models.ColumnLabel
	 * @parent index
	 * @inherits jQuery.Model Wraps backend column_label services.
	 */
	$.Model('Sonicui.Models.ColumnLabel',
	/* @Static */
	{
		attributes : {
			order : 'number'
		},
		convert : {
			number : function(raw) {
				if (typeof raw == 'number') {
					return parseInt(raw);
				} else if (typeof raw == 'string') {
					if (isNaN(parseInt(raw))) {
						throw new Error("Order khong hop le");
					} else {
						return parseInt(raw);
					}
				}
			}
		},
		// findAll:"/column_labels.json",
		findAll : function(params, success, error) {
			// return $.get("/column_labels.json",function(data){
			// return data;
			// console.log("get: ", data);
			//				
			// },"json");
			result = $.get("/column_labels.json",this.callback("sort"), "json");
			success(result);
			return result;
		},
		// sắp xếp mảng cột theo thứ tự order của cột
		sort : function(columns) {
			console.log("columns", columns);
//			 for ( var i = 0; i < columns.length; i++) {
//			 for ( var j = i + 1; j < columns.length; j++) {
//			 if (columns[j].order < columns[i].order) {
//			 temp = columns[i];
//			 columns[i] = columns[j];
//			 columns[j] = temp;
//			 }
//			 }
//			 }
			return columns;
		},
		findOne : "/column_labels/{id}.json",
		create : "/column_labels.json",
		update : "/column_labels/{id}.json",
		destroy : "/column_labels/{id}.json"
	},
	/* @Prototype */
	{
		init : function() {
			this.validateOrder();
		},

		validateOrder : function() {
			var neworder = this.order;
			if (parseInt(neworder) < 0) {
				throw new Error("Order am");
			} else {
				return true;
			}
		}
	});
})