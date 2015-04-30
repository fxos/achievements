'use strict';

import { View } from 'fxos-mvc/dist/mvc';
import { IconHelper } from 'app/js/lib/helpers';

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
      <img role="presentation" class="icon" />
      <div role="presentation" class="description">
        <h3 role="presentation" class="achievement-name">${this.capitalize(name)}</h3>
        <h4 role="presentation" class="achievement-description">${this.capitalize(description)}</h4>
      </div>
    `;
    return string;
  }

  capitalize(string) {
    if (!string) { return ''; }
    return string[0].toUpperCase() + string.slice(1);
  }
}
