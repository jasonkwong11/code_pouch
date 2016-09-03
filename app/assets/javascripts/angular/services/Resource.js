function Resource($resource) {
  return $resource('/api/resources/:id',{
    id: '@id'
  },
  {
    update: { method: 'PUT' }
  });
}

Resource.$inject = ['$resource'];

angular
  .module("CodePouch")
  .factory("Resource", Resource);
