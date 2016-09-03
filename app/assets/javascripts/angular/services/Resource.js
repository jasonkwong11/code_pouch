function Resource($resource) {
  return $resource('/api/resources/:id');
}

Resource.$inject = ['$resource'];

angular
  .module("CodePouch")
  .factory("Resource", Resource);
