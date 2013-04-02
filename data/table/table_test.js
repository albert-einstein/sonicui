steal('funcunit', 'sonicui/data/table/columns.js',
		'sonicui/data/table/dataitem.js', 'sonicui/fixtures').then(function() {

	module("Sonicui.Data.Table", {
		setup : function() {
			S.open("//sonicui/data/table/table.html");
		}
	});
	test("model update", function() {
		item = new Sonicui.Models.DataItem({
			id : "23",
			properties : [ {
				name : "name",
				value : "Nghia Luong",
				type : "string"
			} ]
		});
		item.save();
	})
});