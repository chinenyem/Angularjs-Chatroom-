'use strict';
angular.module("pillowTalk")
  .factory('ChatService', function( $rootScope, $http, $cookieStore) {

    
    var messagesCollectionUrl = "api/collections/convo";
    var usersCollectionUrl = "/api/collections/users";
    var getCurrentUser = $cookieStore.get("currentUser");


//Get users
var getUsers = function() {
  return $http.get(usersCollectionUrl);
};


//Post new User to Users
var createUser = function(newUser) {

  if(getCurrentUser && getCurrentUser.name === newUser.name)return;

  $cookieStore.put('currentUser', newUser);

  $http.post(usersCollectionUrl, newUser).then(function(response) {

  $rootScope.$broadcast('user : added');
  return newUser;
   console.log('hello');
 })
};



//TODO: delete user. we need to know there name to delete the user

var deleteUser = function(userId) {
  $cookieStore.remove("currentUser");
  $http.delete(usersCollectionUrl + "/" +  userId).then(function(response){
    $rootScope.$broadcast("user : deleted");
  });
};



// TODO: Get Message
var getMessages = function() {
  return $http.get(messagesCollectionUrl);
};

// TODO: Post new message to messages

var createMessage = function (newMessage){

  $http.post(messagesCollectionUrl, newMessage).then(function(response){
    $rootScope.$broadcast("message : added");
    console.log("message : added");
  });
};





    return{
      
      getUsers: getUsers,
      createUser:createUser,
      getCurrentUser: getCurrentUser,
      deleteUser: deleteUser,
      getMessages : getMessages,
      createMessage: createMessage
    }
  })
