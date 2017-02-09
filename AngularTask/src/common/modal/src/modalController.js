"use strict";

ajsApp.controller('modalCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
    $scope.close = $uibModalInstance.close;
}]);
