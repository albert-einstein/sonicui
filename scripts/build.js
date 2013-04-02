//js SonicUI/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('SonicUI/scripts/build.html',{to: 'SonicUI'});
});
