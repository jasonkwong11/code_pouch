function CreateResourceCtrl($scope, Resource) {
  var self = this;
  self.resource = {};
}

angular
  .module("CodePouch")
  .controller("CreateResourceCtrl", CreateResourceCtrl);
