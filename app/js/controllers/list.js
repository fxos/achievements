'use strict';

import { Controller } from 'components/fxos-mvc/dist/mvc';
import ListModel from 'js/models/list';
import ListView from 'js/views/list';

export default class ListController extends Controller {
  constructor() {
    this.model = new ListModel();
    this.view = new ListView();
  }

  main() {
    this.view.render();
  }
}
