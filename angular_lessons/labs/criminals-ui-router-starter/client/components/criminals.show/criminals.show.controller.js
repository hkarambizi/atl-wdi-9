CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	var vm = this;

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
		.loadCurrent($stateParams.criminalId)
		.then(function resolve(response) {
			vm.current = response.data.criminal;
		})
	}

}

module.exports = CriminalsShowController;