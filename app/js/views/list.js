'use strict';

import { View } from 'components/fxos-mvc/dist/mvc';
import 'components/gaia-list/gaia-list';
import ListItemView from 'js/views/list-item';

export default class ListView extends View {
  constructor() {
    this.el = document.createElement('gaia-list');
    this.el.className = 'achievements-list';
    this.listItems = Object.create(null);
  }

  render(list) {
    for (let achievement of list) {
      let listItem = this.listItems[achievement.uid] = new ListItemView({
        list: this.el
      });
      listItem.render(achievement);
    }
  }
}
