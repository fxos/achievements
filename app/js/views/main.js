'use strict';

import { View } from 'fxos-mvc/dist/mvc';
import 'gaia-header/dist/gaia-header';

export default class MainView extends View {

  template() {
    return `<gaia-header><h1>Achievements</h1></gaia-header>`;
  }
}
