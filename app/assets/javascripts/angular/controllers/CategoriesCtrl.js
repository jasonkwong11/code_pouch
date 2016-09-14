function CategoriesCtrl($stateParams, Resource, $http, GetResourcesService) {
  var self = this;
  self.name = $stateParams.name;
  // Resource.query().$promise.then(function (result) {
  //   self.resources = result.filter(function (result) {
  //     if (result.category.toLowerCase() === self.name.toLowerCase()) {
  //       return result;
  //     }
  //   });
  // });

  GetResourcesService.getResources()
    .then(function (res) {
      self.resources = res.data.filter(function (result) {
        if (result.category.toLowerCase() === self.name.toLowerCase()) {
          return result;
        }
      });
    });
}

angular
  .module("CodePouch")
  .controller("CategoriesCtrl", CategoriesCtrl);
