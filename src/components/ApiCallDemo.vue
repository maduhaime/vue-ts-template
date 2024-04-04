<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { userService } from '@/services/UserService';

import type { Ref } from 'vue';
import type { User } from '@/services/UserService';

const users: Ref<User[] | undefined> = ref();

onMounted(async () => {
  try {
    users.value = await userService.getUsers();
  } catch (error) {
    console.log(`ApiCallDemo.vue onMounted() error: ${error}`);
  }
});
</script>

<template>
  <div class="users" v-if="users">
    <p>{{ users.length }} user(s) found.</p>
    <p>First user is : {{ users[0].name }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
