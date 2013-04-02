steal(
	'./sonic_ui.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'./table/table.js',
	function(){					// configure your application
		$("#tables").sonicui_table();
	})