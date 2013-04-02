steal('funcunit').then(function(){

module("Sonicui.data.update", { 
	setup: function(){
		S.open("//sonicui/data/update/update.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Sonicui.data.update Demo","demo text");
});


});