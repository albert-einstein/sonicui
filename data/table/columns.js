steal('jquery/model', function() {

	/**
	 * @class Sonicui.Models.Property
	 * @parent index
	 * @inherits jQuery.Model Wraps backend property services.
	 */
	$.Model('Sonicui.Models.Columns',
	/* @Static */
	{
		findAll : function() {
			col = [ {
				name : "số điện thoại",
				order : 1,
				alias : "mobile"
			}, {
				name : "địa chỉ",
				order : 2,
				alias : "address"
			}, {
				name : "tên",
				order : 3,
				alias : "name"
			} ];
			return col;

		},
		findOne : "/columns/{id}.json",
		create : "/columns.json",
		update : "/columns/{id}.json",
		destroy : "/columns/{id}.json"
	},
	/* @Prototype */
	{});

})