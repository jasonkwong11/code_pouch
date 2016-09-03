function ResourceCtrl($scope, Resource) {
  var self = this;

  self.resources = Resource.query();
}

ResourceCtrl.$inject = ["$scope", "Resource"];

angular
  .module("CodePouch")
  .controller('ResourceCtrl', ResourceCtrl);
