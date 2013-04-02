steal('funcunit').then(function(){

module("Sonicui.Data.Delete", { 
	setup: function(){
		S.open("//sonicui/data/delete/delete.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Sonicui.Data.Delete Demo","demo text");
});


});