/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demotechnicallist/technical_interview/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
