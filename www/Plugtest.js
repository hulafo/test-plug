var exec = cordova.require('cordova/exec');

var PlugTest = function() {
    console.log('Plugtest instanced');
};

Plugtest.prototype.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'Plugtest', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = Plugtest;
}