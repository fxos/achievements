'use strict';
/* global require */

window.COMPONENTS_BASE_URL = './components/';
window.DEFAULT_ICON_URL = './img/icons/default.png';
require.config({
  baseUrl: './',
  paths: {
    'gaia-component': 'components/gaia-component/gaia-component'
  }
});