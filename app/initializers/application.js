import Ember from 'ember';

export default {
	name: 'application',

    initialize: function(container, app) {
        app.inject('controller', 'myStore', 'service:my-store');
        app.inject('route', 'myStore', 'service:my-store');
    }
}