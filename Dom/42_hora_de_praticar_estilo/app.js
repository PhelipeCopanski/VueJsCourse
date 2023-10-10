new Vue({
	el: '#desafio',
	data: {
		css: 'destaque',
		userClass: '',
		userClass2: '',
		boolClass: '',
		myStyle: {
			width: '100px',
			height: '100px',
			border: '2px solid black'
		},
		cor: '',
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.css = this.css == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let porcentagem = 0;
			const tempo = setInterval(() => {
				porcentagem += 5;
				this.width = `${porcentagem}%`
				if (porcentagem == 100) {
					clearInterval(tempo)
				}
			}, 500)
		},
		setClass(event) {
			if(event.target.value == "true") {
				this.boolClass = 'secondClass'
			} else if (event.target.value == "false") {
				this.boolClass = ''
			}
		}
	}
})
