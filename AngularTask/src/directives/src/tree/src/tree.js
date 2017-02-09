import {treeTpl} from '../src/tpl/tree.tpl.js';

ajsApp.directive('treeView',['TreeRecursionFix',function(TreeRecursionFix) {
        return {
            restrict: 'E',
            scope: {
                treeModel: '=',
                searchModel: '='
            },
            template: treeTpl,
            compile: function (element) {
                return TreeRecursionFix.compile(element, function (scope, element) {
                    scope.selectNodeHead = function (selectedNode) {
                        if (selectedNode.children !== undefined && selectedNode.children.length) {
                            selectedNode.opened = !selectedNode.opened;
                        }
                    };
                });
            }
        };
    }]);