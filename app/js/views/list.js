'use strict';

import { View } from 'fxos-mvc/dist/mvc';
import 'gaia-list/gaia-list';
import ListItemView from 'app/js/views/list-item';

export default class ListView extends View {
  constructor() {
    this.el = document.createElement('gaia-list');
    this.el.className = 'achievements-list';
    this.listItems = new Map();
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

    if (this.listItems.length === 0) {
      this.el.textContent = '';
    }

    this.listItems.entries().forEach(([key, listItem]) => {
      if (key in achievements) { return; }
      this.el.removeChild(listItem);
      this.listItems.delete(key);
    });

    Object.keys(achievements).forEach(key => {
      if (this.listItems.has(key)) { return; }
      let listItem = new ListItemView({ achievement: achievements[key] });
      this.listItems.set(key, listItem);
      this.el.appendChild(listItem.el);
    });
  }
}
