function getUserMedia(options, successCallback, failureCallback) {
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
    }
}

function getStream (type) {


    var constraints = {};
    constraints[type] = true;
    getUserMedia(constraints, function (stream) {
        var mediaControl = document.querySelector(type);

        if ('srcObject' in mediaControl) {
            mediaControl.srcObject = stream;
            mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        } else if (navigator.mozGetUserMedia) {
            mediaControl.mozSrcObject = stream;
        }
    }, function (err) {
        alert('Error: ' + err);
    });
}