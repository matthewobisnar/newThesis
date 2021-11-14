<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body id="employee_page">
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>
<div class="container-design">
    <div class="container">
        <div class="button-pos mt-5 float-end">
            <button type="add" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#emp_create">Create New +</button>
        </div>

        <form class="g-3 mb-3">
        <div class="input-group flex-nowrap">
        <span class="input-group-text pending_header text-white" id="searchclear" style="cursor:default;">Search</span>
        <input type="text" class="form-control" id="search_emp" placeholder="Search by Employee Name">
        </div>
        </form>

        <div class="col">
        <table class="table_d shadow" id="table_content">
            <thead>
            <tr class="pending_header text-light">
                <th scope="col"><i class="material-icons">badge</i></th>
                <th scope="col">EMPLOYEE</th>
                <th scope="col">MOBILE NUMBER</th>
                <th scope="col">EMAIL</th>
                <th scope="col">STATUS</th>
            </tr>
            </thead>
            <tbody id="employee-list-data"></tbody>
        </table>
        </div>
        <div id="employee-paginate"></div>
    </div>
</div>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
require_once __DIR__ . "/include/script.inc.php";
require_once __DIR__ ."/include/create-employee.modal.inc.php";
require_once __DIR__ ."/include/update-employee.modal.inc.php";
?>
</body>
</html>