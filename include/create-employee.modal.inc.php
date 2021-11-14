<div class="modal fade" id="emp_create" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Register Employee</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form name="form">
        <div class="modal-body">
            <div class="txt_field mt-3">
                <input type="hidden" id="emp_id" value="">
                        <input type="text" class="fcapital" name="e_fname" value="" id="firstName" aria-describedby="help" required>
                    <span></span>
                        <label>First Name</label>
            </div>
                
                        <div class="txt_field">
                    <input type="text" class="fcapital" name="e_lname" value="" id="lastName" aria-describedby="help" required>
                <span></span>
                        <label>Last Name</label></div>
                    
                        <div class="txt_field">
                        <input type="number"  onKeyDown="if(this.value.length==11 && event.keyCode!=8) return false;" name="e_mnumber" value="" id="mobileNumber" aria-describedby="help" required>
                        <span></span>
                        <label>Mobile Number</label></div>
                
                        <div class="txt_field">
                    <input type="email" name="e_email" value="" id="inputEmail" aria-describedby="help" required>
                        <span></span>
                        <label>Email Address</label></div>
            <div class=" d-grid gap-2 mb-4 mt-5">
                <button type="button" class="btn btn-outline-primary " id="AddEmployee">Submit</button>
                <button type="button" class="btn btn-outline-secondary " id="resetEmployee">Reset</button>
            </div>
        </div>
    </form>
    </div>
</div>
</div>