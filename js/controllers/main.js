define(["exports", "fxos-mvc/dist/mvc", "app/js/views/main", "app/js/controllers/list", "app/js/lib/helpers"], function (exports, _fxosMvcDistMvc, _appJsViewsMain, _appJsControllersList, _appJsLibHelpers) {
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

  var RoutingController = _fxosMvcDistMvc.RoutingController;
  var MainView = _appJsViewsMain["default"];
  var ListController = _appJsControllersList["default"];
  var ActivityHelper = _appJsLibHelpers.ActivityHelper;
  var MainController = (function (RoutingController) {
    var MainController = function MainController() {
      this.view = new MainView({ el: document.body });
      this.activityHelper = new ActivityHelper({ name: "view" });
      this.listController = new ListController();
      RoutingController.call(this, { "": this.listController });
    };

    _extends(MainController, RoutingController);

    MainController.prototype.main = function () {
      var _this = this;
      this.activityHelper.ready.then(function () {
        _this.view.render(_this.activityHelper.isActivity);
        _this.route();
        document.body.classList.remove("loading");
      });
    };

    return MainController;
  })(RoutingController);

  exports["default"] = MainController;
});