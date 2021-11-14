(function () {
    
    $(document).ready(function() {
        loadEmployee();

        $('#edit_emp_modal').on('show.bs.modal', function(e) {
            var data = $(e.relatedTarget).attr('data-info');
            
            $("#update-emp_id").val(data);
            $("#update-firstName").val($('#tfname_'+ data).html());
            $("#update-lastName").val($('#tlname_' + data).html());
            $("#update-mobileNumber").val($('#tnumber_'+ data).html());
            $("#update-inputEmail").val($('#temail_'+ data).html());
            $('#UpdateEmployee').html('Update');
            
        });

    });
    
    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms (5 seconds)

    //on keyup, start the countdown
    $(document).on('keyup', '#search_emp',function (){
        $('#search_emp').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_emp').val()) {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            }else{
                loadEmployee();
            }
        });
    });
    

    //user is "finished typing," do something
    function doneTyping () {
        loadEmployee();
    }

    $(document).on('click','#resetEmployee',function (){
        $('#firstName').val("");
        $('#lastName').val("");
        $('#inputEmail').val("");
        $('#mobileNumber').val("");
        $("#emp_id").val(""); 
        $('#AddEmployee').html('Submit');
    });

    $(document).on('click','#deleteEmployee',function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this employee ?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteEmployee({
                    emp_id: $("#update-emp_id").val()
                });
            }
        });
    });
    
    $(document).on('click', '#UpdateEmployee', function () {
            var payload = {
                emp_id: $("#update-emp_id").val(),
                fname: $("#update-firstName").val(),
                lname: $("#update-lastName").val(),
                mobile: $("#update-mobileNumber").val(),
                email: $("#update-inputEmail").val()
            };
            if (payload.fname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'First name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.lname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Last name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.mobile == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Mobile number must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.email == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Email must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            Swal.fire({
                title: 'Are you sure you want to update this employee?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateEmployee(payload);        
                }
            });
    });

    
    $(document).on('click','#AddEmployee',function() {
            const capitalize = function(str) {
                if(typeof str === 'string') {
                    return str.replace(/^\w/, c => c.toUpperCase());
                } else {
                    return '';
                }
            };
        
            var data = {
                fname : capitalize($('#firstName').val()),
                lname: capitalize($('#lastName').val()),
                email : $('#inputEmail').val(),
                mobile : $('#mobileNumber').val()
 
            };
            
            if (data.fname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'First name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.lname == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Last name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.mobile == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Mobile number must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.email == '') {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Email must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            // addEmployee(data);  
            ValidateEmail(data);

    });

    function ValidateEmail(data) 
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.e_email.value))
    {
        addEmployee(data);  
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

    function loadEmployee(offset = 0, limit = 10, rowOffset=0)
    {
        generateEmptyTableTemplate('#employee-list-data');
            ajaxRequest(
                {
                    search: $("#search_emp").val()
                },
                {
                url: get_employee_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json"
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.count != 0) {
                        
                        $('#employee-paginate').pagination({
                            dataSource: response_data.content.employees,
                            callback: function(data, pagination) {
                                generateTemplateEmployee("#employee-list-data", data);
                            }
                        });
                        
                    }
                }
            });
    }



    function addEmployee(data)
    {
        ajaxRequest(data,
            {
            url: create_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {    
                $('.modal').modal('hide');
                Swal.fire({
                    title: 'Employee successfully added!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    loadEmployee();
                    $('#firstName').val("");
                    $('#lastName').val("");
                    $('#inputEmail').val("");
                    $('#mobileNumber').val("");
                    $("#emp_id").val("");
                });

            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }


    function deleteEmployee(data)
    {
        ajaxRequest(data,
            {
            url: delete_employee_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                loadEmployee();
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Employee successfully deleted!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#update-firstName').val("");
                    $('#update-lastName').val("");
                    $('#update-inputEmail').val("");
                    $('#update-mobileNumber').val("");
                    $("#update-emp_id").val("");          
                });
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Cannot find the employee. Please check the data',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

    function updateEmployee (data)
    {
        ajaxRequest(data,
            {
                url: update_employee_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                loadEmployee();
                $(".modal").modal('hide');
                Swal.fire({
                    title: 'Employee successfully updated!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#update-firstName').val("");
                    $('#update-lastName').val("");
                    $('#update-inputEmail').val("");
                    $('#update-mobileNumber').val("");
                    $("#update-emp_id").val("");
                });    
            } else {
                Swal.fire({
                    title: 'Oh no!',
                    text: response_data.error.error,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }
    
})()