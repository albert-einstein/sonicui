steal('funcunit').then(function(){

module("Sonicui.Data.Create", { 
	setup: function(){
		S.open("//sonicui/data/create/create.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Sonicui.Data.Create Demo","demo text");
});


});