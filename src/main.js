// jQuery
window.jQuery = window.$ = require('jquery');
require('jquery-ui/sortable');

// Knockout
window.ko = require('knockout');
require('knockout-postbox');
require('knockout-sortable');

// Bootstrap
require('bootstrap');


// Load formBuilder component
require('./formBuilder');


// Initialise everything
$(document).ready(function() {
    // Initialise Knockout
    ko.applyBindings();

    // Setup non-knockout jquery stuff
    $('button').click(function() {
        console.log('clicked other buttons from jquery');
    });
});
