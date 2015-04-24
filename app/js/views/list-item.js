'use strict';

import { View } from 'components/fxos-mvc/dist/mvc';
import { IconHelper } from 'js/lib/helpers';

export default class ListItemView extends View {
  constructor(options) {
    this.el = document.createElement('li');
    this.el.classList.add('item');
    super(options);

    if (this.achievement) {
      this.render(this.achievement);
    }
  }

  render(achievement) {
    super([achievement]);
    IconHelper.setImage(this.el.querySelector('.icon'), achievement.image);
  }

  template({ name, description }) {
    let string = `
      <img class="icon" />
      <div flex class="description">
        <p class="name">${this.capitalize(name)}</p>
      </div>
      <span class="desciption">${this.capitalize(description)}</span>`;
    return string;
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}
