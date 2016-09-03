function Resource($resource) {
  return $resource('/api/resources/:id');
}

angular
  .module("CodePouch")
  .factory("Resource", Resource);
