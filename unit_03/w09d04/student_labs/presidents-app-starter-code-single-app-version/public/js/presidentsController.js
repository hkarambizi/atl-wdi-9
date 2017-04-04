angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.removePresident = removePresident;

  activate();

  function activate() {
    loadAllPresidents();

  };

  function addPresident(president){
    $http
    .post('/presidents', vm.newPresident)
    .then(function AddPres(response) {
      vm.all.push(response.data.president);
      vm.newPresident = {};
    });
  }

  function removePresident(president) {
    $http
    .delete('/presidents/' + president._id)
    .then(function DeletePres(response){
      var index = vm.all.indexOf(president);
      vm.all.splice(index, 1);
    });
  }

  function loadAllPresidents() {
    $http
    .get('/presidents')
    .then(function resolve(response) {
      vm.all = response.data.presidents;
      vm.loadingAll = false;
    }, function reject(err) {
      vm.loadingAll = false;
    });
  };

  
};
