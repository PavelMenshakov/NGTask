"use strict";

var ps = namespace('ajsApp.pages');
ps.$module = angular.module('ajsApp.pages', [
    'ajsApp.directives',
    'ajsApp.services',
    'ajsApp.pages.tree',
    'ajsApp.pages.login',
    'ajsApp.pages.navigation'
]);
