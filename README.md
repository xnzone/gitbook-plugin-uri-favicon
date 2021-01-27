# gitbook-plugin-uri-favicon
Add your own favicon from uri to gitbook themes.

Plugin deletes the gitbook favicon located at "_book/gitbook/images/favicon.ico" and replaces with your favicon.

There is probably a better way to do this, but this at least works for most use cases. 


# Install via gitbook
## In book.json
- Add custom-favicon to your plugins array
- Add path to your favicon in favicon under pluginsConfig

book.json
```json
{
	"plugins" : ["uri-favicon@git+https://github.com/xnzone/gitbook-plugin-uri-favicon#0.0.1"],
	"pluginsConfig" : {
		"uri-favicon": {
            "favicon": "https://gitee.com/ixnzone/img-bed/raw/master/favicon.ico",
            "apple": "https://gitee.com/ixnzone/img-bed/raw/master/favicon.png"
        }
	}
}
```
# using gitbook-cli
```bash
gitbook install
```
