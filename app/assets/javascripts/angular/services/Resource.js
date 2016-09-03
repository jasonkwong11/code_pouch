function Resource($resource) {
  return $resource('/api/resources/:id',{
    id: '@id'
  });
}

Resource.$inject = ['$resource'];

angular
  .module("CodePouch")
  .factory("Resource", Resource);
