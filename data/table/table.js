steal('jquery/controller', 'jquery/view/ejs').then(
		'//sonicui/data/table/sonicui.table.css',
		'//sonicui/data/table/views/tables.ejs',
		function($) {
			/**
			 * @class Sonicui.Data.Table
			 */
			$.Controller('Sonicui.Data.Table',
			/** @Static */
			{
				defaults : {
					title : null,// tên bảng hiển thị
					model : null,// danh sách model cần hiển thị
					columns : null,// danh sách cột hiển thị
					rows : null,// template hiển thị dòng
					show : null,// template hiển thị item
				}
			},
			/** @Prototype */
			{
				init : function() {
					this.config = {
						title : "title",
						columns : []
					};
					// khởi tạo cấu hình bảng
					if (this.options.title) {
						this.config.title = this.options.title;
					}
					// nếu columns tồn tại cột thì hiển thị cột đó lên
					if (this.options.columns) {
						this.config.columns = this.options.columns.findAll();
					}
					this.draw();
				},
				// vẽ ra bảng với tên bảng và số cột tương ứng
				draw : function() {
					this.element.html("//sonicui/data/table/views/tables.ejs",
							this.config, this.callback("list"));
				},
				// sau khi vẽ xong sẽ nạp dữ liệu theo model vào
				list : function() {
					// kiểm tra nếu template cho rows tồn tại thì hiển thị model
					// theo template đó
					if (this.options.rows) {
						this.element.find(".row_wrapper")
								.html(this.options.rows,
										this.options.model.findAll());
					} else {
						// nếu không sẽ sử dụng template mặc định để hiển rows
						this.element.find(".row_wrapper").html(
								"//sonicui/data/table/views/rows.ejs", {
									config : this.config,
									items : this.options.model.findAll()
								}, this.callback("update"));
					}
				},
				update : function() {
					this.element.trigger("updated");
				},
				// Xử lý các sự kiện khi model thay đổi
				"{model} destroyed" : function(model, ev, item) {
					item.elements(this.element).remove();
					this.update();
				},
				"{model} created" : function(model, ev, item) {
					this.element.find(".row_wrapper").append(
							"//sonicui/data/table/views/rows.ejs", {
								config : this.config,
								items : [ item ]
							}, this.callback("update"))
				},
				"{model} updated" : function(model, ev, item) {
					item.elements(this.element).replaceWith("//sonicui/data/table/views/show.ejs", {
						config : this.config,
						dataItem : item 
					}, this.callback("update"));
				}
			})

		});