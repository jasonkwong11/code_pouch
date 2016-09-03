function ResourceCtrl($scope, Resource) {
  var self = this;

  self.resource = Resource.get({id: $scope.id}, function () {
    console.log(self.resource);
  });
}
