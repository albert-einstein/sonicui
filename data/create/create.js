steal('jquery/controller', 'jquery/view/ejs', 'jquery/dom/form_params',
		'jquery/event/key').then(
		'./views/create.ejs',
		function($) {

			/**
			 * @class Sonicui.Data.Create
			 */
			$.Controller('Sonicui.Data.Create',
			/** @Static */
			{
				defaults : {
					model : null, // model để tạo thêm
					column: null, // model column label
					view : null, // file ejs hiển thị view thêm
					form : null, // form ejs hiển thị cấu trúc thêm
					insertInto : null
				// vị trí hiển thị form thêm
				}
			},
			/** @Prototype */
			{
				init : function() {
					// kiểm tra xem có view option không
					// nếu không thì hiển thị view mặc định create.ejs
					if (this.options.view) {
						this.element.html(this.options.view,{});
					} else {
						this.element.html(
								"//sonicui/data/create/views/create.ejs", {});
					}
					this.forms = $([]);
				},

				// khi click vào view hiển thị này, thì nó sẽ hiển thị form.ejs
				// được truyền vào, vào vị trí insertInto
				// nếu không có form truyền vào thì sẽ bắn ra exception
				click : function(el) {
					if (this.options.form) {
						var column = this.options.column.findAll();
						var form = $($.View(this.options.form, {name:"create",columns:column})).prependTo(
								this.options.insertInto);
						this.forms = this.forms.add(form);
						this.element.hide();
					} else {
						throw new Error("Insert Form");
					}
				},
				"{insertInto} form[name=create] submit" : function(el, ev) {
					this.submit(el, ev);
				},
				"{insertInto} form[name=create] keyup" : function(el, ev) {
					// Nếu người dùng nhấn phím Enter thì ồng nghĩa với việc
					// submit
					if (ev.keyName() == "\r") {
						// this.option.insertInto.find("form").submit();
						this.submit(el, ev);
					}
				},
				// submit form
				submit : function(el, ev) {
					ev.preventDefault() // lệnh này để che đi url thông tin của
										// form gửi lên server
					var params = el.formParams();
					var item = new this.options.model(params);
		
					item.save();
					$(".formcreate").remove();
					this.forms.remove();
					this.forms = $([]);
					this.element.show();
				}

			})

		});