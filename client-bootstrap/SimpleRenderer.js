var fs = require("fs");
var path = require("path");

var html = "<div id='content'></div><script src='SCRIPT_URL'></script>";

function SimpleRenderer(options) {
	this.html = html.replace("SCRIPT_URL", options.scriptUrl);
}

SimpleRenderer.prototype.render = function (_path, callback) {
	callback(null, this.html);
};

module.exports = SimpleRenderer;
