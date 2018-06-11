<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
            <router-view></router-view> <!--loading routes-->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components:{
            appHeader: Header
        }
    }
</script>

<style>

</style>
