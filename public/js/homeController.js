angular.module("pillowTalk")
  .controller("homeController", function($scope, $scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, ChatService, $interval) {

   
  $interval(function(){
   $scope.createUser = function (newUser){
    ChatService.createUser(newUser)
    $location.path('/chatroom');
   };
     }, 500); 


   

    });

    

