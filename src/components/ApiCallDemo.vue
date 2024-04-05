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
    // TODO: This is never trigger.  Handled by the service...
    console.log(`ApiCallDemo.vue onMounted() error: ${error}`);
  }
});
</script>

<template>
  <p v-if="users">{{ users.length }} user(s) found.</p>

  <div class="table-container">
    <table class="table is-striped is-fullwidth is-narrow">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Company</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody v-if="users">
        <tr v-for="user in users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.city }}</td>
          <td>{{ user.company.name }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
