/**
 * Created by arkulkar on 3/22/2016.
 */
var express = require('express');
var fs = require('fs');
var init = require('./Server/Controller/mainController');
var bodyParser = require('body-parser');
var route = require('./Server/Route/route');
var app = express();

init.init();

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(__dirname + '/public'));

route(app);

app.listen(3000);

console.log("App listening on port 3000");

