export default {
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
  }
}