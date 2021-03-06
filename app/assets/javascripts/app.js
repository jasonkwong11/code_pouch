angular
  .module("CodePouch", ["ui.router", "ngResource", "templates", 'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider, $urlRouterProvider, paginationTemplateProvider) {
    paginationTemplateProvider.setPath('pagination/mine.tpl.html');

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
      })
      .state("show", {
        url: '/resources/:id',
        templateUrl: 'resources/show.html',
        controller: 'ResourceCtrl'
      })
      .state("categories", {
        url: '/categories/:name',
        templateUrl: 'resources/categories.html',
        controller: "CategoriesCtrl"
      })
    $urlRouterProvider.otherwise('/');
  });
