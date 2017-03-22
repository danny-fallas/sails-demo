angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope) {

  //Auto connecting socket, dont do the promise
  io.socket.get('/emoji', function (data) {
    $scope.emojis = data;
    $scope.$apply(); //Force the apply because we are not using $http
  });

  //Gets the event going on the socket and allow us to handle 
  io.socket.on('emoji', function (event) {
    switch (event.verb) {
      case 'created':
        $scope.emojis.push(event.data);
        $scope.$apply();
        break;
    }
  });

}]);
