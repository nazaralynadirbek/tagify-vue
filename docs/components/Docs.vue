<template lang="pug">
    .container
        .wrapper
            .header
                .top
                    span Tagify Component for #[a(href='https://vuejs.org/', target='_blank') Vue 2.0]
                .middle
                    h1 Docs
                    p Simple component for Vue 2.0
                .bottom
                    ul.list
                        li
                            a(class="github-button",
                              href="https://github.com/naznadmn/tagify-vue",
                              data-show-count="true",
                              aria-label="Star naznadmn/tagify-vue on GitHub") Star
                        li
                            a(class="github-button",
                              href="https://github.com/naznadmn",
                              data-show-count="true",
                              aria-label="Follow @naznadmn on GitHub") Follow @naznadmn
            .content
                .group
                    h2  Basic component
                    tagify(:tags='tags',
                           placeholder='Type your tags here')
        .footer
            p I should write there something for good look, but i have nothing to
</template>

<script>
    import Tagify from '@/Tagify.vue';

    export default {
        data: function() {
            return {
                message: 'Docs',
                tags: ['Moscow', 'Almaty', 'London']
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

        .wrapper {
            height: calc(100% - 60px);

            .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 40px;
                background-color: #f9f9f9;

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
                        color: #383838;
                        font-weight: 400;
                    }
                    p {
                        color: #999;
                        font-size: 14px;
                        font-weight: 300;
                    }
                }
                .bottom {
                    .list {
                        font-size: 0;

                        li {
                            font-size: 14px;
                            margin-right: 20px;
                            display: inline-block;

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

                .group {
                    margin-bottom: 40px;

                    h2 {
                        color: #383838;
                        font-size: 16px;
                        font-weight: 400;
                        margin-bottom: 20px;
                    }
                }
            }
        }
        .footer {
            height: 20px;
            color: #383838;
            font-size: 14px;
            padding: 20px 0;
            line-height: 20px;
            text-align: center;
            background-color: #efefef;
        }
    }
</style>
