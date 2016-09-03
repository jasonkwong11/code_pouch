function ResourcesCtrl($scope, Resource, $filter) {
  var self = this;

  self.resources = Resource.query();
}

ResourcesCtrl.$inject = ["$scope", "Resource", '$filter'];

angular
  .module("CodePouch")
  .controller('ResourcesCtrl', ResourcesCtrl);
