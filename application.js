var maiet_app = angular.module("maiet_app",['ui.router','ui.bootstrap'])

maiet_app.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '',
      //template: '<h1>Hello World!</h1>',
      templateUrl: 'modules/login/login-view.html',
      //controller: '',
    })
    //$urlRouterProvider.otherwise('/services');
});


maiet_app.controller("MainController",function($scope, $rootScope, $state, $location){
  $rootScope.$on('$stateChangeStart',
  function(event, toState, toParams, fromState, fromParams, options){
    if(toState.name === "login")
      return;
    if($rootScope.isAuthenticated)
      return;
    $location.path("/login");
  });
});