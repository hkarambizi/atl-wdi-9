EditCriminalController.$inject = ['$state', '$stateParams', 'CriminalsService'];

function EditCriminalController ($state, $stateParams, CriminalsService) {
	var vm = this;
	vm.current = {};
	vm.editCriminal = editCriminal;


	activate();

	function activate(){

			CriminalsService
				.loadCurrent($stateParams.criminalId)
				.then(function resolve(response){
					vm.current = response.data.criminal;
				});
		}


	function editCriminal(criminal){
			console.log(criminal);
				CriminalsService
				.editCriminal(criminal)
				.then(function resolve(){
					$state.go('criminals');
				});
		}

}

module.exports = EditCriminalController;