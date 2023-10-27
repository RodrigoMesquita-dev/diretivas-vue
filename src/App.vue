<template>
  <p v-texto="configurationTexto">Minha primeira diretiva customizada</p>
  <p v-texto>Teste</p>
  <div v-posicao:absolute="75" v-texto="{ cor: 'green', totalChar: 100 }">Olá eu sou um binding de argumento e valor</div>
  <span>Código A: </span><input type="text"/><span v-informacao:simples.umClickMouse="'você encontrará o código A na parte frontal do equipamento'"> informacao </span>
  <br>
  <span>Código A: </span><input type="text"/><span v-informacao:destacado.doisClicksMouse.sairAutomaticamente="'você encontrará o código E na parte lateral do equipamento'"> informacao </span>
  <h1 v-colorir-fundo-texto="'green'"> Diretiva customizada registrada, localmente </h1>
</template>

<script>
import colorirFundoTexto from '@/directives/colorirFundoTexto'

export default {
  name: 'App',
  directives: {
    colorirFundoTexto: colorirFundoTexto
  },
  data() {
    return {
      configurationTexto: { cor: 'blue', tamanhoFonte: '300%', totalChar: 15 },
    }
  },
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
