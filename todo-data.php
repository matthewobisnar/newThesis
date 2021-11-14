<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="todo_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

        <div class="content-section custom-m mt-5">
            <div class="container-md">

            <form class="g-3 mb-4">
            <div class="input-group flex-nowrap">
            <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
            <input type="text" class="form-control" id="search_t" placeholder="Search by Project Name">
            </div>
            </form>
            
                <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-3">
                    <div class="col">
    
                        <div class="list-group mb-5">   
                            <div class="card shadow-sm">
                                <div class="card-header pending_header p-2">
                                    <span class="fw-light text-light float-start mt-2 ps-3">
                                        Ongoing
                                    </span>
                                    <div class="dropdown">
                                    <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><div class="form-check form-switch ms-3">
                                        <input class="form-check-input" type="checkbox" id="selectall-inprogress">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                        </div></li>
                                        <li><input class="dropdown-item" type="submit" id="delete-todoList-inprogress" name='but_delete' value="Remove"></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><input class="dropdown-item" type="submit" data-bs-toggle="modal" data-bs-target="#todo" value="New project..."></li>   
                                    </ul>
                                    </div>
                                </div>
                                <div class="card-body mainlist-todo" id="todoContent-0"></div>
                                <div id="todoContent-paginate-0"></div>
                            </div>
                        </div>
    
                    </div>
    
                    <div class="col">
                        <div class="list-group">
                            <div class="card shadow-sm">
                                <div class="card-header pending_header p-2">
                                    <span class="fw-light text-light float-start mt-2 ps-3">
                                        Completed 
                                    </span>
                                    <div class="dropdown">
                                    <a class="btn text-white material-icons float-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    more_vert
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><div class="form-check form-switch ms-3">
                                        <input class="form-check-input" type="checkbox" id="selectall-completed">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Select All</label>
                                        </div></li>
                                        <li><input class="dropdown-item" type="submit" id="delete-todoList-completed" name='but_delete' value="Remove"></li> 
                                    </ul>
                                    </div>
                                </div>
                                <div class="card-body mainlist-todo" id="todoContent-1">
                                    <!-- <label class="list-group-item d-flex">
                                        <div class="flex-fill d-flex gap-3">
                                        <input class="form-check-input checkbox mt-3" type="checkbox" name="delete" value="2" style="font-size: 1.00em;" aria-label="...">
                                        <span class="pt-1 form-checked-content">
                                            <strong><a href="" class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#update_todo">project A</a></strong>
                                            <small class="d-block mt-1">
                                                Due Date Observation
                                                <span class="material-icons fs-5 float-start pe-2 pending">event</span>
                                                Oct 16 2021 - 11:51pm (Saturday)                                                                                
                                            </small>
                                        </span>
                                        </div>
                                    </label> -->
                                </div>
                                <div id="todoContent-paginate-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
<?php
require_once __DIR__ ."/include/view-project.modal.inc.php";
require_once __DIR__ . "/include/create-todo.inc.php";
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
?>
</body>
</html>