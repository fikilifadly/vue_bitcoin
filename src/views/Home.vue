<script setup>
import { onMounted, ref } from 'vue';
   
    // 
const currencyList = ref([])
const isLoading = ref(true)

onMounted(() => {
    let res = []
    let arr = []    
    fetch('https://blockchain.info/ticker')
        .then((response) => response.json())
        .then(currency => {
            arr = Object.entries(currency)
            arr.forEach((e) => {
            if(e[0].includes('AUD') || e[0].includes('EUR') || e[0].includes('GBP') || e[0].includes('JPY') || e[0].includes('USD'))
                res.push(e);
            })
            currencyList.value = res
            isLoading.value = false
        })
})


</script>
<template>
    <div v-show="isLoading" class="min-h-screen min-w-full flex justify-center items-center absolute top-0 right-0">
        <img src="../assets/images/Loading.gif" alt="" class="w-[300px] h-[300px]">
    </div>

    <div v-show="!isLoading" class="container w-10/12 mx-auto py-5 h-full justify-center flex flex-col gap-5 items-center">
        <h1 class="text-center">Harga Bitcoin Hari Ini</h1>
        <div class="relative overflow-x-auto w-full shadow-lg ">
            <table class="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Mata Uang
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Harga Beli Bitcoin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Harga Jual Bitcoin
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in currencyList">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ item[1].symbol }}
                        </th>
                        <td class="px-6 py-4">
                            {{item[1].buy}}
                        </td>
                        <td class="px-6 py-4">
                            {{item[1].sell}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>