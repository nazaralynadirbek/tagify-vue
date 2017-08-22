<template lang="pug">
    .container
        p {{ message }}

        tagify
</template>

<script>
    import Tagify from '@/Tagify.vue';

    export default {
        data: function() {
            return {
                message: 'Docs'
            }
        },
        components: {
            Tagify: Tagify
        }
    }
</script>

<style lang="sass">
</style>
