<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-destaque="'red'">Usando diretiva customizada</p>
		<p v-destaque:fundo="'lightblue'">Usando diretiva customizada</p>

		<hr>

		<p v-destaque="'red'">Usando diretiva customizada</p>
		<p v-destaque-local:fundo.atrasar.alternar="{ cor1: 'blue', cor2: 'red', atraso: 3000, intervalo: 1000}">Usando diretiva customizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding) {
				const aplicaCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = binding.value.atraso

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					if (binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicaCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicaCor(binding.value.cor1)
					}
				}, atraso)
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
