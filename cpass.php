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
                <a href="acc.php" class="list-group-item">
                    Personal Settings
                </a>
                <a href="" class="list-group-item pending_header text-white" aria-current="true">Change Password</a>
                </div>
                </div>


                <div class="col">
                <form>
                        <input type="text" name="id" value="" hidden>
                    <div class="group">
                        <label class="label mb-1">Current Password *</label>
                        <input type="password" class="form-control mb-3" placeholder="" required>
                    </div>
                    <div class="group">
                        <label class="label mb-1">New Password *</label>
                        <input type="password" class="form-control mb-3" placeholder=""  required>
                    </div>
                    
                    <div class="group">
                        <label class="label mb-1">Confirm Password *</label>
                        <input type="password" class="form-control" placeholder="" required >
                        <small class="text-muted mb-3">Re-type your new password to confirm changes.</small>
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
