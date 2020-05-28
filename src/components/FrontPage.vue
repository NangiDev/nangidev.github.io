<template>
  <div>
    <from-something />
  </div>
</template>

<script>
  import fm from "./articles/about.md"

  export default {
    name: 'FrontPage',
    props: {
    },
    components: {
      FromSomething: fm.vue.component
    },
    data () {
      return {
        title: fm.attributes.title
      }
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
</style>
