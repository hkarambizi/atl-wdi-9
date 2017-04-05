angular.module('InfamousCriminals')
<<<<<<< HEAD
.service('CriminalsService', CriminalsService);
=======
    .service('CriminalsService', CriminalsService);
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
<<<<<<< HEAD
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
=======

    var vm = this;

    vm.getCriminals = function () {
        return $http
            .get('/criminals')
            .then(function(response){
                return response.data.criminals;
            });
    };

   vm.addCriminal = function (newCriminal) {
       return $http
           .post('/criminals', newCriminal);
   };

    vm.deleteCriminal = function (criminal) {
        return $http
                .delete("/criminals/" + criminal._id)
    };

}
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
