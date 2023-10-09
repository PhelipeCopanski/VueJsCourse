new Vue({
    el: '#desafio',
    data: {
      nome: 'Phelipe Copanski',
      idade: '30',
      imagem: 'https://cdn.sanity.io/images/8edntncj/production/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png'
    },
    methods: {
        randomNumber() {
            return Math.random()
        }
    }
  })