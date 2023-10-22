<template>
  <p v-texto="{ dor: 'blue', tamFonte: '200%', totalChar: 15}">Minha primeira diretiva customizada</p>
  <p v-texto>Teste</p>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
