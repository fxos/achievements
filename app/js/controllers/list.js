'use strict';

import { Controller, Model } from 'fxos-mvc/dist/mvc';
import { SettingsService } from 'fxos-settings-utils/dist/settings-utils';
import ListView from 'app/js/views/list';

export default class ListController extends Controller {
  constructor() {
    this.view = new ListView();

    this.model = new Model();
    this.model.on('achievements', this.view.render.bind(this.view));

    new SettingsService({
      name: 'achievements',
      defaultValue: {},
      observer: this.update.bind(this),
      trigger: true
    });
  }

  update(achievements) {
    this.model.achievements = achievements;
  }
}
