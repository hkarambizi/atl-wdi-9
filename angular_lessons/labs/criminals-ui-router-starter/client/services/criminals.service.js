angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.addCriminal = addCriminal;
	self.editCriminal = editCriminal;
	self.deleteCriminal = deleteCriminal;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.newCriminal = {};

	// HOW IT DOES STUFF
	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
	function addCriminal(newCriminal) {
		return $http.post('/api/criminals', newCriminal)
	}
	function editCriminal(criminal) {
		return $http.patch('/api/criminals/' + criminal._id, criminal)
	}
	function deleteCriminal(id) {
		return $http.delete('/api/criminals/' + id)
	}
}
