//log in
$(function(){
    $("form[name='log']").validate({
        rules:{
            username:'required',
            password:"required"
        },
        password:{
            reqired:true,
            minlength: 8
        },
        messages:{
            username:"please enter your user name",
            password:{
                required:"your password in wrong",
                minlength:"Your password must be at least 5 characters long"
            }
        },
        subimtHandler: function(){
            form.submit();
        }
    })
})