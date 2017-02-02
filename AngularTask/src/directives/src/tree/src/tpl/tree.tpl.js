export const treeTpl = `
<ul>
    <li ng-repeat="node in  treeModel.children | filter: searchModel">
        <i ng-class="!node.children ? 'record': (node.children.length ? 'not-empty' :'empty-node')" data-ng-click="selectNodeHead(node)"></i>
		<span ng-class="node.name.toLowerCase().indexOf(searchModel.toLowerCase())> -1 && searchModel != '' ? 'filtered': 'normal'" ng-click="selectNodeHead(node)">{{node.name}}</span>
		<tree-view ng-show="node.opened" tree-model="node" search-model="searchModel" class="treeview"></tree-view>
    </li>
</ul>
`