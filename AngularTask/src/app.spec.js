import './index.js';

describe('Posts directive', function() {
	beforeEach(angular.mock.module('ajsApp'));
	var ctrl, scope, compile;

	beforeEach(inject(function($controller, $rootScope, $compile) {
		scope = $rootScope.$new();
		ctrl = $controller('treeCtrl', {
			$scope: scope
		});
		compile = $compile;
	}));
	
  it('Test loadPosts function', function() {
    expect(scope.loadPosts).to.be.an('function');
  });
  
  it('Test addPost function', function() {
    expect(scope.addPost).to.be.an('function');
  });
  
  it('Test loading tree data function', function() {
	  scope.treeDataPromise.then(function(data){
           expect(data).to.be.exist;
        });
  });
  
  it('Test loading posts data function', function() {
	  scope.loadPosts().then(function(data){
           expect(data).to.be.exist;
        });
  });
  
  it('Test add post data function', function() {
	  scope.post.title = 'testPostTitle';
      scope.post.text = 'testPostText';
	  scope.post.author = 'testPostAuthor';
	  scope.addPost().then(function(data){
           expect(data).to.be.exist;
        });
  });
  
  it('Test tree directive', function() {
    var element = compile('<tree-view tree-model="treeData" search-model="queryText" class="treeview"></tree-view>')(scope);
    
	scope.$digest();
    
	expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
});