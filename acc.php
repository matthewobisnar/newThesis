<?php require_once __DIR__ ."/include/header.inc.php";?>
</head>
    <body>
<?php require_once __DIR__ . "/include/top-navigation.inc.php";?>

<main>
<div class="content-section custom-m mt-5">
<div class="container">
    
   
        <div class="card shadow pt-4">
            <h5 class="ps-4"><i class="fas fa-user-cog"></i> Account Settings</h5><hr>
        <div class="card-body">
            <div class="container row row-cols-2 row-cols-sm-2 row-cols-lg-2">

                <div class="col mb-5">
                <div class="list-group">
                <a href="" class="list-group-item pending_header text-white">
                    Personal Settings
                </a>
                <a href="cpass.php" class="list-group-item" aria-current="true">Change Password</a>
                </div>
                </div>


                <div class="col">
                <form>
                    <input type="text" name="id" value="" hidden>
                    <div class="">
                    <label for="firstName" class="form-label">Username</label>
                    <input type="text" class="form-control" id="" placeholder="" value="" required> 
                    </div>
                    <div class="mt-3">
                    <label for="firstName" class="form-label">New Username</label>
                    <input type="text" class="form-control" id="" placeholder="" value="" required> 
                    </div>

                    <div class="mt-3">
                    <label for="lastName" class="form-label">Password <span title="Required">*</span></label>
                    <input type="password" class="form-control" id="" placeholder="" value="">
                    <small class="text-muted">Enter your password to confirm changes.</small>
                    </div>
                </br>
                    <div class="d-grid gap-2 mt-4">
                        <button type="button" class="btn btn-outline-primary mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#save" href="">Save Changes</button>
                        <button type="button" class="btn btn-outline-secondary mb-3" data-bs-toggle="modal" data-bs-target="#discard" href="">Reset</button>
                    </div>
                </form>
                </div>
            </div>
            
        </div>
        </div>

</div>
</div>
</main>


<?php
require_once __DIR__ . "/include/navigation.inc.php";
?>
</body>
</html>
