export const loginRmTpl = `<div class="jumbotron text-center">
    <form name="emailForm" class="form-group" novalidate>
        <div translate="EMAIL_TEXT"></div><input name="email" class="form-control" type="text" ng-model="email" required /><br />
        <input ng-disabled="emailForm.$invalid" class="btn btn-default" type="submit" ng-click="update(user)" value="{{'REMIND_TEXT' | translate}}" />
        <input ui-sref="navigation.login" class="btn btn-danger" type="submit" ng-click="update(user)" value="{{'CANCEL_TEXT' | translate}}" />
    </form>
</div>`