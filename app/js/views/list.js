'use strict';

import { View } from 'fxos-mvc/dist/mvc';
import 'gaia-list/gaia-list';
import ListItemView from 'app/js/views/list-item';

export default class ListView extends View {
  constructor() {
    this.el = document.createElement('gaia-list');
    this.el.className = 'achievements-list';
    this.listItems = Object.create(null);
    document.body.appendChild(this.el);
  }

  hasAchievements(achievements) {
    if (!achievements) { return false; }
    for (let key in achievements) {
      if (achievements.hasOwnProperty(key)) { return true; }
    }
    return false;
  }

  render(achievements) {
    let hasAchievements = this.hasAchievements(achievements);

    document.body.classList.toggle('no-achievements', !hasAchievements);

    if (!hasAchievements) {
      this.el.textContent = 'You have no unlocked achievements yet.';
      return;
    }

    Object.keys(this.listItems).forEach(key => {
      if (key in achievements) { return; }
      this.el.removeChild(this.listItems[key]);
      delete this.listItems[key];
    });

    Object.keys(achievements).forEach(key => {
      if (key in this.listItems) { return; }
      let listItem = new ListItemView({ achievement: achievements[key] });
      this.listItems[key] = listItem;
      this.el.appendChild(listItem.el);
    });
  }
}
