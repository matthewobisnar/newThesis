(function () {
    function ajaxRequest (payload = null, options = null, callback, errocallback = null)
    {
        try {
            var defaults = {
                type: "POST",
                cache: false,
                async: true,
                processData: true,
            }

            var object = {
                data: payload,
                dataType:"json",
                success: function (response) {
                    if (response.error != null) {
                        if (response.error.error == "401! Unauthorized Access.") {
                            window.location.replace("/");//("/")
                        }
                    }

                    callback(response);
                },

                error: function (response) { 
                    if (errocallback) {
                        errocallback(response);
                    }
                }
            };

            var ajaxRequest = Object.assign({}, object, defaults, options);
            
            return $.ajax(ajaxRequest);

        } catch (e) {
            alert(e);
        }

        return true;
    }

    
    $(document).ready(function(e){

        $(document).on("click", "#csubmit", function(e) { 
            var data = {
                customer_first_name : $('#cfname').val(),
                customer_last_name : $('#clname').val(),
                customer_mobile_number : $('#cnumber').val(),
                customer_email : $('#cemail').val(),
                customer_inquiry_details : $('#cinq').val()
            };

            if (data.customer_first_name == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'First name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.customer_last_name == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Last name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            
            if (data.customer_email == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Email must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
    
            if (data.customer_mobile_number == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Mobile number must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.customer_inquiry_details == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Inquiry details must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            ValidateEmail(data);
        });
    });

        function createInquiry(data)
        {
            ajaxRequest(data,
                {
                    url: create_inquiry_api,
                    type: "POST",
                    dataType: "json",
                },
            function (response_data) {
                if (response_data.status == true) {
                    Swal.fire({
                        title: 'Inquiry sent!',
                        text: 'We will contact you as soon as possible. Thank you',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                    $('#cfname').val(''),
                    $('#clname').val(''),
                    $('#cemail').val(''),
                    $('#cnumber').val(''),
                    $('#cinq').val('')
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Please try again',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            });
        }

        function ValidateEmail(data) 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.cemail.value))
            {
                createInquiry(data);
                return;
            }
                Swal.fire({
                    title: 'Oops...',
                    text: 'You have entered invalid email',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
        }

    $(document).ready(function(){
        var menuBtn = document.querySelector('#menu-btn');
        var searchBtn = document.querySelector('#search-btn');
        var themeBtn = document.querySelector('#theme-btn');

        var navbar = document.querySelector('.navbar');
        var searchForm = document.querySelector('.search-form');
        // var colorsPalette = document.querySelector('.colors-palette');
    
        menuBtn.onclick = function (){
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        colorsPalette.classList.remove('active');
        }
        
        window.onscroll = function (){
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        // colorsPalette.classList.remove('active');
        }
    
        // document.querySelectorAll('.colors-palette .color').forEach(function (btn){
        // btn.onclick = function (){
        //     let color = btn.style.background;
        //     document.querySelector(':root').style.setProperty('--main-color',color);
        // }
        // });
    })
})();