<template>
  <div class="mt-5 pt-5">
    <div class="container-fluid px-4">
      <h1 class="mt-4">Board</h1>
      <div class="card mb-4">
        <div class="card-body">
          <form method="post">
            <h1>카드 스몰 들어갈 예정</h1>
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

            <div class="col-md-4">
              <label for="ratingScore" class="form-label">평점</label>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  id="ratingScore"
                  value="score"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  평점
                </button>

                <ul
                  id="score"
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li><a class="dropdown-item" tabindex="-1" href="#">1</a></li>
                  <li><a class="dropdown-item" tabindex="-1" href="#">2</a></li>
                  <li><a class="dropdown-item" tabindex="-1" href="#">3</a></li>
                  <li><a class="dropdown-item" tabindex="-1" href="#">4</a></li>
                  <li><a class="dropdown-item" tabindex="-1" href="#">5</a></li>
                </ul>
              </div>
            </div>

            <p></p>

            <form class="row g-6">
              <div class="col-md-4">
                <label for="startDate" class="form-label">시작일</label>
                <input
                  type="date"
                  class="form-control"
                  name="startDate"
                  id="startDate"
                />
              </div>

              <div class="col-md-4">
                <label for="endDate" class="form-label">종료일</label>
                <input
                  type="date"
                  class="form-control"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </form>

            <p></p>

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
              <input class="form-check-input" type="checkbox" id="isDone" />
              <label class="form-check-label" for="isDone">
                다 읽었어요!
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="isHide" />
              <label class="form-check-label" for="isHide"> 비밀글 </label>
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

<script></script>
