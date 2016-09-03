angular
  .module("CodePouch", ["ui.router", "ngResource", "templates"])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "index.html",
      })
      .state('resources', {
        url: "/resources",
        templateUrl: "resources/index.html",
        controller: "ResourceCtrl"
      })
      .state('new', {
        url: "/resources/new",
        templateUrl: "resources/new.html",
      });
    $urlRouterProvider.otherwise('/');
  });
