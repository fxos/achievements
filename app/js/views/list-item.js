'use strict';

import { View } from 'components/fxos-mvc/dist/mvc';
import { IconHelper } from 'js/lib/helpers';

export default class ListItemView extends View {
  constructor(options) {
    this.el = document.createElement('li');
    this.el.classList.add('item');
    super(options);
  }

  render(achievement) {
    super([achievement]);
    IconHelper.setImage(this.el.querySelector('.icon'), achievement.icon);
    this.list.appendChild(this.el);
  }

  template({ name, info, icon }) { // jshint ignore:line
    let string = `
      <img class="icon" />
      <div flex class="description">
        <p class="name">${this.capitalize(name)}</p>
      </div>
      <span class="info">${this.capitalize(info)}</span>`;
    return string;
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}
