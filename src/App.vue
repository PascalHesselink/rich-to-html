<template>
    <div id="app" class="h-screen font-sans flex flex-col">
        <div class="flex items-center justify-center py-4 px-4 bg-blue-500 text-white text-3xl tracking-wide">
            <span>Richtext to HTML</span>
        </div>
        <div class="flex flex-col flex-1 bg-gray-100">
            <Editor v-model="content" @updateContent="updateContent" class="h-full p-4 overflow-y-scroll flex flex-shrink-0" style="height:50%;"/>
            <textarea v-model="content" @keyup="updateContent" class="focus:outline-none p-4 border-t-4 border-blue-500 bg-transparent flex flex-shrink-0" style="height:50%;resize:none;"/>
        </div>
    </div>
</template>

<script>
    import Editor from './Editor';

    export default {
        name       : 'App',
        data() {
            return {
                content : `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of the html converter.
          </p>
          <p>
            you can convert from both ways
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – Pascal Hesselink
          </blockquote>
        `,
            }
        },
        components : {
            Editor
        },
        methods: {
            updateContent() {
                window.events.$emit('updateContent', this.content);
            }
        }
    }
</script>
