angular
  .module("CodePouch", ["ui.router", "ngResource", "templates"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "index.html",
      })
      .state("about", {
        url: "/about",
        templateUrl: "about.html"
      })
      .state('resources', {
        url: "/resources",
        templateUrl: "resources/index.html",
        controller: "ResourcesCtrl"
      })
      .state('new', {
        url: "/resources/new",
        templateUrl: "resources/new.html",
      });
    $urlRouterProvider.otherwise('/');
  });
