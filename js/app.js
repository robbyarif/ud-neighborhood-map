// Get List of Stations from maps API
var stationsData = [];

var map;
      function initMap() {
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13
        });
      }

var ViewModel = function () {
	var self = this;

	this.stations = ko.observableArray([]);
	stationsData.forEach(function (station) {
		// push station to observables
	});

	
	
}


ko.applyBindings(new ViewModel());
