angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var vm = this;
  vm.all = [];
  vm.addCriminal = addCriminal;
  vm.getCriminals = getCriminals;
  vm.deleteCriminal = deleteCriminal;
  vm.newCriminal = {};

  getCriminals();
  function getCriminals() {
    CriminalsService.getCriminals().then(function (criminalsData) {
      vm.all = criminalsData;
    });
  };

  function addCriminal() {
    CriminalsService.addCriminal(vm.newCriminal)
    .then( function () {
      vm.getCriminals();
      vm.newCriminal = {};
    });
  };

function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
      .then(function(response){
        var index = vm.all.indexOf(criminal);
        vm.all.splice(index, 1);
      });

};

};

