function GetResourcesService($http) {
  this.getResources = function () {
    return $http.get("/api/resources");
  };
}

angular
  .module("CodePouch")
  .service("GetResourcesService", GetResourcesService);
