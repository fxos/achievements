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

  add(achievements) {
    for (let key in achievements) {
      if (key in this.listItems) {
        continue;
      }
      let listItem = new ListItemView({ achievement: achievements[key] });
      this.listItems[key] = listItem;
      this.el.appendChild(listItem.el);
    }
  }

  remove(achievements, oldAchievements) {
    for (let key in oldAchievements) {
      if (key in achievements) {
        continue;
      }
      this.el.removeChild(this.listItems[key]);
      delete this.listItems[key];
    }
  }

  render(change) {
    if (change.name !== 'achievements') {
      return;
    }

    let achievements = change.object.achievements;
    if (!achievements) {
      this.el.textContent = '';
      return;
    }

    if (change.type === 'add') {
      this.add(achievements);
    } else if (change.type === 'delete') {
      this.remove(achievements, change.oldValue);
    }
  }
}
