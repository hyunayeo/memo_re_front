<template>
  <div class="mt-5 pt-5">
    <div class="container-fluid px-4">
      <h1 class="mt-4">Board</h1>
      <div class="card mb-4">
        <div class="card-body">
          <form method="post">
            <div class="mb-3 mt-3">
              <label for="title" class="form-label">제목</label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="제목을 입력해 주세요."
              />
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">내용</label>
              <textarea
                class="form-control"
                id="content"
                name="content"
                rows="3"
              ></textarea>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="is_done" />
              <label class="form-check-label" for="is_done">
                다 읽었어요!
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="is_hide" />
              <label class="form-check-label" for="is_hide"> 비밀글 </label>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button">저장</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
