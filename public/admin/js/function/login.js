jQuery(function($) {
    $(document).on('click', '.toolbar a[data-target]', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.widget-box.visible').removeClass('visible');//hide others
        $(target).addClass('visible');//show target
    });
    $('#btn-login-dark').on('click', function(e) {
        $('body').attr('class', 'login-layout');
        $('#id-text2').attr('class', 'white');
        $('#id-company-text').attr('class', 'blue');
        e.preventDefault();
    });
    $('#btn-login-light').on('click', function(e) {
        $('body').attr('class', 'login-layout light-login');
        $('#id-text2').attr('class', 'grey');
        $('#id-company-text').attr('class', 'blue');
        e.preventDefault();
    });
    $('#btn-login-blur').on('click', function(e) {
        $('body').attr('class', 'login-layout blur-login');
        $('#id-text2').attr('class', 'white');
        $('#id-company-text').attr('class', 'light-blue');
        e.preventDefault();
    });
    $('#loginButton').on('click', function (e) {
        $.ajax({
            type: "post",
            url: "loginCheck",
            data: {account:$("#account").val(), pwd:$("#password").val()},
            dataType: "json",
            success: function(result){
                if(result.res.cd==1){
                    alert('登陆成功');
                }else{
                    alert(result.res.msg);
                }
            }
        });
        e.preventDefault();
    })
});
