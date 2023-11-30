<template>
    <div class="error-container">

        <div class="alert alert-dismissible alert-danger" style="display: grid; place-items: center;">
            <div class="error">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <h1><strong>Error</strong></h1>
                <h2>새로운 페이지를 발견하셨군요!</h2>
            </div>
        </div>

        <div class="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
    },

    components: {
    }
}
</script>

<style>
.search {
    display: grid;
    place-items: center;
    margin-top: 150px;
    margin-bottom: 150px;
}
</style>