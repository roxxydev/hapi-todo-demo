'use strict';

exports.log = function (event, tags) {

    if (tags.log || tags.error) {
        console.log(`${tags.log ? '' : 'ERROR:'} ${event.data ? event.data : event.error}`);
    }
};
