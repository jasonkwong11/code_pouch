function GetResourceService($http) {
  this.getResource = function (id) {
    return $http.get('/api/resources/' + id);
  };
}

angular
  .module("CodePunch")
  .service("GetResourceService", GetResourceService);
