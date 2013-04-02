steal('jquery/controller', 'jquery/view/ejs', 'jquery/dom/form_params',
		'jquery/event/key', 'sonicui/models').then(
		'./views/init.ejs',
		function($) {

			/**
			 * @class Sonicui.data.update
			 */
			$.Controller('Sonicui.data.update',
			/** @Static */
			{
				defaults : {
					model : null,
					column : null,
					view : null,
					form : null,
					insertInto : null,
				}
			},
			/** @Prototype */
			{

				init : function() {
					// Thiet lap form ban dau
					this.element.html(this.view(), {});
					this.forms = $([]);
				},
				// Bat su kien click tren form hien tai
				click : function(el) {
					this.data = el.closest(".row").model();
					console.log("data",this.data);
					var form = $.View(this.options.form, {
						name : "update",
						data : this.data,
						columns : this.options.column.findAll()
					});
					el.closest(".row").replaceWith(form);
					this.forms = this.forms.add(form);
				},
				// Bat su kien submit tren form
				"{insertInto} form[name=update] submit" : function(el, ev) {
					this.submit(el, ev);
				},
				"{insertInto} form[name=update] keyup" : function(el, ev) {
					// Nếu người dùng nhấn phím Enter thì ồng nghĩa với việc
					// submit
					if (ev.keyName() == "\r") {
						// this.option.insertInto.find("form").submit();
						this.submit(el, ev);
					}
				},
				submit : function(el, ev) {
					this.data = el.closest(".row").model();
					ev.preventDefault()
					var params = el.formParams();
					// set property for data
					for ( var key in params.properties) {
						this.data.setProperty(params.properties[key].name,
								params.properties[key].value);
					}
					// updated data
					this.data.updated();
					this.forms.remove();
					this.forms = $([]);
				},
				view : function() {
					if (this.options.view) {
						return this.options.view;
					} else
						return "//sonicui/data/update/views/init.ejs";
				},
				saved : function() {
					this.element.find('[type=button]').val('Update');
					this.element[0].reset()
				}
			})

		});