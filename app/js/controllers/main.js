'use strict';

import { RoutingController } from 'fxos-mvc/dist/mvc';
import MainView from 'app/js/views/main';
import ListController from 'app/js/controllers/list';
import { ActivityHelper } from 'app/js/lib/helpers';

export default class MainController extends RoutingController {

  constructor() {
    this.view = new MainView({ el: document.body });
    this.activityHelper = new ActivityHelper({ name: 'view' });
    this.listController = new ListController();
    super({ '': this.listController });
  }

  main() {
    this.activityHelper.ready.then(() => {
      this.view.render(this.activityHelper.isActivity);
      this.route();
      document.body.classList.remove('loading');
    });
  }
}
