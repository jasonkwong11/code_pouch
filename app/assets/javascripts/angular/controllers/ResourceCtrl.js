function ResourceCtrl($scope, Resource, $stateParams) {
  var self = this;

  self.resource = Resource.get({id: $stateParams.id});
}

angular
  .module("CodePouch")
  .controller("ResourceCtrl", ResourceCtrl);
