<div class="modal fade" id="todo" tabindex="-1" aria-labelledby="todo" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-6 shadow">
      <div class="modal-header pending_header2">
        <h5 class="modal-title  text-white fw-normal" id="exampleModalLabel">Create Project</h5>
        <button type="button" class="btn-close bg-light rounded-circle" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
        <div class="row g-2">
          <div class="col-md">
              <label for="project-name" class="col-form-label">Project Name:</label>
              <input type="text" class="form-control" id="project-name">
          </div>
          <div class="col-md">
              <label for="project-date" class="col-form-label">Set Due Date:</label>
              <input type="date" class="form-control" id="project-date">
          </div>
        </div>
          
          <div class="mb-3">
            <label for="project-name" class="col-form-label">Address:</label>
            <input type="text" class="form-control" id="project-address">
          </div>
          
          <div class="mb-3">
            <label for="project-description" class="col-form-label">Project Description:</label>
            <textarea class="form-control _txtarea" id="project-description" rows="1"></textarea>
          </div>
          
        </div>
        </form>
      <div class="container d-grid gap-2 mb-4">
        <button type="button" class="btn btn-outline-primary" id="createTodo">Submit</button>
        <button type="button" class="btn btn-outline-secondary" id="resetTodo">Reset</button>
      </div>
    </div>
  </div>
</div>