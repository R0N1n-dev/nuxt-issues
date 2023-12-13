<template>
  <div>
    <input type="file" name="file" @change="seefile" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script setup>
import axios from "axios";
const files = ref(null);
function seefile(e) {
  files.value = e.target.files[0];
  console.log(files.value);
}

async function uploadFile() {
  const formData = new FormData();
  const headers = { "Content-Type": "multipart/form-data" };
  formData.append("file", files.value, files.value.name);
  await $fetch("/api/upload", {
    method: "POST",
    headers,
    body: formData,
  });
}
</script>

<style></style>
