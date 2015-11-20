# hexo-tag-katex

A Tag plugin to use [Katex](https://www.npmjs.com/package/katex) on Hexo.

Installation:
-------------

``` bash
$ npm install hexo-tag-katex --save
```

Usage:
------
```
{% katex [displayMode] %}

a^{b^{\sqrt{c}}}

{% endkatex %}
```

Default value of display mode is true.

Dependencies:
-------------

This plugin dependes on [katex module](https://www.npmjs.com/package/katex). [Katex](https://github.com/Khan/KaTeX) is a wonderful contribution from [Khan Academy](https://www.khanacademy.org/).