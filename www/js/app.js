// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Disable Animation
.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.transition('none');
})

// UI Routers
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('welcome',{
      url:"/welcome",
      templateUrl:"welcome.html"
    })
    .state('user_signin', {
      url:"/user_signin",
      templateUrl:"user/signin.html"
    })
    .state('user_register', {
      url:"/user_register",
      templateUrl:"user/register.html"
    })
    .state('stylist_signin',{
      url:"/stylist_signin",
      templateUrl:"stylist/signin.html"
    })
    .state('stylist_register', {
      url:"/stylist_register",
      templateUrl:"stylist/register.html"
    })
    .state('user_main', {
      url:"/user_main",
      templateUrl:"user/user_main.html"          
    })
    .state('user_recommend', {
      url:"/user_recommend",
      templateUrl:"user/user_recommend.html"          
    })    
    .state('stylist_main',{
      url:"/stylist_main",
      templateUrl:"stylist/stylist_main.html"    
    })
    ;

    $urlRouterProvider.otherwise("/welcome");
})

.controller("user_signin_controller", ['$scope', '$location' , function($scope, $location){

  $scope.formSubmit = function(){

    $location.path("/user_main");
  }

}])

.controller("user_register_controller", ['$scope', '$location' , function($scope, $location){

  $scope.formSubmit = function(){
    $location.path("/user_main");
  };

  $scope.isValid = function(){
    if($scope.pword != $scope.re_pword){
      return false;
    }
    else{
      return true;
    }
  };

}])
.controller("stylist_signin_controller", ['$scope', '$location' , function($scope, $location){

  $scope.formSubmit = function(){
    $location.path("/stylist_main");
  }

}])
.controller("stylist_register_controller", ['$scope', '$location' , function($scope, $location){

  $scope.formSubmit = function(){
    $location.path("/stylist_main");
  }

}])

.service("camera", function(){
  this.setOptions = function(srcType){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: srcType,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    return options;
  };

  this.openCamera = function(selection){
    var srcType = Camera.PictureSourceType.CAMERA;
    var options = this.setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri){
      displayImage(imageUri);
      func(imageUri);
    }, function cameraError(error){
      console.debug("unable to obtain picture: " + error, "app")
    }, options);
  };

  this.openFilePicker = function(selection){
    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);
    var func = createNewFileEntry;

    navigator.camera.getPicture(function cameraSuccess(imageUri){
      // Do Something
    }, function cameraError(error){
      console.debug("unable to obtain picture: " + error, "app");
    }, options);

  }
  
})
.service("network", function(){
  this.checkConnection = function(){
    var networkState = navigator.connection.type;

    var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.CELL]     = 'Cell generic connection';
   states[Connection.NONE]     = 'No network connection';

   //alert('Connection type: ' + states[networkState]);
  };
})

;



