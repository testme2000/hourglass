<template>
  <div id="app">
    <MainBoard errormessage="You need HTML5 to display HourGlass"></MainBoard>
  </div>
</template>

<script>
  import MainBoard from './components/MainBoard.vue'

export default {
  name: 'app',
  components: {
    MainBoard
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