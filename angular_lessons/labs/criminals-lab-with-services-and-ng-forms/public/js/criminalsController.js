angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
<<<<<<< HEAD
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
=======
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
    });
  };

<<<<<<< HEAD
  function addCriminal() {
    CriminalsService.addCriminal(vm.newCriminal)
    .then( function () {
      vm.getCriminals();
      vm.newCriminal = {};
    });
  };

function deleteCriminal(criminal){
=======
  function addCriminal(){
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
    CriminalsService.deleteCriminal(criminal)
      .then(function(response){
        var index = vm.all.indexOf(criminal);
        vm.all.splice(index, 1);
      });

};

};

