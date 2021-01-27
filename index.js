var fs = require('fs');
var path = require('path');
var request=require('request');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			var _favicon = "https://gitee.com/ixnzone/img-bed/raw/master/favicon.ico"
				_apple = "https://gitee.com/ixnzone/img-bed/raw/master/favicon.png"
			if (this.options.pluginsConfig['uri-favicon']) {
				_favicon = this.options.pluginsConfig['uri-favicon']['favicon'] || _favicon
				_apple = this.options.pluginsConfig['uri-favicon']['apple'] || _apple
			}
			var faviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
			var applePath = path.join(process.cwd(),'_book', 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png')
			if (fs.existsSync(faviconPath)){
				fs.unlinkSync(faviconPath);
				request(_favicon).pipe(fs.createWriteStream(faviconPath));
			}
			if (fs.existsSync(applePath)){
				fs.unlinkSync(applePath);
				request(_apple).pipe(fs.createWriteStream(applePath))
			}
		}
            
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
