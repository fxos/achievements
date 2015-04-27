'use strict';

import { RoutingController } from 'components/fxos-mvc/dist/mvc';
import MainView from 'js/views/main';
import ListController from 'js/controllers/list';

export default class MainController extends RoutingController {

  constructor() {
    this.view = new MainView({ el: document.body });
    this.listController = new ListController();
    super({ '': this.listController });
  }

  main() {
    this.route();
    document.body.classList.remove('loading');
  }
}
