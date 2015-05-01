define(["exports", "fxos-mvc/dist/mvc", "fxos-settings-utils/dist/settings-utils", "app/js/views/list"], function (exports, _fxosMvcDistMvc, _fxosSettingsUtilsDistSettingsUtils, _appJsViewsList) {
  "use strict";

  var _extends = function (child, parent) {
    child.prototype = Object.create(parent.prototype, {
      constructor: {
        value: child,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    child.__proto__ = parent;
  };

  "use strict";

  var Controller = _fxosMvcDistMvc.Controller;
  var Model = _fxosMvcDistMvc.Model;
  var SettingsService = _fxosSettingsUtilsDistSettingsUtils.SettingsService;
  var ListView = _appJsViewsList["default"];
  var ListController = (function (Controller) {
    var ListController = function ListController() {
      this.view = new ListView();

      this.model = new Model();
      this.model.on("achievements", this.view.render.bind(this.view));

      new SettingsService({
        name: "achievements",
        defaultValue: {},
        observer: this.update.bind(this),
        trigger: true
      });
    };

    _extends(ListController, Controller);

    ListController.prototype.update = function (achievements) {
      this.model.achievements = achievements;
    };

    return ListController;
  })(Controller);

  exports["default"] = ListController;
});