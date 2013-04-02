steal("funcunit/qunit", "sonicui/fixtures", "sonicui/models/column_label.js", function(){
	module("Model: Sonicui.Models.ColumnLabel")
	
	test("findAll", function(){
		expect();
		stop();
		Sonicui.Models.ColumnLabel.findAll({}, function(column_labels){
			console.log("data: ", column_labels);
			ok(column_labels)
	        ok(column_labels.length)
	        equals(column_labels.length,2,"There are 2 column")
	        for(var i = 0; i<column_labels.length;i++){
	        	ok(column_labels[i].name);
	        	ok(column_labels[i].order);
	        	ok(column_labels[i].alias);
	        }
			start();
		});
	})
	
//	test("findOne", function(){
//		expect();
//		stop();
//		Sonicui.Models.ColumnLabel.findOne({id:1}, function(column_label){
//			ok(column_label)
//        	ok(column_label.name);
//        	ok(column_label.order);
//        	ok(column_label.alias);
//			start();
//		});
//	})
//	test("valid order", function(){
//		expect();
//		stop();
//		var column = new Sonicui.Models.ColumnLabel({name:"So thu tu",order:"1", alias:"order"});
//		ok(column.validateOrder(),"valid order");
//		deepEqual(column.order, 1);
//		start();
//	})
//	
//	test("order less than zero",function(){
//		raises(
//				function(){
//					var column = new Sonicui.Models.ColumnLabel({name:"So thu tu",order:"-1", alias:"order"});
//				},
//				function(err) {
//	                return err.message === 'Order am';
//	            }, 
//	            "throw order less than 0 exception -> pass test"
//	    );
//	})
//	
//	
//	test("invalid order", function(){
//		raises(
//				function(){
//					var column = new Sonicui.Models.ColumnLabel({name:"So thu tu",order:"notNumberOrder", alias:"order"});
//				},
//				function(err) {
//	                return err.message === 'Order khong hop le';
//	            }, 
//	            "throw invalid order exception -> pass test"
//	    );
//	})
})