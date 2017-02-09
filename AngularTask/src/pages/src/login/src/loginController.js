ajsApp.controller('loginCtrl', [ '$scope', '$state','Authorization', '$translate',
        function($scope, $state, Authorization, $translate) {
            $scope.login = function(user) {
                Authorization.login(user).then(function(data){
                    if(data) {
                        $state.go('navigation.profile.view');
                    } else {
                        alert($translate.instant('ACCESS_DECLINE_TEXT'));
                    }
                });
            };
        }
    ]);


