# thunk-mixin
thunk-mixin will enhance object functions, which have Node style callback, into thunks.  It adds thunkified functions into its original object and names it original function name + _t.  It is useful for generator-based flow control such as [co](https://github.com/visionmedia/co).

## Installation

```
$ npm install thunk-mixin
```
## API
### thunkMixin(obj, methods):Obj
#### Parameters

- obj: object or constructor function to be enhanced.

- methods: String[] of methods names which have Node style call back.

- Returns: The enhanced obj is returned.

## Example
    var thunkMixin = require('thunk-mixin'),
      couchbase = require('couchbase'),
      cluster = new couchbase.Cluster('couchbase://127.0.0.1'),
      bucket = cluster.openBucket('default'),
	  co = require("co");

	thunkMixin(bucket, ["query", "get"]);
	//thunkMixin(bucket.constructor, ["query", "get"]);  //mixin through constructor for all instances
	co(function* (){
		var myDoc = yield bucket.get_t("your_doc_id");  //call thunkified function and pause
		//further process myDoc ...
	}).then(function(val){
		console.log(val);
	}, function(err){
		console.log(err);
	});



# License

  MIT
