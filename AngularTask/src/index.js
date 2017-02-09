import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import 'angular-md5';
import 'angular-bootstrap';
import 'angular-ui-bootstrap';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-animate';
import 'angular-sanitize';
import app from './app.js';
import './config.js';
import './services/src/routingRestructuring.js';
import './services/src/recursionFix.js';
import './services/src/authorization.js';
import './services/src/treeDataService.js';

import './common/routing.js';

import './directives/src/ageValidation/src/ageValidation.js';
import './directives/src/dateValidation/src/dateValidation.js';
import './directives/src/emailValidation/src/emailValidation.js';
import './directives/src/userName/src/userName.js';
import './directives/src/tree/src/tree.js';

import './pages/src/login/src/loginController.js';
import './pages/src/tree/src/treeController.js';
import './pages/src/navigation/src/navigationController.js';

import './common/modal/src/modalController.js';


export default app;