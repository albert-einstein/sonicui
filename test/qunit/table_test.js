steal("funcunit/qunit", "sonicui/fixtures", "sonicui/models/table.js",
		function() {
			var table = {};
			module("Model: Sonicui.Models.Table", {
				setup : function() {
					table = new Sonicui.Models.Table({
						name : "Bệnh viện",
						columnLabel : [ {
							"name" : "ID",
							"order" : 1,
							"alias" : "id"
						}, {
							"name" : "Tên bệnh viện",
							"order" : 2,
							"alias" : "name"
						}, {
							"name" : "Địa chỉ",
							"order" : 3,
							"alias" : "address"
						} ],
						dataItem : [{
							"id" : 1,
							"properties" : [ {
								"name" : "id",
								"value" : "3",
								"type" : "string"
							}, {
								"name" : "name",
								"type" : "string",
								"value":"Benh vien 103"
							}, {
								"name" : "address",
								"value" : "Hai Bà Trưng,Hà Nội",
								"type" : "string"
							} ]
						}]
					});
				}
			})

	// Test thứ tự oder
	 test("Check order collumlabel", function() {
		 expect();
		 stop();
		 raises(function() {
			 newtable = new Sonicui.Models.Table({
				 name : "new table",
				 columnLabel : [ 
					 {
						 "name" : "tên bênh viện",
						 "order" : 1,
						 "alias" : "name"
					 },
					 {
						 "name" : "dia chi",
						 "order" : 3,
						 "alias" : "address"
					 }
				 ],
				 dataItem : [ {
					 "id" : 1,
					 "properties" : [ {
						 "name" : "name",
						 "value" : "bệnh viện bạch mai",
						 "type" : "string"
					 } ]
				 } ]
			 });
		 }, function(err) {
		 return err.message == "Thứ tự order sai";
		 }, "order negative invalid");
		 start();
		
	 })
				
	 // Test kiểm tra convert đúng dữ liệu DataItem
	 // Test sau khi convert thì getProperty() phải có
	 test("Check convert dataitem", function() {
		 expect(4);
		 stop();
		 newtable = new Sonicui.Models.Table({
			 name : "new table",
			 columnLabel : [ {
				 "name" : "tên bênh viện",
				 "order" : 1,
				 "alias" : "name"
			 } ],
			 dataItem : [ {
				 "id" : 1,
				 "properties" : [ {
					 "name" : "name",
					 "value" : "bệnh viện bạch mai",
					 "type" : "string"
				 }]
			 }]
		 });
		 ok(newtable.dataItem[0]);
		 ok(newtable.dataItem[0] instanceof Sonicui.Models.DataItem);
		 ok(newtable.dataItem[0].getProperty);
		 equals(newtable.dataItem[0].getProperty("name"),"bệnh viện bạch mai");
		 start();
	 })
	 
	 // Test kiểm tra convert đúng dữ liệu ColumnLabel
	 test("Check convert columnLabel", function() {
		 expect();
		 stop();
		 newtable = new Sonicui.Models.Table({
			 name : "new table",
			 columnLabel : [ {
				 "name" : "tên bênh viện",
				 "order" : 1,
				 "alias" : "name"
			 },{
				 "name" : "Dia chi",
				 "order" : 2,
				 "alias" : "address"
			 } ],
			 dataItem : [ {
				 "id" : 1,
				 "properties" : [ {
					 "name" : "name",
					 "value" : "bệnh viện bạch mai",
					 "type" : "string"
				 },
				 {
					 "name" : "address",
					 "value" : "Bạch Mai - Hà Nội",
					 "type" : "string"
				 }]
			 }]
		 });
		 ok(newtable.columnLabel[0]);
		 ok(newtable.columnLabel[0] instanceof Sonicui.Models.ColumnLabel);
		 ok(newtable.columnLabel[1]);
		 ok(newtable.columnLabel[1] instanceof Sonicui.Models.ColumnLabel);
		 start();
	 })
	
	 
//	 kiểm tra alias ánh xạ sang data đã chuẩn chưa
	 test("check alias data", function() {
		 expect();
		 stop();
		 raises(function() {
			 newtable = new Sonicui.Models.Table({
				 name : "new table",
				 columnLabel : [ 
					 {
						 "name" : "tên bênh viện",
						 "order" : 1,
						 "alias" : "name"
					 },
					 {
						 "name" : "dia chi",
						 "order" : 2,
						 "alias" : "address"
					 }
				 ],
				 dataItem : [ {
					 "id" : 1,
					 "properties" : [{
						 "name" : "stt",
						 "value" : "số thứ tự",
						 "type" : "string"
					 }, 
					 {
						 "name" : "name",
						 "value" : "bệnh viện bạch mai",
						 "type" : "string"
					 } ]
				 } ]
			 });
		 }, function(err) {
		 return err.message == "Not match name and alias";
		 }, "column and data not matching");
		 start();
	 })
	 
	 test("check column and data size", function() {
		expect();
		stop();
		raises(function() {
			 newtable = new Sonicui.Models.Table({
				 name : "new table",
				 columnLabel : [ 
					 {
						 "name" : "tên bênh viện",
						 "order" : 1,
						 "alias" : "name"
					 },
					 {
						 "name" : "dia chi",
						 "order" : 2,
						 "alias" : "address"
					 }
				 ],
				 dataItem : [ {
					 "id" : 1,
					 "properties" : [ {
						 "name" : "name",
						 "value" : "bệnh viện bạch mai",
						 "type" : "string"
					 } ]
				 } ]
			 });
		 }, function(err) {
			 return err.message == "Column number more than data";
		 }, "column more than data");
		 start();
	})
})