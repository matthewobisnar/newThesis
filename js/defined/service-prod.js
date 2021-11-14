(function () {

    $(document).ready(function () {
        loadService();
        loadProduct();

        function handleImage1(e){
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                img.onload = function(){
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img,0,0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);     
        }

        function handleImage2(e){
            var reader = new FileReader();
            reader.onload = function(event){
                var img = new Image();
                img.onload = function(){
                    canvas2.width = img.width;
                    canvas2.height = img.height;
                    ctx2.drawImage(img,0,0);
                }
                img.src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);     
        }

        var imageLoader = document.getElementById('serv_image');
        imageLoader.addEventListener('change', handleImage1, false);
        var canvas = document.getElementById('serv_image_canvas');
        var ctx = canvas.getContext('2d');
        
        $(document).on('click', '#AddService', function (e) {     
            
            var data = {
                serv_name : $('#serv_name').val(),
                serv_price: $('#serv_price').val(),
                serv_description: $('#serv_description').val(),
                serv_image: document.getElementById('serv_image_canvas').toDataURL()     
            };
    
            if (data.serv_name == '') {
                // Swal.fire('Something went wrong', 'Service name must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Service name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.serv_price == '') {
                // Swal.fire('Something went wrong', 'Price rate must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Price rate must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.serv_image == '') {
                // Swal.fire('Something went wrong', 'Upload image must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Upload image must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            if (data.serv_description == '') {
                // Swal.fire('Something went wrong', 'Description must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Description must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
        
            // validateImageServices();
            addService(data);  
            
        });
    
        var imageLoader2 = document.getElementById('prod_image');
        imageLoader2.addEventListener('change', handleImage2, false);
        var canvas2 = document.getElementById('prod_image_canvas');
        var ctx2 = canvas.getContext('2d');
 

        $(document).on('click', '#AddProduct', function () {
            var data = {
                prod_name : $('#prod_name').val(),
                prod_price: $('#prod_price').val(),
                prod_image: document.getElementById('prod_image_canvas').toDataURL()         
            };
            if (data.prod_name == '') {
                // Swal.fire('Something went wrong', 'Product name must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Product name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.prod_price == '') {
                // Swal.fire('Something went wrong', 'Product price must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Product price must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (data.prod_image == '') {
                // Swal.fire('Something went wrong', 'Product price must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Upload image must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }

            addProduct(data);  
        });
    

        $('#editService').on('show.bs.modal', function(e) { 
            getServiceDetail({
                service_id: $(e.relatedTarget).attr("data-info")
            });
        });
        
        function getServiceDetail(data)
        {

            ajaxRequest(data,
                {
                    url: service_detail,
                    type: "GET",
                    headers: assignAuthHeader(),
                    dataType: "json",
                },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0) {
                        generateModalService("#view-service-detail", response_data.content);
                    }
                }
            });
        }
        
    
        $(document).ready(function() {
            loadProduct();
            $('#editProduct').on('show.bs.modal', function (e) {
                var data = $(e.relatedTarget).attr('data-info');
    
                $("#eprod_id").val(data);
                $("#eprod_name").val($('#ptitle' + data).html());
                $("#eprod_price").val($('#pprice' + data).html());
                // $("#eprod_image").val($('#tnumber_' + data).html());
                $('#UpdateProduct').html('Update');
            });
        });
    
        $(document).on('click', '#UpdateService', function () {
            var payload = {
                serviceId: $('#eserv_id').val(),
                serviceName: $('#eserv_name').val(),
                servicePrice: $('#eserv_price').val(),
                // serviceImage : $('#eserv_image').val(),
                serviceDescription: $('#eserv_description').val(),
            };
    
            if (payload.serviceName == '') {
                // Swal.fire('Something went wrong', 'Service name must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Service name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.servicePrice == '') {
                // Swal.fire('Something went wrong', 'Price rate must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Price rate must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.serviceDescription == '') {
                // Swal.fire('Something went wrong', 'Description must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Description must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
    
            Swal.fire({
                title: 'Are you sure you want to update this service?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateService(payload);        
                }
            });
         
        });
    
        $(document).on('click', '#UpdateProduct', function () {
            var payload = {
                pId: $('#eprod_id').val(),
                pName: $('#eprod_name').val(),
                pPrice: $('#eprod_price').val(),
                // pImage : $('#eprod_image').val(),
            };
            if (payload.pName == '') {
                // Swal.fire('Something went wrong', 'Product name must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Product name must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
            if (payload.pPrice == '') {
                // Swal.fire('Something went wrong', 'Product price must not be empty', 'error');
                Swal.fire({
                    title: 'Oops...',
                    text: 'Product price must not be empty',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
                return;
            }
        
            Swal.fire({
                title: 'Are you sure you want to update this product?',
                showCancelButton: true,
                confirmButtonText: 'Update',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) {  
                    updateProduct(payload);        
                }
            });
         
        });

    });

    $(document).on('click','#DeleteService', function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this service?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteService({
                    serviceId: $("#eserv_id").val()
                });
            }
        });
    });

    $(document).on('click','#DeleteProduct', function (e) {
        Swal.fire({
            title: 'Are you sure you want to delete this product?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                deleteProduct({
                    pId: $("#eprod_id").val()
                });
                loadProduct();
            }
        });
    });
    

    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms (5 seconds)

    //on keyup, start the countdown
    $(document).on('keyup', '#search_s',function (){
        $('#search_s').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_s').val()) {
                typingTimer = setTimeout(doneTyping1, doneTypingInterval);
            }else{
                loadService();
            }
        });
    });


    $(document).on('keyup', '#search_p',function (){
        $('#search_p').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_p').val()) {
                typingTimer = setTimeout(doneTyping2, doneTypingInterval);
            }else{
                loadProduct();
            }
        });
    });
    

    //user is "finished typing," do something
    function doneTyping1 () {
        loadService();
    }
    function doneTyping2 () {
        loadProduct();
    }
    
    function loadService()
    {
        generateEmptyTableTemplate('#service-list-data');
        ajaxRequest(null,
            {
            url: get_service_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
            data: {
                search: $("#search_s").val()
            }
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.services.length > 0) {

                        // generateTemplateService('#service-list-data', response_data.content.services);
                        $('#service-list-data-paginate').pagination({
                            dataSource: response_data.content.services,
                            callback: function(data, pagination) {
                                // generateTemplateEmployee("#employee-list-data", data);
                                generateTemplateService('#service-list-data', data);
                            }
                        });

                    }
                }
            }
        });
    }

    function loadProduct()
    {
        generateEmptyTableTemplate('#product-list-data');
        ajaxRequest(null,
            {
            url: get_product_list,
            type: "GET",
            headers: assignAuthHeader(),
            dataType: "json",
            data: {
                search: $("#search_p").val()
            }
        },
        function (response_data) {
            if (response_data.status == true) {
                if (response_data.content != null) {
                    if (response_data.content.products.length > 0) {
                        // generateTemplateProduct('#product-list-data', response_data.content.products);

                         // generateTemplateService('#service-list-data', response_data.content.services);
                         $('#product-list-data-paginate').pagination({
                            dataSource: response_data.content.products,
                            callback: function(data, pagination) {
                                // generateTemplateEmployee("#employee-list-data", data);
                                generateTemplateProduct('#product-list-data', data);
                            }
                        });

                    }
                }
            }
        });
    }


    function addService(data)
    {
        ajaxRequest(data,
            {
            url: create_service_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                loadService();
                $('.modal').modal('hide');
                Swal.fire({
                    title: 'Service successfully added!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {
                    $('#serv_name').val("");
                    $('#serv_price').val("");
                    $('#serv_description').val("");
                    $('#serv_image').val("");     
                });

            } else {
                // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
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

    function addProduct(data)
    {
        ajaxRequest(data,
            {
            url: create_product_api,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                loadProduct();
                $('.modal').modal('hide');
                // Swal.fire('Product successfully added!', '', 'success')
                Swal.fire({
                    title: 'Product successfully added!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                .then(function (result) {  
                    $('#prod_name').val("");
                    $('#prod_price').val("");
                    $('#prod_image').val("");      
                });

            } else {
                // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
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

    function updateService(data)
    {
        ajaxRequest(data,
            {
                url: update_service_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                loadService();
                $(".modal").modal('hide');
                // Swal.fire('Service successfully updated!', '', 'success');
                Swal.fire({
                    title: 'Service successfully updated!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                $('#eserv_id').val();
                $('#eserv_name').val();
                $('#eserv_price').val();
                // $('#eserv_image').val();
                $('#eserv_description').val();
            } else {
                // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
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

    function deleteService(data)
    {
        ajaxRequest(data,
            {
            url: delete_service,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json",
        },
        function (response_data) {
            if (response_data.status == true) {
                // Swal.fire('Service successfully deleted!', '', 'success')
                Swal.fire({
                    title: 'Service successfully deleted!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                
                loadService();
                $(".modal").modal('hide');
                $('#eserv_id').val();
                $('#eserv_name').val();
                $('#eserv_price').val();
                // $('#eserv_image').val();
                $('#eserv_description').val();
              
            } else {
                // Swal.fire('Cannot delete the item.','Please check the data!', 'error');
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Cannot delete the item. Refresh the page',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

    function updateProduct(data)
    {
        ajaxRequest(data,
            {
                url: update_product_api,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json"
            },
        function (response_data) {
            if (response_data.status == true) {
                
                // Swal.fire('Product successfully updated!', '', 'success');
                Swal.fire({
                    title: 'Product successfully updated!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                loadProduct();
                $(".modal").modal('hide');
                $('#eprod_id').val();
                $('#eprod_name').val();
                // $('#eprod_image').val();
                $('#eprod_price').val();
                
            } else {
                // Swal.fire('Something went wrong', 'Required input must not be empty!', 'error');
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

    function deleteProduct(data)
    {
        ajaxRequest(data,
            {
            url: delete_product,
            type: "POST",
            headers: assignAuthHeader(),
            dataType: "json"
        },
        function (response_data) {
            if (response_data.status == true) {
                // Swal.fire('Product successfully deleted!', '', 'success')
                Swal.fire({
                    title: 'Product successfully deleted!',
                    text: '',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                })
                loadProduct();
                $(".modal").modal('hide');
                $('#eprod_id').val();
                $('#eprod_name').val();
                // $('#eprod_image').val();
                $('#eprod_price').val();
               
            } else {
                // Swal.fire('Cannot delete the item.','Please check the data!', 'error');
                Swal.fire({
                    title: 'Oh no!',
                    text: 'Cannot delete the item. Refresh the page',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#2691d9',
                });
            }
        });
    }

    $(document).on('click','#resetService',function (){
        $('#serv_name').val("");
        $('#serv_price').val("");
        $('#serv_image').val("");
        $('#serv_description').val("");
    });

    $(document).on('click','#resetProduct',function (){
        $('#prod_name').val("");
        $('#prod_price').val("");
        $('#prod_image').val("");
    });

})();