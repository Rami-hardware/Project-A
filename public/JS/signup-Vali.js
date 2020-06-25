$(function() {
    $("#signup").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username:"required",
        contry:"required",
        city:"required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password:{
            required:true,
            minlength: 8 ,
            equalTo:"#password1"
        }
      },
      messages: {
        firstname: "required",
        lastname: "required",
        password: {
          required: "required",
          minlength: "8 characters "
        },
        email: "required",
        city:"required",
        contry:"required",
        confirm_password:{
            required:"required",
            minlength: "8 characters",
            equalTo: "not the same"
        },
        username:"required"
      },
      submitHandler: function(form) {
        $("#signup").submit();
      }
    });
  });