define(["exports", "app/js/globals", "app/js/controllers/main"], function (exports, _appJsGlobals, _appJsControllersMain) {
  "use strict";

  var MainController = _appJsControllersMain["default"];


  var mainController = new MainController();
  mainController.main();
});