<template>
    <div class="main">
        <app-header/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';

    export default {
        name: 'main-app',
        components: {'app-header': Header}
    }
</script>
