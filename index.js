'use strict';

var katex = require('katex');

/**
* {% katex [displayMode=true] %}
*/

hexo.extend.tag.register('katex', function(args, content){

	var displayMode = (args[0] && args[0]!== "true") ? false : true;

	return katex.renderToString(content, {
		displayMode: displayMode
	});

}, {ends: true});