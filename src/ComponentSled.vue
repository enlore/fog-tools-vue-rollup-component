<template lang="pug">
    .componentSled
        component(msg="Hey buddy")
</template>

<script>
    import Component from './Component.vue'

    export default {
        data () {
            return {

            }
        },

        components: {
            Component
        }
    }
</script>

<style lang="scss" scoped>
</style>

