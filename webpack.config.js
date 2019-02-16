'use strict';


module.exports = function(env) {return require("./webpack." + Object.keys(env)[0] + ".js");}