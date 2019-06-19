<template lang="pug">
    .container
        .header
            .top
                span Tagify Component for #[a(href='https://vuejs.org/', target='_blank') Vue 2.0]
            .middle
                h1 Docs
                p Simple component for Vue 2.0
            .bottom
                ul.list
                    li
                        a(href='https://github.com/naznadmn/tagify-vue', target='_blank') Available on GitHub
                    li
                        a(href='https://www.npmjs.com/package/tagify-vue', target='_blank') NPM
        .content
            .group
                h2 Installation
                code npm install --save tagify-vue
                code import Tagify from 'tagify-vue'

            .group
                h2  Basic component
                tagify(placeholder='Type your tags here')

            .group
                h2  Disabled component
                tagify(placeholder='Type your tags here', disabled)

            .group
                h2  Confirm removing
                tagify(placeholder='Type your tags here',
                       confirm)
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
            tagify: Tagify
        }
    }
</script>

<style lang="scss">
    @import "../style/default.css";

    .container {
        height: 100%;

        .header {
            text-align: center;
            padding-bottom: 40px;
            background-color: #4b86ec;

            .top {
                color: #fff;
                padding: 12px 0;
                font-size: 14px;
                font-weight: 300;
                background-color: #2e64c3;

                a {
                    color: #fff;
                    opacity: .6;
                    text-decoration: none;
                }
            }
            .middle {
                padding: 40px 0;

                h1 {
                    color: #fff;
                    font-weight: 400;
                }
                p {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 300;
                }
            }
            .bottom {
                .list {
                    font-size: 0;

                    li {
                        margin-right: 10px;
                        display: inline-block;

                        a {
                            color: #fff;
                            font-size: 14px;
                            cursor: pointer;
                            padding: 7px 12px;
                            border-radius: 4px;
                            display: inline-block;
                            text-decoration: none;
                            border: 1px solid #fff;
                            background-color: rgba(255, 255, 255, .15);

                            &:hover {
                                transition: all .4s;
                                background-color: transparent;
                            }
                        }

                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
        .content {
            width: 500px;
            margin: 0 auto;
            padding: 40px 0;

            .group {
                margin-bottom: 40px;

                h2 {
                    color: #383838;
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 20px;
                }
                code {
                    display: block;
                    font-size: 14px;
                    padding: 12px 16px;
                    margin-bottom: 10px;
                    font-weight: normal;
                    background-color: #f0f0f0;
                    font-family: 'Lato', sans-serif;

                    &:last-child {
                        margin-bottom: 0
                    }
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
