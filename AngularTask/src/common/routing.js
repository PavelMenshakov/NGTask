"use strict";
import {mainTpl} from '../pages/src/navigation/src/tpl/navigation.tpl.js';
import {homeTpl} from '../pages/src/home/src/tpl/home.tpl.js';
import {treeTpl} from '../pages/src/tree/src/tpl/tree.tpl.js';
import {loginTpl} from '../pages/src/login/src/tpl/login.tpl.js';
import {loginRmTpl} from '../pages/src/login/src/tpl/login-remind.tpl.js';


ajsApp.config(function(routingRestructuringProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');


        var states = {
            abstract: true,
            name: 'navigation',
            template: mainTpl,
            controller: 'navigationCtrl',
            children: [
                {
                    name: 'navigation.home',
                    url: '/home',
                    template: homeTpl
                },
                {
                    name: 'navigation.tree',
                    url: '/tree',
                    template: treeTpl,
                    controller: 'treeCtrl'
                },
                {
                    name: 'navigation.login',
                    url: '/login',
                    template: loginTpl,
                    controller: 'loginCtrl',
                    children: [{
                        name: 'navigation.login.remind',
                        url: '/remind',
                        template: loginRmTpl
                    }]
                }
            ]
        };

        routingRestructuringProvider.state(states);

});