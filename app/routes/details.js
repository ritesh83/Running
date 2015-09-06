import Ember from 'ember';

export default Ember.Route.extend({
	myStore: Ember.inject.service('my-store'),

	model: function(params) {
		var allRuns = this.get('myStore').getAllRuns();
		return allRuns.findBy("id", Number(params.id));
	},

	actions : {
		close: function() {
			this.transitionTo('index');
		}
	}
});
