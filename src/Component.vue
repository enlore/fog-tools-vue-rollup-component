<template lang="pug">
.newComponent
    h1 {{ msg }}
</template>

<script>
    export default {
        data () {
            return {

            }
        },

        props: [
            'msg'
        ]
    }
</script>

<style lang="scss" scoped>
</style>

