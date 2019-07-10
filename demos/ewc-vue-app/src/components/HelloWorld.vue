<template>
  <div class="hello">

    <ext-grid 
      title="Ext Web Components in Vue"
      height="260px"
      columns='[
        {"text": "Name", "width": "250", "dataIndex": "name", "cell": {"style": {"text-align": "left"}}},
        {"text": "Email Address", "flex": "1", "dataIndex": "email", "cell": {"style": {"text-align": "left"}}},
        {"text": "Phone Number", "width": "250", "dataIndex": "phone", "cell": {"style": {"text-align": "left"}}}
      ]'
      data='[
        {"name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224"},
        {"name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234"},
        {"name": "Homer", "email": "homer@simpsons.com", "phone": "555-222-1244"},
        {"name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254"}
      ]'
    >
    </ext-grid>
    
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
