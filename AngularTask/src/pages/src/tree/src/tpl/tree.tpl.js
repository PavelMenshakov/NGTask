export const treeTpl = `<form name="searchForm" class="form-group" novalidate>
    <input name="queryText" class="form-control" type="text" ng-model="queryText"/>
</form>

<tree-view tree-model="treeData" search-model="queryText" class="treeview"></tree-view>
<tree-view tree-model="treeData2" search-model="queryText" class="treeview"></tree-view>



        <div>Title</div><input name="title" class="form-control" type="text" ng-model="post.title" required /><br />
        <div>Text</div> <input name="text" class="form-control"  type="text" ng-model="post.text" /><br />
		<div>Author</div> <input name="author" class="form-control" type="text" ng-model="post.author" /><br />
		<button class="btn btn-default" ng-click="addPost()">Add new post</button>
		<button class="btn btn-default" ng-click="loadPosts()">Reload Posts</button>

<div class="jumbotron text-center" ng-repeat="post in postsArray">
<h1>{{post.title}}</h1>
<p>{{post.text}}</p>
<p>{{post.author}}</p>
</div>

`