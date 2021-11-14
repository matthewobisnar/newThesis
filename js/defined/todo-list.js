(function () {

    $(document).on('click', '#createTodo', createTodoList);
    $(document).ready(function() {loadTodoList();});

    $(document).on("click","#todo-done", function(e) { 
        $('.modal').modal('hide');
    });

    $(document).on("click", "#todo-update", function (e) {
        updateProject({
            todo_id :$(this).attr('data-info'),
            status: 1
        });
    });

    var typingTimer;               
    var doneTypingInterval = 1000;  

    $(document).on('keyup', '#search_t',function (){
        $('#search_t').keyup(function(){
            clearTimeout(typingTimer);
            if ($('#search_t').val()) {
                typingTimer = setTimeout(doneTyping, doneTypingInterval);
            }else{
                loadTodoList();
            }
        });
    });

    function doneTyping () {
        loadTodoList();
    }

    // selectall-inprogress

    $(document).on("change","#selectall-inprogress", function(e) { 
        $('#todoContent-0 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });

    });

    $(document).on("change", "#selectall-completed", function(e) { 
        $('#todoContent-1 input:checkbox').each(function() {
            $(this).prop('checked', e.currentTarget.checked);
        });
    });

    $(document).on("click","#delete-todoList-inprogress", function(e) { 

        var selected = [];
        $('#todoContent-0 input:checked').each(function() {
            selected.push($(this).val());
        });

        if (selected.length > 0) {

            Swal.fire({
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#2691d9',
            }).then(function (result){
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }else {
            // Swal.fire('Cannot delete the project.', 'Please select atleast 1 project!', 'error');
            Swal.fire({
                title: 'Oh no!',
                text: 'Cannot delete the project. Select atleast 1 project',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        }

    });

    $(document).on("click","#delete-todoList-completed", function(e) { 

        var selected = [];
        $('#todoContent-1 input:checked').each(function() {
            selected.push($(this).val());
        });
    
        if (selected.length > 0) {
            Swal.fire({
                title: 'Are you sure you want to delete these item(s) ('+selected.length+')?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#2691d9',
            }).then(function (result) {
                if (result.isConfirmed) { 
                    deleteProject({
                        todo_id: selected
                    });
                } 
            });
        }else {
            // Swal.fire('Cannot delete the project.', 'Please select atleast 1 project!', 'error');
            Swal.fire({
                title: 'Oh no!',
                text: 'Cannot delete the project. Select atleast 1 project',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        }

    });

    function loadTodoList()
    {
        generateEmptyTemplate("#todoContent-0");
        generateEmptyTemplate("#todoContent-1");

        ajaxRequest(null,
            {
                url: get_todo_list,
                type: "GET",
                headers: assignAuthHeader(),
                dataType: "json",
                data: {
                    search: $("#search_t").val()
                }
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0 || typeof response_data.content.length == 'undefined') {
                        // for (key in response_data.content) {
                        //     // generateTodoTemplate('#todoContent-'+key, response_data.content[key], key);
                        //     $('#todoContent-paginate-'+key).pagination({
                        //         dataSource: response_data.content[key],
                        //         callback: function(data, pagination) {
                        //             console.log(key);
                        //             generateTodoTemplate('#todoContent-'+key, data, key);
                        //         }
                        //     });
                        // }

                        if (response_data.content[0]) {
                            $('#todoContent-paginate-'+0).pagination({
                                dataSource: response_data.content[0],
                                callback: function(data, pagination) {
                                    console.log(key);
                                    generateTodoTemplate('#todoContent-'+0, data, 0);
                                }
                            });
                        }

                        if (response_data.content[1]) {
                            $('#todoContent-paginate-'+1).pagination({
                                dataSource: response_data.content[1],
                                callback: function(data, pagination) {
                                    console.log(key);
                                    generateTodoTemplate('#todoContent-'+1, data, 1);
                                }
                            });
                        }
                    }
                }
            }
        );
    }

    function createTodoList()
    {

        var data = {
            title: $('#project-name').val(),
            address: $('#project-address').val(),
            description: $('#project-description').val(),
            deadline: $('#project-date').val(),
        };

        if (data.title == '') {
            // Swal.fire('Something went wrong', 'Project name must not be empty', 'error');
            Swal.fire({
                title: 'Oops...',
                text: 'Project name must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.deadline == '') {
            Swal.fire({
                title: 'Oops...',
                text: 'Due date must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.address == '') {
            // Swal.fire('Something went wrong', 'Address must not be empty', 'error');
            Swal.fire({
                title: 'Oops...',
                text: 'Address must not be empty',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
            return;
        }
        if (data.description == '') {
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

        ajaxRequest(
            data,
            {
                url: create_todo_list,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    loadTodoList();
                    $('.modal').modal('hide');
                    // Swal.fire('Todo is successfully added!', '', 'success')
                    Swal.fire({
                        title: 'Todo is successfully added!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    })
                    .then(function (result) {
                        $('#project-name').val("");
                        $('#project-address').val("");
                        $('#project-description').val("");
                        $('#project-date').val("");
                    });
                } else {
                    // Swal.fire('Somethin went wrong', 'Unable to complete process. Select another date', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Something went wrong. Due date must be later than today.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on('show.bs.modal','#update_todo', function (e) {
        fetchIndividualProject(
            {
                todo_id:  $(e.relatedTarget).attr("data-info")
            }
        );
    });

    function fetchIndividualProject (data)
    {
        ajaxRequest(
            data,
            {
                url: get_todo_detail,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    if (response_data.content.length > 0) {
                        getTodoModalTemplate("#todo-project-modal", response_data.content[0])
                    }
                }
            }
        );
    }

    function updateProject(data)
    {
        Swal.fire({
            title: 'Are you sure this project is completed?',
            showCancelButton: true,
            confirmButtonText: 'Completed',
            confirmButtonColor: '#2691d9',
        }).then(function (result) {
            if (result.isConfirmed) { 
                ajaxRequest(
                    data,
                    {
                        url: update_todo_by_id,
                        type: "POST",
                        headers: assignAuthHeader(),
                        dataType: "json",
                    },
                    function (response_data) {
                        if (response_data.status == true) {
                            loadTodoList();
                            $('.modal').modal('hide');
                            // Swal.fire('Project successfully completed!', '', 'success');
                            Swal.fire({
                                title: 'Project successfully completed!',
                                text: '',
                                icon: 'success',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        
                        } else {
                            // Swal.fire('Somethin went wrong', 'Required input must not be empty', 'error');
                            Swal.fire({
                                title: 'Oh no!',
                                text: 'Something went wrong. Unable to complete process',
                                icon: 'error',
                                confirmButtonText: 'OK',
                                confirmButtonColor: '#2691d9',
                            });
                        }
                    }
                ); 
            } 
        });
    }

    function deleteProject(data)
    {

        ajaxRequest(
            data,
            {
                url: delete_todo_by_id,
                type: "POST",
                headers: assignAuthHeader(),
                dataType: "json",
            },
            function (response_data) {
                if (response_data.status == true) {
                    loadTodoList();
                    $('.modal').modal('hide');
                    // Swal.fire('Project successfully deleted!', '', 'success');
                    Swal.fire({
                        title: 'Project successfully deleted!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                  
                } else {
                    // Swal.fire('Cannot delete the project.', 'Please check the data!', 'error');
                    Swal.fire({
                        title: 'Oh no!',
                        text: 'Cannot delete the project. Please check the data',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#2691d9',
                    });
                }
            }
        );
    }

    $(document).on('click','#resetTodo',function (){
        $('#project-name').val("");
        $('#project-date').val("");
        $('#project-address').val("");
        $('#project-description').val("");
    });
})();