/*
 * JQuery nok : script
 * http://git.eff.one
 *
 * Copyright (c) 2018 effone
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * version: 0.1
 * Date: 2018-01-20
 */

 (function($) {
    $.nok = function(options) {
        var defaults = {
            message: '',    // The message to display
            type: 'info',   // Type of message : info / error / success
            sticky: false,  // Stay or hide after sometimes, bool
            stay: 4         // Seconds the message stays (if not sticky)
        };
        options = $.extend(defaults, options);
        var target = 'nok'; // Out of options as it is related to static id / class names in css file
        // Create message block only if there is message
        if($.trim(options.message)){ // $.trim() for ie8 legacy support, can be used as options.message.trim()
            // Create container if not exists
            if($("#" + target).length == 0) {
                $('body').append($('<div id="' + target + '"></div>'));
            }
            var msg = $('<div class="' + target + ' ' + target + '_' + options.type + '"><span>' + options.message + '</span></div>');
            $("#" + target).append($(msg));
            $(msg).animate({
                "right": "10px"
            }, "fast");
            if(!options.sticky && $.isNumeric(options.stay)) {
                setInterval(function() {
                    wipe(msg);
                }, options.stay * 1000);
            }
        }
        $(document).on('click', '.' + target, function() {
            wipe(this);
        });

        function wipe(me) {
            $(me).animate({
                "right": "-300px"
            }, function() {
                $(me).slideUp('fast', function() { // Required for smooth transition of existing message blocks
                    $(me).remove();
                    if(!$.trim($('#' + target).html()).length) { // Remove container if no message block exists
                        $('#' + target).remove();
                    }
                });
            });
        }
    }
})(jQuery);