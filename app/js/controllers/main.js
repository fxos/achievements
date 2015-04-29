'use strict';

import { RoutingController } from 'fxos-mvc/dist/mvc';
import MainView from 'app/js/views/main';
import ListController from 'app/js/controllers/list';

export default class MainController extends RoutingController {

  constructor() {
    this.view = new MainView({ el: document.body });
    this.view.render();
    this.listController = new ListController();
    super({ '': this.listController });
  }

  main() {
    this.route();
    document.body.classList.remove('loading');
  }
}
