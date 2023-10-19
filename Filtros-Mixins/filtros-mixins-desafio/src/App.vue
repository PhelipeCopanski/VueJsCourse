<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->

		<p>{{ texto1 | virgula }}</p>
		<hr>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<p>{{ texto2 | contaPalavra }}</p>
		<hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<p>{{ virgula2 }}</p>
		<p>{{ contaPalavra2 }}</p>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import textoMixin from './textoMixin'

export default {
	data() {
		return {
			texto1: 'Trocar espaços por vírgulas',
			texto2: 'Pedro é legal'
		}
	},
	filters: {
		virgula(valor) {
			return valor.replaceAll(' ', ',')
		}
	},
	// computed: {
	// 	virgula2() {
	// 		return this.texto1.replaceAll(' ', ',')
	// 	},
	// 	contaPalavra2() {
	// 		return this.text2.split(' ').map(e => `${e} (${e.length})`).join(' ') 
	// 	}
	// },
	mixins: [textoMixin]
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
