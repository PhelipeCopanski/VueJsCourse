export default {
    computed: {
		virgula2() {
			return this.texto1.replaceAll(' ', ',')
		},
		contaPalavra2() {
			return this.texto2.split(' ').map(e => `${e} (${e.length})`).join(' ') 
		}
	}
}