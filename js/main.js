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

	App.Collections.Tasks = Backbone.Collection.extend({
		model: App.Models.Task
	});

	App.Views.Tasks = Backbone.View.extend({
		tagName: 'ul',

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function(task) {				
			//creating a new child view
			var taskView = new App.Views.Task({ model: task });
			//taskView.render();

			//append to root element
			this.$el.append(taskView.render().el);
		}
	});

	App.Views.Task = Backbone.View.extend({
		tagName: 'li',

		events: {
			//$('li').on('click', fn) //used to do this

			'click': 'showAlert'
		},

		showAlert: function(){
			alert('you clicked me!');
		},

		render: function() {
			this.$el.html( this.model.get('title'));
			return this;
		}
	});

	var tasksCollection = new App.Collections.Tasks([
		{
			title: 'Go to the store',
			priority: 4
		},
		{
			title: 'Go to the mall',
			priority: 3
		},
		{
			title: 'Get to work',
			priority: 5
		}
	]);

	var tasksView = new App.Views.Tasks({ collection: tasksCollection });
		
	//console.log(taskView.el);
	//$(document.body).html(tasksView.el);
	$('.tasks').html(tasksView.render().el);

})();