ajsApp.service('TreeData',[
    '$http',
    function($http){
    var treeData = {};
    treeData.getData = function () {
        var path = 'http://localhost:3000/api/tree';
        var data = $http({
            method: 'GET',
            url: path
        }).then(function (resp) {
            return resp.data;
        });

        return data;
    };

    return treeData;
}]);