'use strict';
/* global console */

export class IconHelper {
  static setImage(imageElement, imagePath) {
    imageElement.src = imagePath || window.DEFAULT_ICON_URL;
    imageElement.onerror = (e) => {
      console.warn('Warning, failed to load icon url', imageElement.src,
        e.message);
      if (!imageElement.src.includes(window.DEFAULT_ICON_URL.substr(1))) {
        imageElement.src = window.DEFAULT_ICON_URL;
      }
    };
  }
}
