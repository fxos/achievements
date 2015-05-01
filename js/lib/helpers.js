define(["exports"], function (exports) {
  "use strict";
  var IconHelper = (function () {
    var IconHelper = function IconHelper() {};

    IconHelper.setImage = function (imageElement, imagePath) {
      imageElement.src = imagePath || window.DEFAULT_ICON_URL;
      imageElement.onerror = function (e) {
        console.warn("Warning, failed to load icon url", imageElement.src, e.message);
        if (imageElement.src.indexOf(window.DEFAULT_ICON_URL.substr(1)) < 0) {
          imageElement.src = window.DEFAULT_ICON_URL;
        }
      };
    };

    return IconHelper;
  })();

  exports.IconHelper = IconHelper;
  var ActivityHelper = function ActivityHelper(_ref) {
    var _this = this;
    var name = _ref.name;


    this.ready = navigator.mozHasPendingMessage && navigator.mozHasPendingMessage("activity") ? new Promise(function (resolve) {
      navigator.mozSetMessageHandler("activity", function (activity) {
        if (activity.source.name !== name) {
          activity.postError("Unsupported activity");
          return;
        }

        _this.isActivity = true;
        window.addEventListener("request-activity-finish", function () {
          activity.postResult("finished");
        });
        resolve();
      });
    }) : Promise.resolve();
  };

  exports.ActivityHelper = ActivityHelper;
});