angular.module("pillowTalk")
  .controller("mainCtrl", function($scope, $scope, $location, $log, $routeParams, $route, $cookies, $cookieStore, ChatService, $interval) {

   $interval(function() {
      ChatService.getMessages().success(function(messages) {
      $scope.messages = messages;
   });
    }, 500);   
    
  $interval(function() {
    ChatService.getUsers().success(function(users) {
      $scope.users = users;
    });
     }, 500); 

   


   $scope.logOut = function() {
    
    angular.forEach($scope.users, function (user){
      if ($scope.currentUser === user.name){
        ChatService.deleteUser(user._id);
      }
    });
    $location.path("/");
    

   };


   $scope.$on("user : added", function() {
    $scope.currentUser = ChatService.getCurrentUser.name;
    $log.info("currentUser");
   });





    $scope.createMessage = function(newMessage) {
      var modifiedMsg = {
        content: newMessage.content,
        date: new Date(),
        author: $scope.currentUser
      };
      ChatService.createMessage(modifiedMsg);
      };



    });

    

