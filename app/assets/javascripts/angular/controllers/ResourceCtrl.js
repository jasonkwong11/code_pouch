function ResourceCtrl($scope, Resource, $stateParams) {
  var self = this;

  self.resource = Resource.get({id: $stateParams.id});
}

ResourceCtrl.$inject = ['$scope', 'Resource', '$stateParams'];

angular
  .module("CodePouch")
  .controller("ResourceCtrl", ResourceCtrl);
