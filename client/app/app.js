'use strict';

angular.module('cuteStoreApp', [
  'cuteStoreApp.auth',
  'cuteStoreApp.admin',
  'cuteStoreApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
