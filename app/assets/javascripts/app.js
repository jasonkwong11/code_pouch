angular
  .module("CodePouch", ["ui.router", "ngResource", "templates"])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "index.html",
        controller: "ResourceCtrl"
      });
    $urlRouterProvider.otherwise('/');
  });
