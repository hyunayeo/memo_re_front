<template>
    <div class="container">
        <div class="row">

            <div class="col">
                <h1>문의내역</h1>
                <h3>문의하신 결과를 조회할 수 있습니다.</h3>
            </div>

            <div class="col">
                <input class="form-control form-control-lg" type="text" placeholder="문의 검색" id="inputLarge">
            </div>

            <div class="col">
                <button type="button" class="btn btn-primary btn-lg px-4">검색</button>
            </div>

        </div>
    </div>

    <table class="table table-hover">
        <thead>
            <tr class="table-dark">
                <th scope="col">문의하기 > 문의조회</th>
                <th scope="col">#</th>
                <th scope="col">문의</th>
                <th scope="col">작성자</th>
                <th scope="col">작성기간</th>
                <th scope="col">상태</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <td>{{ number }}</td>
                <td>문의합니다.</td>
                <td>키트리01</td>
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
            status: "접수",
        }
    },
}
</script>

<style></style>
