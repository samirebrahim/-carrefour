$(document).ready(function () {

    var username = $('#signInForm_username');
    var password = $('#signInForm_password');
    // validate login form 
    username.on('input', function () {
        validateFiled($(this))
    });

    password.on('input', function () {
        validateFiled($(this))
    });
    function validateFiled(element) {
        if (element.val()) { element.parent().removeClass("invalid").addClass("valid"); }
        else { element.parent().removeClass("valid").addClass("invalid"); }
    }
    $("#signIn").click(function (event) {
        var form_data = $("#signInForm").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#signInForm_" + form_data[input]['name']);
            validateFiled(element);
            if (!element.val()) { error_free = false; }
        }
        if (!error_free) {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            $.post("http://xqg2l.mocklab.io/thing/8",
                {
                    username: username.val(),
                    password: password.val()
                },
                function (data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                });
        }
    });

    $('.search .icon').click(function () {
    $('.search').toggleClass('expanded');
});
});
