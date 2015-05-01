'use strict';

import { View } from 'fxos-mvc/dist/mvc';
import 'gaia-header/dist/gaia-header';

export default class MainView extends View {

  render(isActivity) {
    this.el.insertAdjacentHTML('afterbegin', this.template(isActivity));
    if (isActivity) {
      this.el.querySelector('gaia-header').addEventListener('action', event => {
        if (event.detail.type === 'back') {
          // Back from activity should close it via ActivityHelper.
          window.dispatchEvent(new CustomEvent('request-activity-finish'));
        }
      });
    }
  }

  template(isActivity) {
    let action = isActivity ? 'action="back"' : '';
    return `<gaia-header ${action}><h1>Achievements</h1></gaia-header>`;
  }
}
