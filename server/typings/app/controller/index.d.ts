// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHello = require('../../../app/controller/hello');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');

declare module 'egg' {
  interface IController {
    hello: ExportHello;
    home: ExportHome;
    login: ExportLogin;
  }
}
