NewCriminalController.$inject = ['$state','CriminalsService'];

function NewCriminalController($state, CriminalsService) {
	var vm = this;
	vm.addCriminal = addCriminal;
	vm.newCriminal = {};

	activate();

	function activate(){};

	function addCriminal(){
	
			CriminalsService
				.addCriminal(vm.newCriminal)
					.then(function resolve() {
						$state.go('criminals');
					});
		}
}

module.exports = NewCriminalController;