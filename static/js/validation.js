$(document).ready(function() {
    $('#form-register').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,

            },
            sname: {
                required: true,
                minlength: 1,

            },
            uname:{
                required: true,
                minlength: 5,
            },
            pass:{
                required: true,
                minlength: 8,
            },
            mobile: {
                required: true,
                minlength: 10,

            },
            password: {
                required: true,
                minlength: 8,
            },
            day: {
                required: true,
            },
            month: {
                required: true,
                 
            },
            // year: {
            //     required: true,
            // },
            gender: {
                required: true,
            },
        },
        messages : {
            fname : {
                required : "This field is must",
                minlength: "Please enter minimum 5 character"
            }
        }
    })
   
});

