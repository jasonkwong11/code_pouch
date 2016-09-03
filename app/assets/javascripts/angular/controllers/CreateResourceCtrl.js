function CreateResourceCtrl($scope, Resource, $window, $http) {
  var self = this;
  self.resource = {};

  this.createResource = function () {
    $http({
      method: 'POST',
      url: '/api/resources',
      data: {data: this.resrouce}
    })
    .success(function (data) {
      this.lecture = data.lecture;
      $window.location.href = '/resources/' + data.id;
    });
  };
}

angular
  .module("CodePouch")
  .controller("CreateResourceCtrl", CreateResourceCtrl);
