function ResourcesCtrl($scope, Resource, $filter) {
  var self = this;

  self.resources = Resource.query();

  self.refilter = function () {
    self.filteredList = $filter('filter')(self.resources, self.search);
  };

  self.refilter();
}

ResourcesCtrl.$inject = ["$scope", "Resource", '$filter'];

angular
  .module("CodePouch")
  .controller('ResourcesCtrl', ResourcesCtrl);
