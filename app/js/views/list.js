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

  noAchievements(achievements) {
    if (!achievements) { return true; }
    for (let key in achievements) {
      if (achievements.hasOwnProperty(key)) { return false; }
    }
    return true;
  }

  removeOldAchievements(achievements, oldAchievements) {
    for (let key in oldAchievements) {
      if (key in achievements) { continue; }
      this.el.removeChild(this.listItems[key]);
      delete this.listItems[key];
    }
  }

  addNewAchivements(achievements, oldAchievements) {
    for (let key in achievements) {
      if (oldAchievements && key in oldAchievements) { continue; }
      let listItem = new ListItemView({ achievement: achievements[key] });
      this.listItems[key] = listItem;
      this.el.appendChild(listItem.el);
    }
  }

  render({name, object, oldAchievements}) {
    let achievements = object.achievements;
    let noAchievements = this.noAchievements(achievements);
    let noOldAchievements = this.noAchievements(oldAchievements);

    document.body.classList.toggle('no-achievements', noAchievements);

    if (noAchievements) {
      this.el.textContent = 'You have no unlocked achievements yet.';
      return;
    }

    if (noOldAchievements) {
      this.el.textContent = '';
    }

    this.removeOldAchievements(achievements, oldAchievements);
    this.addNewAchivements(achievements, oldAchievements);
  }
}
