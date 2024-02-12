$(document).ready(function() {
    $('#form-login').validate({
        rules: {
            
            uname:{
                required: true,
                minlength: 5,
            },
            pass:{
                required: true,
                minlength: 8,
            },
        },
        messages : {
            uname : {
                required : "This field is must",
                minlength: "Please enter minimum 5 character"
            }
        }
    })
   
});