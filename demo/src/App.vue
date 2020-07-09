<template>
  <div id="app">
    <h1>Vue-e.164 demo</h1>
    <!--You can use filter with any string  -->
    <p>Using filter: {{'75550001122' | phone}}</p>
    <p>Using directive:
      <span v-phone="{ plus: true, brackets: false, space: false, dash: false, areaCode: true }">75550001122</span>
    </p>
    <p>Using global function: {{phone}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    phone () {
      return this.$filterPhone('75550001122', {
        plus: true,
        brackets: false,
        space: false,
        dash: false,
        areaCode: true
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

#app {
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
