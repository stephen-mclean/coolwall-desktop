'use strict';

angular.module('coolwallApp')
.directive('topNav', function() {
	return {
		restrict : 'E',
		templateUrl : 'views/directives/topNav.html',
		scope: {
			user: '='
		},
		controller : function($scope) {
			
		}
	};
});