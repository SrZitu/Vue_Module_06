<script setup>
import { ref, reactive, computed } from 'vue'
import { countries } from "./data/countries.js";

const search = ref('');

function getCountries() {
  return countries.filter((country) => {
    return country.name.toLowerCase().startsWith(search.value);
  });
}
</script>

<template>
  <section class="mx-auto container text-left">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="my-5">{{ search }}</p>
    <p class="my-5">
      search: <input class="p-3" type="text" v-model="search">
    </p>
    <p class="mt-10" v-for="country in getCountries()" :key="country.code">
    <ul>
      <li>
{{ country.name }}
        <!-- <span class='text-red-500'>{{ search }}</span>{{country.name.toLowerCase().replace(search,'')}} -->
      </li>
    </ul>
    </p>


  </section>
</template>
<style scoped></style>