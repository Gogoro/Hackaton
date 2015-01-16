var clc = require('cli-color');

function route(pathname){
    console.log(clc.green('About to route pathname: ' + pathname));
}

exports.route = route;