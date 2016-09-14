function CategoriesCtrl($stateParams, Resource, $filter) {
  var self = this;
  self.name = $stateParams.name;
  // Resource.query().$promise.then(function (result) {
  //   self.resources = result.filter(function (result) {
  //     if (result.category.toLowerCase() === self.name.toLowerCase()) {
  //       return result;
  //     }
  //   });
  // });

  $http({
    method: 'GET',
    url: 'api/resources'
  })
  .then(function (data) {
    self.resources = data.data.filter(function (result) {
      if (result.category.toLowerCase() === self.name.toLowerCase()) {
        return result;
      }
    });
  });
}

angular
  .module("CodePouch")
  .controller("CategoriesCtrl", CategoriesCtrl);
