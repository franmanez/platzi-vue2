Vue.component('CoinDetail', {
  props: ['changePercent', 'title', 'img', 'name'],

  data(){
    return{
      showPrices: false
    }
  },
  methods:{
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      this.color = this.color.split('').reverse().join('')
    }
  },
  template: `
    <div>
        <img v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" v-bind:src="img" v-bind:alt="name">
        <h1 v-bind:class="changePercent > 0 ? 'green' : 'red'">
          {{title}}
          <span v-if="changePercent > 0">👍</span>
          <span v-else>👎</span>
    
          <span v-on:click="toggleShowPrices">{{showPrices ? '🙈' : '🐸'}}</span>
        </h1>
    </div>
  `
})


new Vue({
  el: '#app',

  data () {
    return{
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,
      value: 0,
      price: 8200,
      color: 'f4f4f4',
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices: false
    }
  },

  computed: {
    title() {
      return `${this.name} - ${this.symbol}`
    },

    convertedValue() {
      if(!this.value) return 0
      else return this.value / this.price
    }
  },

  methods:{
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      this.color = this.color.split('').reverse().join('')
    }
  },

  watch:{
    showPrices(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  }
})