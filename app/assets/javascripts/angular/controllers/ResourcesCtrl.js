function ResourcesCtrl($scope, Resource) {
  var self = this;

  self.resources = Resource.query();
}

ResourcesCtrl.$inject = ["$scope", "Resource"];

angular
  .module("CodePouch")
  .controller('ResourcesCtrl', ResourcesCtrl);
