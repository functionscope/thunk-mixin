# thunk-mixin

  Enhance object functions which have node style callback into thunks.  It adds thunkified functions into its original object and name it as original function name + _t.  It is useful for generator-based flow control such as [co](https://github.com/visionmedia/co).

## Installation

```
$ npm install thunk-mixin
```
	

## Example
    var thunkMixin = require('thunk-mixin'),
    	couchbase = require('couchbase'),
    	cluster = new couchbase.Cluster('couchbase://127.0.0.1'),
    	bucket = cluster.openBucket('default'),
		co = require("co");

	thunkMixin(bucket, ["query", "get"]);
	//thunkMixin(bucket.constructor, ["query", "get"]);  //mixin through constructor for all instances
	co(function* (){
		yield bucket.get_t("your_doc_id");  //
	}).then(function(val){
		console.log(val);
	}, function(err){
		console.log(err);
	});



# License

  MIT
