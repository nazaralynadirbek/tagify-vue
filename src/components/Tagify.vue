<template lang="pug">
    .tagify-container(@click='focus', v-bind:class='{ active : focused }')
        .tagify
            transition-group(tag='div', name='tagify-tag-animation')
                span(class='tagify-tag',
                     v-for='(tag, index) in tags',
                     v-bind:key='index') {{ tag }}

                     i(class='icon ion-ios-close-outline',
                       @click='splice(index)')

            input(ref='input',
                  class='tagify-input',
                  v-model='tag',
                  v-bind:placeholder='placeholder',
                  @keyup.enter='push',
                  @keydown.delete='pop',
                  @blur='blur')
</template>

<script>
    export default {
        data: function() {
            return {
                tag: null,
                focused: false
            }
        },

        props: {
            placeholder: {
                type: String,
                default: 'Type here...'
            },
            tags: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            focus: function() {
                this.$refs.input.focus();

                this.focused = true;
            },
            blur: function() {
                this.focused = false;
            },
            push: function() {
                if (!this.tags.includes(this.tag) && !!this.tag) {
                    this.tags.push(this.tag);

                    this.tag = null;
                }
            },
            pop: function() {
                if (!this.tag) {
                    this.tags.pop();
                }
            },
            splice: function(index) {
                this.tags.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss">
    @import url('http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

    .tagify-container {
        cursor: text;
        padding: 0.25rem 0;
        background-color: #fff;
        transition: border-color .4s;
        border-bottom: 2px solid #efefef;

        .tagify {
            &-tag,
            &-input {
                float: left;
                font-size: 14px;
                font-family: 'Helvetica', sans-serif;
            }

            &-tag {
                color: #444;
                height: 32px;
                cursor: pointer;
                padding: 0 12px;
                line-height: 32px;
                border-radius: 16px;
                margin: 2px 12px 2px 0;
                background-color: #efefef;

                &-animation {
                    &-enter-active {
                        transition: all .4s;
                    }

                    &-enter {
                        opacity: 0;
                        transform: translateY(-15px);
                    }
                }

                .icon {
                    font-size: 14px;
                    margin-left: 6px;
                    font-style: normal;
                    font-weight: normal;
                    padding: 6px 0 6px 6px;

                    &:hover {
                        font-weight: bold;
                    }
                }
            }
            &-input {
                padding: 0;
                height: 32px;
                border: none;
                outline: none;
                margin: 2px 0;
            }

            &:after {
                content: '';
                clear: both;
                display: block;
            }
        }

        &.active {
            border-color: #2196f3;
        }
    }
</style>
