//js SonicUI/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('SonicUI/sonic_ui.html', {
		markdown : ['sonic_ui']
	});
});