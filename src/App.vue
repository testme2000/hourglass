<template>
  <div id="app">
    <MainCanvas errormessage="You need HTML5 to display HourGlass"></MainCanvas>
    <Glass errormessage="Test"></Glass>
  </div>
</template>

<script>
  import MainBoard from './components/MainBoard.vue'
  import Glass from './components/Glass.vue'

export default {
  name: 'app',
  components: {
    MainBoard,
    Glass
  }
}


</script>

<style>
#apphour {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>