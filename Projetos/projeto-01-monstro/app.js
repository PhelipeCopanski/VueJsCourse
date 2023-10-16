new Vue({
    el: '#app',
    data: {
        player: 100,
        monster: 100,
        start: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.player == 0 || this.monster == 0
        }
    },
    methods: {
        startGame() {
            this.start = true
            this.player = 100
            this.monster = 100
            this.logs = []
        },
        attack(special) {
            this.hurt('monster', 5, 10, special, 'Jogador', 'Monstro', 'player')
            if (this.monster > 0) {
                this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }
        },
        hurt(prop, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('player', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.player = Math.min(this.player + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')
        },
        getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.start = false
        }
    }
})