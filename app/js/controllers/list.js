'use strict';

import { Controller, Model } from 'components/fxos-mvc/dist/mvc';
import { SettingsService } from
  'components/fxos-settings-utils/dist/settings-utils';
import ListView from 'js/views/list';

export default class ListController extends Controller {
  constructor() {
    this.model = new Model();
    this.view = new ListView();
    this.model.on('achievements', this.view.render);
    new SettingsService({
      name: 'achievements',
      defaultValue: {},
      observer: this.update,
      trigger: true
    });
  }

  update(achievements) {
    this.model.achievements = achievements;
  }

  main() {
    this.view.render();
  }
}
