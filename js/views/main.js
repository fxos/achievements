define(["exports", "fxos-mvc/dist/mvc", "gaia-header/dist/gaia-header"], function (exports, _fxosMvcDistMvc, _gaiaHeaderDistGaiaHeader) {
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

  var View = _fxosMvcDistMvc.View;
  var MainView = (function (View) {
    var MainView = function MainView() {
      View.apply(this, arguments);
    };

    _extends(MainView, View);

    MainView.prototype.render = function (isActivity) {
      this.el.insertAdjacentHTML("afterbegin", this.template(isActivity));
      if (isActivity) {
        this.el.querySelector("gaia-header").addEventListener("action", function (event) {
          if (event.detail.type === "back") {
            // Back from activity should close it via ActivityHelper.
            window.dispatchEvent(new CustomEvent("request-activity-finish"));
          }
        });
      }
    };

    MainView.prototype.template = function (isActivity) {
      var action = isActivity ? "action=\"back\"" : "";
      return "<gaia-header " + action + "><h1>Achievements</h1></gaia-header>";
    };

    return MainView;
  })(View);

  exports["default"] = MainView;
});