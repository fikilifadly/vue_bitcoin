<template>
    <div>
        <div class="flex flex-col gap-5 w-5/6 mx-auto">
            <h1>{{ param == 'btc'? 'Konversi Bitcoin Ke Rupiah' : 'Konversi Rupiah ke Bitcoin' }}</h1>
            <span>Kurs 1 USD = 14.000 IDR</span>
            <input type="number" @keyup="add(val =$event.target.value)" v-model="input" name="val" id="val" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <div class="center" v-show="param == 'btc'">sorry but please check the console for result: BTC {{ input }} = Rp {{ convert }}</div>
            <div class="center" v-show="param == 'idr'">sorry but please check the console for result: Rp. {{ input }} = BTC {{ convert }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router';

    
    const currencyList = ref()
    const route = useRoute()
    const param = route.params.money
    let idr = 14000
    let input = 0
    let convert = 0
    let price = 0
    let btc = 0

    onMounted(() => {
    let res = []
    let arr = []    
    fetch('https://blockchain.info/ticker')
        .then((response) => response.json())
        .then(currency => {
            arr = Object.entries(currency)
            arr.forEach((e) => {
            if(e[0].includes('USD'))
                res.push(e);
            })
            currencyList.value = res
            
        })
    })
    
    function add(e){
        if( param == 'btc' ){
            price = currencyList._rawValue[0][1].buy
            input = e
            convert = price*idr*input
            console.log(`BTC ${input} = Rp ${convert}`)
        }
        else{
            price = currencyList._rawValue[0][1].buy
            btc = e/idr
            console.log(btc)
            fetch(`https://blockchain.info/tobtc?currency=USD&value=${btc}`)
                .then((response) => response.json())
                .then((data) => console.log(`Rp ${input} = BTC ${data}`))
            
        }
    }

</script>

<style lang="scss" scoped>

</style>