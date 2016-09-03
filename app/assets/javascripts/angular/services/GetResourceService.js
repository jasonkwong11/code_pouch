function GetResourceService($http) {
  this.getResource = function (id) {
    return $http.get('/api/resources/' + id);
  };
}

GetResourceService.$inject = ['$http']

angular
  .module("CodePouch")
  .service("GetResourceService", GetResourceService);
