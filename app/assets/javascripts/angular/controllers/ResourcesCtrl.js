function ResourcesCtrl($scope, Resource, $filter) {
  var self = this;

  self.resources = Resource.query();
  self.filter = {};

  self.filterByCategory = filterByCategory;
  self.getCategories = getCategories;

  self.refilter = function () {
    self.filteredList = $filter('filter')(self.resources, self.search);
  };

  // Thanks to ExpertSystem for the help with this!

  function filterByCategory(resource) {
    return self.filter[resource.category] || noFilter(self.filter);
  }

  function getCategories() {
    return (self.resources || []).
      map(function (resource) { return resource.category; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }

  self.refilter();
}

ResourcesCtrl.$inject = ["$scope", "Resource", '$filter'];

angular
  .module("CodePouch")
  .controller('ResourcesCtrl', ResourcesCtrl);
