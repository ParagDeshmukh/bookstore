var myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('GenresController loaded...');
	
	$scope.getGenres=function(){
		$http.get('/api/genres').then(function(response){
			$scope.books = response.data;
		});
	}
	$scope.getGenre=function(){
		var id = $routeParams.id;
		$http.get('/api/genres/'+id).then(function(response){
			$scope.book = response.data;
		});
	}
	$scope.addGenre=function(){
		console.log($scope.book)
		$http.post('/api/genres/', $scope.book).then(function(response){
			window.location.href='#!/books';
		});
	}
	$scope.updateGenre=function(){
		console.log($scope.book)
		var id = $routeParams.id;
		$http.put('/api/genres/'+id, $scope.book).then(function(response){
			window.location.href='#!/books';
		});
	}
	$scope.removeGenre=function(id){
		
		$http.delete('/api/genres/'+id).then(function(response){
			window.location.href='#!/books';
		});
	}
}]);
