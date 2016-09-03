function ResourceCtrl($scope, Resource) {
  var self = this;

  self.resources = Resource.query();
}

angular
  .module("CodePouch")
  .controller('ResourceCtrl', ResourceCtrl);
