(function () {
    $(document).ready(function(e){

        $(document).on("click", "#login", function(e) { 

            var data = {
                username: $('#username').val(),
                password: $('#password').val()
            };


            if (data.username == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Username must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.password == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Password must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            login(data);
        });

    });

    function login(data)
    {
        ajaxRequest(data,
            {
                url: login_api,
                type: "GET",
                dataType: "json",
            },
            function (response_data) {
                // setToLocalStorage('content', response_data.content);
                if (response_data.status) {
                    setToLocalStorage(response_data.content, function () {
                        window.location.replace(redirect_dashboard);
                    });
                } else {
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Invalid username or password',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on("click", '#logout', function() {
        unsetLocalStorage(["user_id", "token"], function() {
            window.location.replace(redirect_login);
        });
    });
})();