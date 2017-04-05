angular.module('InfamousCriminals')
.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
  var vm = this;

  vm.addCriminal = addCriminal;
  vm.deleteCriminal = deleteCriminal;
  vm.getCriminals = getCriminals;


  function getCriminals(){
    return $http
      .get('/criminals')
      .then(function(response){
        return response.data.criminals;
    });
  }

  function addCriminal(newCriminal){
    var mappedCriminals = [ 1, 2, 3, 4, 5].map(function(c, idx){  
        return c +'.' + ' newCriminal' + idx;
    });
    debugger;
    return $http
      .post('/criminals', newCriminal);
    };
    
  

  function deleteCriminal(criminal){
    return $http
      .delete("/criminals/" + criminal._id);
  };

};
