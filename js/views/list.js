define(["exports", "fxos-mvc/dist/mvc", "gaia-list/gaia-list", "app/js/views/list-item"], function (exports, _fxosMvcDistMvc, _gaiaListGaiaList, _appJsViewsListItem) {
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
  var ListItemView = _appJsViewsListItem["default"];
  var ListView = (function (View) {
    var ListView = function ListView() {
      this.el = document.createElement("gaia-list");
      this.el.className = "achievements-list";
      this.listItems = Object.create(null);
      document.body.appendChild(this.el);
    };

    _extends(ListView, View);

    ListView.prototype.noAchievements = function (achievements) {
      if (!achievements) {
        return true;
      }
      for (var key in achievements) {
        if (achievements.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };

    ListView.prototype.removeOldAchievements = function (achievements, oldAchievements) {
      for (var key in oldAchievements) {
        if (key in achievements) {
          continue;
        }
        this.el.removeChild(this.listItems[key]);
        delete this.listItems[key];
      }
    };

    ListView.prototype.addNewAchivements = function (achievements, oldAchievements) {
      for (var key in achievements) {
        if (oldAchievements && key in oldAchievements) {
          continue;
        }
        var listItem = new ListItemView({ achievement: achievements[key] });
        this.listItems[key] = listItem;
        this.el.appendChild(listItem.el);
      }
    };

    ListView.prototype.render = function (_ref) {
      var name = _ref.name;
      var object = _ref.object;
      var oldAchievements = _ref.oldAchievements;
      var achievements = object.achievements;
      var _noAchievements = this.noAchievements(achievements);
      var noOldAchievements = this.noAchievements(oldAchievements);

      document.body.classList.toggle("no-achievements", _noAchievements);

      if (_noAchievements) {
        this.el.textContent = "You have no unlocked achievements yet.";
        return;
      }

      if (noOldAchievements) {
        this.el.textContent = "";
      }

      this.removeOldAchievements(achievements, oldAchievements);
      this.addNewAchivements(achievements, oldAchievements);
    };

    return ListView;
  })(View);

  exports["default"] = ListView;
});