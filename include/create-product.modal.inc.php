<div class="modal fade" id="newProduct" tabindex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-6 shadow">
        <div class="modal-header pending_header2">
            <h5 class="modal-title text-white fw-normal" id="confirm_inquiryModalLabel">Add Product</h5>
                <button type="button" class="btn-close rounded-circle bg-light btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
    <form enctype="multipart/form-data">
        <div class="modal-body">
            <div class="row g-2 mb-3">
                <div class="col-md">
                    <label for="serv_name" class="form-label">Product Name:</label>
                    <input type="text" class="form-control" id="prod_name">
                </div>
                <div class="col-md">
                    <label for="serv_price" class="form-label">Price Rate:</label><span> 
                    <input class="form-control" type="number" id="prod_price">
                </div>
            </div>
            
                <div class="mb-3">
                    <label for="serv_image" class="form-label">Upload Image File:</label> 
                    <input class="form-control" type="file" accept="image/jpeg, image/png" name="image" id="prod_image">
                    <canvas id="prod_image_canvas" style="display: none;"></canvas>
                </div> 
            <div class=" d-grid gap-2 mb-3 mt-5">
                <button type="button" class="btn btn-outline-primary" id="AddProduct">Submit</button>
                <button type="button" class="btn btn-outline-secondary" id="resetProduct">Reset</button>
            </div>
        </div>
    </form>
    </div>
</div>
</div>