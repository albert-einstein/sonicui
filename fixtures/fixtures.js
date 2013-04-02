// map fixtures for this application

steal("jquery/dom/fixture", function() {
	$.fixture("properties.json", "//sonicui/fixtures/data/properties.json")
	$.fixture("data_items.json", "//sonicui/fixtures/data/dataitem.json");
	$.fixture("tables.json","//sonicui/fixtures/data/tables.json");
	$.fixture("column_labels.json","//sonicui/fixtures/data/columnlabel.json");
})