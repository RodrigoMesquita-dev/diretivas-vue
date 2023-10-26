import { createApp } from 'vue'
import App from './App.vue'
import informacao from './directives/informacao';
import posicao from './directives/posicao';
import texto from './directives/texto';

const Vue = createApp(App); 

Vue.directive('texto', texto) // nome, e hooks das diretivas

/*
    além de bindings de valor, podemos tbm fazer binding de argumentos 
    no vue 3 não temos suporte nativo a multiplos argumentos, então podemos passar apenas 1
*/
Vue.directive('posicao', posicao);

/* é possível também fazer binding de modificadores */
Vue.directive('informacao', informacao);

Vue.mount('#app')
