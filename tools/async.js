// test2.js
const async = require('async');

async.waterfall([
    function(callBack) {
        console.log('1');
        callBack(null, 'one', 'two');
    },
    function(args1, args2, callBack) {
        console.log('2');
        console.log('args1:' + args1);
        console.log('args2:' + args2);
        callBack(null, 'done');
        // callBack(null, ['done', 'end']);  
    }
],
function(err, results) {
    console.log(results);
});
