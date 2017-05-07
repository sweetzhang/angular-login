app.controller('loginCtrl', ['$scope','$state','$location', function($scope,$state,$location){
	$scope.name = "zhang san";
	$scope.city = "Brisbane";
	$scope.email = "zhangsan@163.com";
	$scope.login = login;
	function login(){
		console.log($location);
		var url = "guide/" + $scope.name + "/" + $scope.email + "/" + $scope.city;
		$location.path(url);
	}
}])
app.controller('guideCtrl', ['$scope', '$routeParams','$http',function($scope,$routeParams,$http){
	console.log($routeParams);
	$scope.name = $routeParams.name;
	$scope.email = $routeParams.email;
	$scope.city = $routeParams.city;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + 'hongkong' + "&APPID=b714ec74bbab5650795063cb0fdf5fbe";

	$http({method: 'get', url: url}).
        then(function(data) {
        	console.log(data);
          $scope.weather = data.data.weather[0].description;
        }, function(response) {
        	console.log(response);
      });
}])