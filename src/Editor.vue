<template>
    <div class="editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }" class="p-0 fixed left-0 right-0 z-20">
            <div class="menubar flex p-0 -mt-4 -mx-4 mb-4">

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                >
                    B
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    I
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                >
                    S
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                >
                    U
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                >
                    CODE
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                >
                    P
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })"
                >
                    H1
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                >
                    H2
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                >
                    H3
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                >
                    UL
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                >
                    OL
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click="commands.blockquote"
                >
                    QUOTE
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    :class="{ 'is-active': isActive.code_block() }"
                    @click="commands.code_block"
                >
                    CODE
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    @click="commands.horizontal_rule"
                >
                    HR
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    @click="commands.undo"
                >
                    UNDO
                </button>

                <button
                    class="menubar__button w-full bg-blue-700 text-white py-1 px- tracking-wider border-b-2 border-blue-800 transition duration-200 hover:bg-blue-800 cursor-pointer"
                    @click="commands.redo"
                >
                    REDO
                </button>

            </div>
        </editor-menu-bar>

        <editor-content class="editor__content mt-10" :editor="editor"/>
    </div>
</template>

<script>
    import {Editor, EditorContent, EditorMenuBar} from 'tiptap'
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        HorizontalRule,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History
    } from 'tiptap-extensions'

    export default {
        components : {
            EditorContent,
            EditorMenuBar
        },
        data() {
            return {
                editor : new Editor({
                    extensions : [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({levels : [1, 2, 3]}),
                        new HorizontalRule(),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Link(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Strike(),
                        new Underline(),
                        new History()
                    ],
                    onUpdate   : ({getHTML}) => {
                        const state = getHTML();
                        this.$emit('input', state);
                    },
                    content    : this.value
                })
            }
        },
        beforeDestroy() {
            this.editor.destroy()
        },
        props      : [
            'value'
        ],
        mounted() {
            this.$nextTick(() => {
                const state = this.editor.getHTML();
                this.$emit('input', state);
            })

            window.events.$on('updateContent', value => {
                this.editor.setContent(value, true);
            })
        }
    }
</script>
