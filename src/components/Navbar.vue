<template>
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border mx-auto border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <RouterLink to="/" > Home </RouterLink>  
      </li>
      <li>
        <RouterLink to="/btc-ex/btc" > BTC To IDR </RouterLink>  
      </li>
      <li>
        <RouterLink to="/btc-ex/idr" > IDR To BTC </RouterLink>  
      </li>
    </ul>
  </div>
</nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>