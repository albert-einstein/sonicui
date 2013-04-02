steal('//sonicui/models/models.js', 'jquery/controller', 'jquery/view/ejs',
		'//sonicui/models/models.js', '//sonicui/data/table/table.js',
		'//sonicui/data/delete/delete.js', '//sonicui/data/create/create.js',
		'//sonicui/data/update/update.js').then('./sonicui.tables.css','./views/init.ejs',
		function($) {

			/**
			 * @class Sonicui.Tables
			 */
			$.Controller('Sonicui.Tables',
			/** @Static */
			{
				defaults : {}
			},
			/** @Prototype */
			{
				init : function() {
					this.element.html("//sonicui/tables/views/init.ejs", {});
					// hiển thị danh sách
					this.viewTable();
					// thêm các controller điều khiển cho model

					$(this.element).bind("updated", function() {
						// add destroy
						$(this).find(".delete").sonicui_data_delete({
							model : Sonicui.Models.DataItem
						});
						// add create
						$(this).find(".create").sonicui_data_create({
							model : Sonicui.Models.DataItem,
							column : Sonicui.Models.ColumnLabel,
							form : "//sonicui/tables/views/formDataItem.ejs",
							insertInto : $(this).find(".row_wrapper"),
							view:"//sonicui/tables/views/createItem.ejs"
						});
						// add update
						$(this).find(".update").each(function(i, el) {
							$(el).sonicui_data_update({
								model : Sonicui.Models.DataItem,
								column : Sonicui.Models.ColumnLabel,
								form : "//sonicui/tables/views/formUpdate.ejs",
								insertInto : $("#tables").find(".row_wrapper")
							})
						});
					})
				},
				viewTable : function() {
					// khởi tạo bảng dữ liệu
					$(this.element).find(".table").sonicui_data_table({
						title : "Tên Bệnh Viện",
						columns : Sonicui.Models.ColumnLabel,
						model : Sonicui.Models.DataItem
					});
				},
			})

		});