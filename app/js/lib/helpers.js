'use strict';
/* global console */

export class IconHelper {
  static setImage(imageElement, imagePath) {
    imageElement.src = imagePath || window.DEFAULT_ICON_URL;
    imageElement.onerror = (e) => {
      console.warn('Warning, failed to load icon url', imageElement.src,
        e.message);
      if (imageElement.src.indexOf(window.DEFAULT_ICON_URL.substr(1)) < 0) {
        imageElement.src = window.DEFAULT_ICON_URL;
      }
    };
  }
}

export class ActivityHelper {
  constructor({name}) {

    this.ready = navigator.mozHasPendingMessage &&
                 navigator.mozHasPendingMessage('activity') ?
      new Promise(resolve => {
        navigator.mozSetMessageHandler('activity', activity => {
          if (activity.source.name !== name) {
            activity.postError('Unsupported activity');
            return;
          }

          this.isActivity = true;
          window.addEventListener('request-activity-finish', () => {
            activity.postResult('finished');
          });
          resolve();
        });
      }) : Promise.resolve();
  }
}
