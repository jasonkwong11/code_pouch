function GetResourceService($http) {
  this.getResource = function (id) {
    return $http.get('/api/resources/' + id);
  };
}

angular
  .module("CodePouch")
  .service("GetResourceService", GetResourceService);
