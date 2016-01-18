'use strict';

angular.module('cuteStoreApp.auth', [
  'cuteStoreApp.constants',
  'cuteStoreApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
