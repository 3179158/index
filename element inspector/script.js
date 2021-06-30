$(document).ready(function() {
    $("div").each(function() {
        var elm = $(this);
        var classList = elm.attr('class');
        classList = classList.substr(classList.indexOf(' ') + 1);

        elm.on("mousedown", function() {
            alert($("." + classList).css('background'));
        });
    });
});