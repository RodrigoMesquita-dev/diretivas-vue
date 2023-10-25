import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App); 

Vue.directive('texto', {
    created(el, binding) {
        console.log(binding.value);

        if (binding.value?.cor) el.style.color = binding.value.cor;
        if (binding.value?.tamFonte) el.style.fontSize = binding.value.tamFonte;

        let totalCaracteres = 25

        if (binding.value?.totalChar) totalCaracteres = binding.value.totalChar;
        
        let textoOriginal = el.innerText;
        
        let tamanhoTextoOriginal = textoOriginal.length;
        let textoAjustado = '';

        if (tamanhoTextoOriginal > 25) {
            textoAjustado = textoOriginal.substring(0,totalCaracteres-3) + '...';
        } else {
            textoAjustado = textoOriginal;
        }
        el.innerText = textoAjustado;

        /* let textoOriginal = el.innerText;
        el.style.color = 'red';
        el.style.fontSize = '150%';

        let tamanhoTextoOriginal = textoOriginal.'length;
        let textoAjustado = '';'

        if (binding.value) {
            el.style.color = binding.value;
        }

        if (tamanhoTextoOriginal > 25) {
            textoAjustado = textoOriginal.substring(0,22) + '...';
        } else {
            textoAjustado = textoOriginal;
        }

        el.innerText = textoAjustado;

        console.log('a diretiva foi aplicada com sucesso'); */
    }
}) // nome, e hooks das diretivas

/*
    além de bindings de valor, podemos tbm fazer binding de argumentos 
    no vue 3 não temos suporte nativo a multiplos argumentos, então podemos passar apenas 1
*/
Vue.directive('posicao', {
    created(el, binding) {
        console.log(el, binding.arg, binding.value);

        const posicoesPossiveis = ['relative', 'fixed', 'absolute'];
        
        if(posicoesPossiveis.includes(binding.arg)) {
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
});

/* é possível também fazer binding de modificadores */
Vue.directive('informacao', {
    created(el, binding) {
        console.log(el, binding.arg, binding.modifiers, binding.value);

        let funcao = function() {
            let informacaoSpan = document.createElement('span');
            informacaoSpan.style.position = 'absolute';
            informacaoSpan.style.background = '#ddd';
            informacaoSpan.style.padding = '2px';
            informacaoSpan.innerText = binding.value;

            el.appendChild(informacaoSpan);
            
            informacaoSpan.addEventListener('click', (event) => {
                event.stopPropagation(); // evita a propagação de eventos do pai para o filho
                informacaoSpan.remove();
            });
        }

        if (binding.modifiers['umClickMouse']) {
            el.addEventListener('click', funcao);
        }

        if (binding.modifiers['doisClicksMouse']) {
            el.addEventListener('dblclick', funcao);
        }
    }
})

Vue.mount('#app')
