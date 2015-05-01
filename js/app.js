define(["exports"], function (exports) {
  /* globals requirejs */

  "use strict";

  requirejs.config({
    baseUrl: "components",
    paths: {
      app: "../",
      "gaia-component": "gaia-component/gaia-component"
    }
  });

  requirejs(["app/js/index"]);
});