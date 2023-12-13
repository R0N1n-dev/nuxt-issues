<template>
  <div>
    <div>Select</div>
    <w-select v-model="selectedIngredient" :items="categories" class="mt6"
      >Ingredients</w-select
    >
  </div>
</template>

<script setup>
const selectListItems = ref([
  { label: "Item 1" },
  { label: "Item 2" },
  { label: "Item 3" },
]);
const categories = ref([
  { label: "Appetizer" /*, value: "appetiser"*/ },
  { label: "Snack" /*, value: "snack"*/ },
  { label: "Sides" /*, value: "side"*/ },
  { label: "Main-course" /*, value: "main course"*/ },
  { label: "Dessert" /*, value: "dessert"*/ },
  { label: "Fastfood" /*, value: "fast food" */ },
  { label: "Pastries" /*, value: "pastries"*/ },
]);
const selectedIngredient = ref(null);
</script>
