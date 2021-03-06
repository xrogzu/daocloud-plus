/**
 * Copyright (C) 2015 JianyingLi <lijy91@foxmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const path = require('path');
const {app, ipcMain} = require('electron');

const AppTray = require('./scripts/app_tray');
const LoginWindow = require('./scripts/login');
const PreferencesWindow = require('./scripts/preferences');

class DaoCloudPlus {

  constructor() {
    this.tray = new AppTray();
    this.loginWindow = null;
    this.preferencesWindow = null;
  }

  init() {
    this.tray.menubar.on('ready', () => {
      // this.createLoginWindow();
    })
    // this.tray.menubar.on('after-show', () => {
    //   this.createLoginWindow();
    //   this.loginWindow.show();
    // })
  }

  createLoginWindow() {
    this.loginWindow = new LoginWindow();
  }

}

new DaoCloudPlus().init();
