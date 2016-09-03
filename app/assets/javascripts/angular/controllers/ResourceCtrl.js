function ResourceCtrl($scope, Resource, $stateParams) {
  var self = this;

  self.resource = Resource.get({id: $stateParams.id});

  self.upVote = function () {
    self.resource.upvote += 1;
    self.resource.$update();
  };

  self.downVote = function () {
    self.resource.upvote -= 1;
  };
}

ResourceCtrl.$inject = ['$scope', 'Resource', '$stateParams'];

angular
  .module("CodePouch")
  .controller("ResourceCtrl", ResourceCtrl);
