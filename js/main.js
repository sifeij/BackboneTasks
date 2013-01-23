(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	App.Models.Task = Backbone.Model.extend({});
	App.Views.Task = Backbone.View.extend({
		tagName: 'li',

		render: function() {
			this.$el.html( this.model.get('title'));
			return this;
		}
	});

	var task = new App.Models.Task({
		title: 'Go to the store',
		priority: 4
	});

	var taskView = new App.Views.Task({
		model: task
	});

	console.log(taskView.render().el);

})();