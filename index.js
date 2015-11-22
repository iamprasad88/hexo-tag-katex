'use strict';

var katex = require('katex'),
	util = require('hexo-util');

/**
* {% katex [displayMode=true] %}
*/

hexo.extend.tag.register('katex', function(args, content){
	var displayMode = (args[0] && args[0]!== "true") ? false : true;

	return katex.renderToString(content, {
		displayMode: displayMode
	});
}, {ends: true});

/*
* prepend link to Khan Academy CSS
*/
hexo.extend.filter.register('after_post_render', function(data){
	data.content = util.htmlTag('link',{
		rel: 'stylesheet',
		type: 'text/css',
		href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
	}) + data.content;

	return data;
});