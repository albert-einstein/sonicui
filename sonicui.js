steal(
//	'./sonic_ui.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'./tables/tables.js',
	function(){					// configure your application
		$("#tables").sonicui_tables();
	})