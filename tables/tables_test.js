steal('funcunit').then(function(){

module("Sonicui.Tables", { 
	setup: function(){
		S.open("//sonicui/tables/tables.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Sonicui.Tables Demo","demo text");
});


});