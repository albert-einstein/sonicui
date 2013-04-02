steal("funcunit", function(){
	module("sonic_ui test", { 
		setup: function(){
			S.open("//SonicUI/sonic_ui.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})