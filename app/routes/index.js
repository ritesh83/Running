import Ember from 'ember';

export default Ember.Route.extend({
	myStore: Ember.inject.service(),

	model: function() {
		return this.get('myStore').getAllRuns();
	}
});
