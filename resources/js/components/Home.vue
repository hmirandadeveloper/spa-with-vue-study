<template>
    <div class="container mt-4">
        <div class="row justify-content-center ">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header"> SPA using Vue.JS (study)</div>
                    <div class="card-body">
                        <h3>{{ welcome }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        computed: {
            welcome() {
                return this.$store.getters.welcome;
            }
        }
    }
</script>
