<template lang="pug">
    .tagify-container
        .tagify-tags
            span(class='tagify-tag',
                 v-for='tag in tags') {{ tag }}

        input(class='tagify',
              v-model='tag',
              v-bind:placeholder='placeholder',
              @keyup.enter='push',
              @keydown.delete='pop')
</template>

<script>
    export default {
        data: function() {
            return {
                tag: null,
                tags: []
            }
        },

        props: {
            placeholder: {
                type: String,
                default: 'Type here...'
            }
        },

        methods: {
            push: function() {
                if (!this.tags.includes(this.tag)) {
                    this.tags.push(this.tag);

                    this.tag = null;
                }
            },
            pop: function() {
                if (!this.tag) {
                    this.tags.pop();
                }
            }
        }
    }
</script>

<style lang="scss">
    .tagify-container {
        background-color: #fff;

        .tagify {
            &-tag,
            &-tags {
                display: inline;
            }
            &-tag {

            }
        }
    }
</style>
