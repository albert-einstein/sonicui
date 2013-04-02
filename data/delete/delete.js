steal('jquery/controller', 'jquery/view/ejs').then(
		'./views/delete.ejs',
		function($) {

			/**
			 * @class Sonicui.Data.Delete
			 */
			$.Controller('Sonicui.Data.Delete',
			/** @Static */
			{
				defaults : {
					model : null,// model cần xóa
					view : null,// file ejs hiển thị view xóa
					message : null
				// thông điệp cảnh báo

				}
			},
			/** @Prototype */
			{
				init : function() {
					if (this.options.view) {
						this.element.html(this.options.view, {});
					} else {
						this.element.html("//sonicui/data/delete/views/delete.ejs", {});
					}
				},
				// khi click vào nó sẽ thực hiện xóa model đó
				click : function(el) {
					if (this.options.message) {
						this.deleted(this.options.message,el);
					} else {
						this.deleted("Are you sure you want to destroy?",el);
					}
				},
				deleted : function(message,el) {
					if (confirm("Are you sure you want to destroy?")) {
						// cần phải lấy class bằng model??
						// hiện tại đang dùng tên model để constructor model
						el.closest(".row").model().destroy();
					}
				}

			})

		});