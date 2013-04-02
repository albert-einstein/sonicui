steal("funcunit/qunit", "sonicui/fixtures", "sonicui/models/data_item.js",
	function() {
	    var item = {};
	    module("Model: Sonicui.Models.DataItem", {
		setup : function() {
		    item = new Sonicui.Models.DataItem({
			"id" : 1,
			"properties" : [ {
			    "name" : "id",
			    "value" : "3",
			    "type" : "string"
			}, {
			    "name" : "name",
			    "value" : "bệnh viện Bạch Mai",
			    "type" : "string"
			}, {
			    "name" : "address",
			    "value" : "Hai Bà Trưng,Hà Nội",
			    "type" : "string"
			} ]
		    });
		}
	    })
	    test("findAll Test", function() {
		expect(5);
		stop();
		Sonicui.Models.DataItem.findAll({}, function(data_items) {
		    ok(data_items, "exist data item list")
		    ok(data_items.length, "data not empty")
		    equal(data_items.length, 3, 'has 3 data item');
		    ok(data_items[0].id, "has id property");
		    ok(data_items[0].properties, "has properties property");
		    start();
		});

	    })
	    // test lấy các giá trị của các thuộc tính
	    test("get value valid property Test", function() {
		expect(6);
		stop();
		// kiểm tra các thuộc tính tồn tại
		ok(item.getProperty("id"), "has id property");
		ok(item.getProperty("name"), "has name property");
		ok(item.getProperty("address"), "has address property");
		// nhận đúng giá trị các thuộc tính
		equal(item.getProperty("id"), "3", "get value id right");
		equal(item.getProperty("name"), "bệnh viện Bạch Mai",
			"get value name right");
		equal(item.getProperty("address"), "Hai Bà Trưng,Hà Nội",
			"get value address right");
		start();
	    })
	    // test get các thuộc tính không tồn tại
	    test("get value invalid property test", function() {
		expect();
		stop();
		// nếu không tồn tại trả ra ngoại lệ
		raises(function() {
		    item.getProperty("username");
		}, function(err) {
		    return err.message === 'Not Exist Property [username]';
		}, "missing username property");

		raises(function() {
		    item.getProperty(null);
		}, function(err) {
		    return err.message === 'Not Exist Property [null]';
		}, "missing null property")
		start();
	    })
	    // test set value hợp lệ cho thuộc tính
	    test("set valid value Test", function() {
		expect(1);
		stop();
		item.setProperty("name", "Bệnh viện 108");
		equals(item.getProperty("name"), "Bệnh viện 108");
		start();
	    })
	    // test set value không hợp lệ cho thuộc tính
	    test("set invalid value Test", function() {
		expect(2);
		stop();
		// expect: exception Invalid Type Property [id]
		raises(function() {
		    item.setProperty("id", 1);
		}, function(err) {
		    return err.message === "Invalid Type Property [id]";
		}, "Invalid type property")

		raises(function() {
		    item.setProperty("id", null);
		}, function(err) {
		    return err.message === "Invalid Type Property [id]";
		}, "Invalid Type Property [id] is null")
		start();
	    })
	    // test set value cho thuộc tính không tồn tại
	    test("set value for not exist property Test", function() {
		expect(2);
		stop();
		raises(function() {
		    item.setProperty("username", "abc");
		}, function(err) {
		    return err.message === "Not Exist Property [username]";
		}, "Invalid type property")

		raises(function() {
		    item.setProperty(null, "abc");
		}, function(err) {
		    return err.message === "Not Exist Property [null]";
		}, "Invalid Property [null] is null")
		start();
	    })
	    // test constructor với instance hợp lệ
	    test("constructor valid instance Test", function() {
		expect(4);
		stop();
		newitem = new Sonicui.Models.DataItem({
		    properties : [ {
			name : "name",
			value : "bệnh viện",
			type : "string"
		    } ]
		});
		ok(newitem.properties);
		ok(newitem.properties[0].name);
		ok(newitem.properties[0].value);
		ok(newitem.properties[0].type);
		start();
	    })
	    // test constructor không có thuộc tính properties
	    test("create not exist properties list", function() {
		expect(1);
		stop();
		raises(function() {
		    new Sonicui.Models.DataItem({
			id : "1"
		    });
		}, function(err) {
		    return err.message === "Not Exist Properties";
		}, "khởi tạo data item không có danh sách thuộc tính")
		start();
	    })
	    // test constructor với instance có thuộc tính sai kiểu dữ liệu.
	    test("create with property has invalid datatype Test", function() {
		expect(1);
		stop();
		raises(function() {
		    new Sonicui.Models.DataItem({
			properties : [ {
			    name : "sum",
			    value : "một trăm",
			    type : "number"
			} ]
		    });
		}, function(err) {
		    return err.message === "Invalid Type Property [sum]";
		}, "Có thuộc tính sai kiểu dữ liệu")
		start();
	    })
	    // constructor với thuộc tính đã tồn tại
	    test("constructor duplicate property", function() {
		expect(1);
		stop();
		raises(function() {
		    new Sonicui.Models.DataItem({
			"id" : 1,
			"properties" : [ {
			    "name" : "name",
			    "value" : "bệnh viện Bạch Mai",
			    "type" : "string"
			}, {
			    "name" : "name",
			    "value" : "Hai Bà Trưng,Hà Nội",
			    "type" : "string"
			} ]
		    });
		}, function(err) {
		    return err.message === "Duplicate Property [name]";
		}, "trùng thuộc tính")
		start();
	    })
	    // save data item với instace hợp lệ
	    test("save valid instance Test", function() {
		expect(5);
		stop();
		newitem = new Sonicui.Models.DataItem({
		    properties : [ {
			name : "name",
			value : "bệnh viện",
			type : "string"
		    } ]
		});
		newitem.save(function(data) {
		    ok(data);
		    ok(data.properties);
		    ok(data.properties[0].name);
		    ok(data.properties[0].value);
		    ok(data.properties[0].type);
		    start();
		})
	    })
	})