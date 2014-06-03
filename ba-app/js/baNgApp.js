//Define an angular module for our app
var app = angular.module('baApp', ['ngRoute','ngAnimate']);



app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/page1', {
                templateUrl: 'partials/page1.partial.html',
                controller: 'page1Controller'
            }).
            when('/page2', {
                templateUrl: 'partials/page2.partial.html',
                controller: 'page2Controller'
            }).
            when('/page3', {
                templateUrl: 'partials/page3.partial.html',
                controller: 'page3Controller'
            }).
            when('/page4', {
                templateUrl: 'partials/page4.partial.html',
                controller: 'page4Controller'
            }).
            otherwise({
                redirectTo: '/page1'
            });
    }]);


Array.prototype.clear = function() {
  while (this.length > 0) {
    this.pop();
  }
};

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

Array.prototype.remove = function(obj) {
    var i = this.indexOf(obj);
    if (i != -1) {
        this.splice(i, 1);
    }
};