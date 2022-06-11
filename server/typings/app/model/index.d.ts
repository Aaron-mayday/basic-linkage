// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHello = require('../../../app/model/hello');

declare module 'egg' {
  interface IModel {
    Hello: ReturnType<typeof ExportHello>;
  }
}
