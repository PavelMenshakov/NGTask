export const mainTpl = `<nav class="navbar navbar-inverse" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" ui-sref=".home" translate="TITLE_TEXT"></a>
    </div>
    <ul class="nav navbar-nav multi-level">
        <li><a ui-sref=".home" ui-sref-active="active" translate="HOME_TEXT"></a></li>
        <li><a ui-sref=".tree" ui-sref-active="active" translate="TREE_TEXT"></a></li>
        <li ng-show="!isAutorised()"><a ui-sref=".login" ui-sref-active="active" translate="LOGIN_TEXT"></a></li>
        <li ng-show="isAutorised()" class="dropdown-submenu">
            <a ui-sref=".profile.view" ui-sref-active="active" translate="PROFILE_TEXT"></a>
            <ul class="dropdown-menu">
                <li class="hr"><a ui-sref=".profile.edit" ui-sref-active="active" tabindex="-1" translate="EDIT_TEXT"></a></li>
                <li><a ng-click="logout()" tabindex="-1" translate="LOGOUT_TEXT"></a></li>
            </ul>
        </li>
    </ul>
    <ul class="nav navbar-right">
        <li><a class="{{currentLang() === 'ru' ? 'btn btn-danger' : 'btn'}}" ng-click="changeLang('ru')">Ru</a></li>
        <li><a class="{{currentLang() === 'en' ? 'btn btn-danger' : 'btn'}}"  ng-click="changeLang('en')">Eng</a></li>
    </ul>
</nav>
<div class="container">
   <!-- <div ng-show="isLoading()" class="jumbotron" translate="LOAD_TEXT"></div>-->
    <div ui-view></div>
</div>`