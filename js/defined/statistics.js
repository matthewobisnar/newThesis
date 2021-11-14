(function () {

    $(document).ready(function() {
        loadDashboard();
        requestApiList();
        
        var typingTimer;              
        var doneTypingInterval = 1000; 

        $(document).on('keyup', '#search_d',function (){
            $('#search_d').keyup(function(){
                clearTimeout(typingTimer);
                if ($('#search_d').val()) {
                    typingTimer = setTimeout(doneTyping, doneTypingInterval);
                }else{
                    requestApiList();
                }
            });
        });
    
        function doneTyping () {
            requestApiList();
        }

       

        function loadDashboard() {

            generateEmptyTemplate('#type-request-0');
            generateEmptyTemplate('#type-request-1');
            generateEmptyTemplate('#type-request-2');
            
                ajaxRequest(null,
                    {
                    url: statistics_api,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
                function (response_data) {
                    if (response_data.status == true) {
        
                        // Employee status
                        if (typeof response_data.content.employee.length == "undefined") {
                            for (key in response_data.content.employee) {
                                genCountTemplate("#"+ key, response_data.content.employee[key]);
                            }
                        }
        
                        // todo
                        if (typeof response_data.content.todo.length == "undefined") {
                            for (key in response_data.content.todo) {
                                genCountTemplate("#"+ key, response_data.content.todo[key]);
                            }
                        }
        
                        // Request
                        if (typeof response_data.content.customer.length == "undefined") {
                            for (key in response_data.content.customer) {
                                genCountTemplate("#"+ key, response_data.content.customer[key]);
                            }
                        }
        
                    }
                }   
                );
            
    }

    function requestApiList()
    {

        generateEmptyTemplate('#type-request-0');
        generateEmptyTemplate('#type-request-1');
        generateEmptyTemplate('#type-request-2');
        
            ajaxRequest(null,
                {
                    url: dashboard_api,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                    data: {
                        search: $("#search_d").val()
                    }
                },
                function (response_data) {
                    if (response_data.status == true) {
                        if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {
                            // for (key in response_data.content) {
                            //     generateRequestTemplate("#type-request-"+key, response_data.content[key], key);
                            // }


                            if (response_data.content[0])  {
                                $('#type-request-paginate-0').pagination({
                                    dataSource: response_data.content[0],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-0", data, 0);
                                    }
                                });
                            }

                            if (response_data.content[1])  {
                                $('#type-request-paginate-1').pagination({
                                    dataSource: response_data.content[0],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-1", data, 1);
                                    }
                                });
                            }

                            if (response_data.content[2])  {
                                $('#type-request-paginate-2').pagination({
                                    dataSource: response_data.content[2],
                                    callback: function(data, pagination) {
                                        generateRequestTemplate("#type-request-2", data, 2);
                                    }
                                });
                            }

                        }
                    }
                }
            );
        // setTimeout(requestApiList, 1000);
    }

    $('#request_modal-0').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-0",response_data.content);
                }
            }
        );
    });

    $('#request_modal-1').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-1",response_data.content);
                }
            }
        );
    });


    $('#request_modal-2').on('show.bs.modal', function(e) { 
        ajaxRequest(
            {
                customer_id: $(e.relatedTarget).attr("data-info")
            },
            {
                url: dashboard_detail,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    generateModelTemplateDashboard("#request_modal-2", response_data.content);
                }
            }
        );
    });


    $(document).on("click","#deleteRequest", function(e) {
        Swal.fire({
            title: 'Are you sure you want to delete this item?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                ajaxRequest(
                    {
                        customer_id: $(e.currentTarget).attr('data-id')
                    },
                    {
                        url: dashboad_customer_del_api,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            loadDashboard();
                            requestApiList();
                            $('.modal').modal('hide');
                            // Swal.fire('Deleted!', '', 'success');
                            Swal.fire({
                                title: 'Deleted!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }else {
                            // Swal.fire('Cannot delete the item.', 'Please check the data!', 'error');
                            Swal.fire({
                                title: 'Oh no!',
                                text: 'Cannot delete the item. Please check the data',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                );
            }
        });
    });

    $(document).on("click", "#approved", function(e) {
        e.preventDefault();
        var $status = 1;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "approve", "Approve");
    });

    $(document).on("click", "#turndown", function(e) {
        e.preventDefault();
        var $status = 2;
        var $id = $(e.currentTarget).attr('data-id');
        updateCustomer($status, $id, "turndown", "Turndown");
    });

   function updateCustomer($status,$id, $description, $desc) {
        Swal.fire({
            title: 'Are you sure you want to '+$description+' this item?',
            showCancelButton: true,
            confirmButtonText: $desc,
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) {
                ajaxRequest(
                    {
                        status: $status,
                        customer_id: $id
                    },
                    {
                        url: dashboad_customer_update_api,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            loadDashboard();
                            requestApiList();
                            $('.modal').modal('hide');
                            // Swal.fire($desc + '!', '', 'success');
                            Swal.fire({
                                title: $desc + '!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                );
            }
        });
    }

});

})();