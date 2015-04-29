'use strict';

import { Controller } from 'fxos-mvc/dist/mvc';
import { SettingsService } from 'fxos-settings-utils/dist/settings-utils';
import ListView from 'app/js/views/list';

export default class ListController extends Controller {
  constructor() {
    this.view = new ListView();
    new SettingsService({
      name: 'achievements',
      defaultValue: {},
      observer: this.view.render.bind(this.view),
      trigger: true
    });
  }
}
