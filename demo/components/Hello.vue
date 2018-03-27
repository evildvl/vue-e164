<template>
  <div class="hello">
    <h2>welcome</h2>
    <h1>{{ phone | phone }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      phone: '1 123 456 78 90'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
