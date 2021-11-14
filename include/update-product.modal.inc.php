<div class="modal fade" id="editProduct" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Edit Product</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

        <div class="modal-body">
            <div class="mb-3 container">
                <input type="hidden" id="eprod_id">
                <div class="row g-2 mb-3">
                    <div class="col-md">
                        <label for="serv_name" class="form-label">Name of Service:</label>
                        <input type="text" class="form-control" id="eprod_name">
                    </div>
                    <div class="col-md">
                        <label for="serv_price" class="form-label">Product Price:</label><span> 
                        <input class="form-control" type="number" id="eprod_price">
                    </div>
                </div>
                    
                <div class=" d-grid gap-2 mb-3 mt-5">
                    <button type="button" class="btn btn-outline-primary" id="UpdateProduct">Update</button>
                    <button type="button" class="btn btn-outline-secondary" id="DeleteProduct">Delete</button>
                </div>
            </div> 
        </div>

    </div>
</div>
</div>