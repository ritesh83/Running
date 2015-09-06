import Ember from "ember";
import Run from '../models/run';

export default Ember.Service.extend({
	
	allRuns: null,
	
	getAllRuns: function() {
        this.set('allRuns', Ember.A());

        this._createRunObject(1, "Mumbai Marathon", "Jan 20, 2008", "13.1 Miles", "bombay_marine_drive.jpg", "2:58:00", "Mumbai");
        this._createRunObject(2, "Malibu Marathon", "Nov 11, 2012", "13.1 Miles", "malibu_marathon.jpg", "2:46:00", "Malibu");
        this._createRunObject(3, "OC Marathon", "May 3, 2013", "26.2 Miles", "oc_marathon.jpg", "5:30:00", "Newport Beach");
        this._createRunObject(4, "Long Beach Marathon", "Oct 20, 2014", "26.2 Miles", "long_beach_marathon.jpg", "5:17:00", "Long Beach");
        this._createRunObject(5, "Colorado Marathon", "May 6, 2015", "26.2 Miles", "fort_collins_marathon.jpg", "6:18:00", "Fort Collins");
        
        return this.get('allRuns');
	},

	_createRunObject: function(id, name, date, distance, image, time, location) {
		var newRun = Run.create();
        
        newRun.set("id", id);
        newRun.set("name", name);
        newRun.set("date", date);
        newRun.set("distance", distance);
        newRun.set("image", image);    
        newRun.set("time", time);
        newRun.set("location", location);

        this.get('allRuns').addObject(newRun);
	}

});