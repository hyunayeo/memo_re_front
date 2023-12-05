<template>
    <div class="container mb-4">
        <div class="row">
            <div class="col-md-4">
                <input class="form-control form-control-lg mt-2" type="text" placeholder="문의 검색" id="inputLarge">
            </div>

            <div class="col-md-4 mt-2">
                <button type="button" class="btn btn-primary btn-lg px-4">
                    <h4>검색</h4>
                </button>
            </div>

            <div class="col-md-4 text-end mt-3">
                <button type="button" class="btn btn-primary btn-lg">
                    <h5>문의하기</h5>
                </button>
            </div>
        </div>
    </div>

    <table class="table table-hover">
        <thead>
            <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">문의</th>
                <th scope="col">작성자</th>
                <th scope="col">작성기간</th>
                <th scope="col">상태</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{{ number }}</th>
                <td>문의합니다.</td>
                <td>키트리01</td>
                <td>{{ date }}</td>
                <td>{{ status }}</td>
            </tr>
            <tr>
                <th scope="row">{{ number }}</th>
                <td>문의합니다.22</td>
                <td>키트리02</td>
                <td>{{ date }}</td>
                <td>{{ status }}</td>
            </tr>
            <tr>
                <th scope="row">{{ number }}</th>
                <td>문의합니다.33</td>
                <td>키트리03</td>
                <td>{{ date }}</td>
                <td>{{ status }}</td>
            </tr>
            <tr>
                <th scope="row">{{ number }}</th>
                <td>문의합니다.44</td>
                <td>키트리04</td>
                <td>{{ date }}</td>
                <td>{{ status }}</td>
            </tr>
            <tr>
                <th scope="row">{{ number }}</th>
                <td>문의합니다.55</td>
                <td>키트리05</td>
                <td>{{ date }}</td>
                <td>{{ status }}</td>
            </tr>
        </tbody>
    </table>

    <div class="d-flex justify-content-center">
        <ul class="pagination pagination-lg mt-2">
            <li class="page-item disabled">
                <a class="page-link" href="#">&laquo;</a>
            </li>
            <li class="page-item active">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">5</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 추후 동적으로 바뀌어야할 값 POST
            number: 0,
            date: "20xx-xx-xx",
            status: false,
        };
    },
};
</script>

<style></style>
