ajsApp.directive('ageValidation', function () {   //create directive for age validation
    return {
        require:'ngModel',
        link:function (scope, elm, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.ageValidation =  function(modelValue, viewValue) {
                return ngModelCtrl.$isEmpty(modelValue) || (modelValue > 18 && modelValue < 65);
            };
        }
    };
});