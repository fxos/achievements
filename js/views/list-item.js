define(["exports", "fxos-mvc/dist/mvc", "app/js/lib/helpers"], function (exports, _fxosMvcDistMvc, _appJsLibHelpers) {
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
  var IconHelper = _appJsLibHelpers.IconHelper;
  var ListItemView = (function (View) {
    var ListItemView = function ListItemView(options) {
      this.el = document.createElement("li");
      this.el.classList.add("item");
      View.call(this, options);

      if (this.achievement) {
        this.render(this.achievement);
      }
    };

    _extends(ListItemView, View);

    ListItemView.prototype.render = function (achievement) {
      View.prototype.render.call(this, [achievement]);
      IconHelper.setImage(this.el.querySelector(".icon"), achievement.image);
    };

    ListItemView.prototype.template = function (_ref) {
      var name = _ref.name;
      var description = _ref.description;
      var string = "\n      <img role=\"presentation\" class=\"icon\" />\n      <div role=\"presentation\" class=\"description\">\n        <h3 role=\"presentation\" class=\"achievement-name\">" + this.capitalize(name) + "</h3>\n        <h4 role=\"presentation\" class=\"achievement-description\">" + this.capitalize(description) + "</h4>\n      </div>\n    ";
      return string;
    };

    ListItemView.prototype.capitalize = function (string) {
      if (!string) {
        return "";
      }
      return string[0].toUpperCase() + string.slice(1);
    };

    return ListItemView;
  })(View);

  exports["default"] = ListItemView;
});