<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { userService } from '@/services/UserService';

const users = ref();

onMounted(async () => {
  users.value = await userService.getUsers();
});
</script>

<template>
  <div class="users" v-if="users">
    <p>{{ users.length }} user(s) found.</p>
    <p>First user is : {{ users[0].name }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
