"use strict";

var tn = namespace('ajsApp.pages.tree');
tn.$module = angular.module('ajsApp.pages.tree', [
    'ajsApp.services',
    'ajsApp.directives'
]).controller('treeCtrl',[
    '$scope','TreeData',
    function($scope, TreeData) {
        TreeData.getData().then(function(data){
            $scope.treeData = data;
        });
		
		$scope.post = {};
		
		$scope.loadPosts = function() {
			fetch('http://localhost:3000/posts').then((res) => {
				return res.json();
			}).then((data) => {
				$scope.postsArray = data;
				$scope.$applyAsync();
			});
		}
		
		$scope.loadPosts();
		
		$scope.addPost = function() {
			let headers = new Headers();
				headers.append("Content-Type", "application/x-www-form-urlencoded");
			
			fetch('http://localhost:3000/posts',  {
				method: "POST",
				headers,
				body: 'title=' + $scope.post.title + '&text=' + $scope.post.text + '&author=' + $scope.post.author
			}).then((res) => {
				$scope.post.title = '';
				$scope.post.text = '';
				$scope.post.author = '';
				$scope.$applyAsync();
				return res.json();
			}).then((data) => {
				console.log(data);
			});
		}
		
    }]);