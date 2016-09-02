angular
  .module("CodePouch", ["ui.router", "ngResource", "templates"])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "index.html",
        controller: "ResourceCtrl"
      });
  });
