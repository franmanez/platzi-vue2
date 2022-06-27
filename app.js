Vue.component('CoinDetail', {
  props: ['coin'],

  data(){
    return{
      showPrices: false,
      value: 0,
    }
  },
  methods:{
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      //this.color = this.color.split('').reverse().join('')

      this.$emit('change-color', 'FF9C7D')
    },
  },
  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`
    },

    convertedValue() {
      if(!this.coin.value) return 0
      else return this.coin.value / this.coin.price
    }
  },
  template: `
    <div>
        <img v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" v-bind:src="coin.img" v-bind:alt="coin.name">
        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
          {{title}}
          <span v-if="coin.changePercent > 0">👍</span>
          <span v-else>👎</span>
    
          <span v-on:click="toggleShowPrices">{{showPrices ? '🙈' : '🐸'}}</span>
        </h1>
        
        <input type="number" v-model="coin.value">
        <span>{{convertedValue}}</span>
    
        <ul v-show="showPrices">
          <li class="uppercase"
              v-bind:class="{orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price}" v-for="(p, i) in coin.pricesWithDays"
              v-bind:key="p.day">
            {{i}} - {{p.day}}, {{p.value}}
          </li>
        </ul>
    
    </div>
  `
})


new Vue({
  el: '#app',

  data () {
    return{
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8200,
        prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ]
      },

      color: 'f4f4f4',
    }
  },


  methods:{
    updateColor(color) {
      this.color = color || this.color.split('').reverse().join('')
    }
  },

  watch:{
    showPrices(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  }
})